import { useRef, useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-cycle
import { useSelectedChannel, useChats } from '.';

const PAGE_SIZE = 20;
const OBSERVER_ROOT_MARGIN = '300px 0px 0px 0px';

export const useChatInfinite = (chatListRef) => {
  const { id } = useSelectedChannel();
  const { chats, setSize, isValidating } = useChats(id);
  const isValidatingRef = useRef(false);
  isValidatingRef.current = isValidating;
  const isEmpty = !chats?.length;
  const isReachingEnd = useRef(false);
  // eslint-disable-next-line max-len
  isReachingEnd.current = (isEmpty || (chats && chats[chats.length - 1]?.length < PAGE_SIZE)) ?? false;
  const observedTarget = useRef(null);
  const onIntersect = useCallback(
    ([entry]) => {
      if (isValidatingRef.current) return;
      if (entry.isIntersecting && !isReachingEnd.current) {
        setSize((size) => size + 1);
      }
    },
    [setSize],
  );

  useEffect(() => {
    if (!observedTarget.current) return;
    if (!chatListRef.current) return;
    const chatListEl = chatListRef.current;
    const observer = new IntersectionObserver(onIntersect, {
      root: chatListEl,
      rootMargin: OBSERVER_ROOT_MARGIN,
    });
    observer.observe(observedTarget.current);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [chatListRef, onIntersect]);

  return { chats, observedTarget };
};
