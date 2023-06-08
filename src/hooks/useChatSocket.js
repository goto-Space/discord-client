import { useCallback, useEffect } from 'react';
import { SOCKET } from '../utils/constants/index';
import { Socket, socket } from '../utils/index';
// eslint-disable-next-line import/no-cycle
import { useScroll, useSelectedChannel, useChats } from '.';

const THRESHOLD = 300;

export const useChatSocket = (chatListRef) => {
  const { scrollToBottom } = useScroll(chatListRef);
  const { id } = useSelectedChannel();
  const { mutate } = useChats(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChat = useCallback(
    async (chat) => {
      await mutate((chats) => {
        if (!chats) return [[chat]];
        chats[0].unshift(chat);
        return [...chats];
      }, false);
      if (chatListRef.current === null) return;
      const { scrollTop, clientHeight, scrollHeight } = chatListRef.current;
      if (scrollHeight - (scrollTop + clientHeight) < THRESHOLD) scrollToBottom({ smooth: true });
    },
  );

  useEffect(() => {
    if (id === null) return;
    Socket.joinChannel({ channelType: 'chatting', id });

    // eslint-disable-next-line consistent-return
    return () => {
      Socket.leaveChannel({ channelType: 'chatting', id });
    };
  }, [id]);

  useEffect(() => {
    socket.on(SOCKET.CHAT_EVENT.CHAT, onChat);
    return () => {
      socket.off(SOCKET.CHAT_EVENT.CHAT);
    };
  }, [onChat]);
};
