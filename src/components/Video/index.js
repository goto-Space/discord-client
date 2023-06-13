import React, { useEffect, useRef, useState } from 'react';

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [connected, setConnected] = useState(false);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);

  const websocketRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideosRef = useRef([]);

  useEffect(() => {
    // 웹 소켓 연결
    const websocket = new WebSocket('ws://localhost:8443/signal');
    websocketRef.current = websocket;

    websocket.onopen = () => {
      console.log('Connected to websocket');
      setConnected(true);
    };

    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      handleMessage(message);
    };

    websocket.onclose = () => {
      console.log('Disconnected from websocket');
      setConnected(false);
    };

    // 로컬 비디오 스트림 가져오기
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setLocalStream(stream);
        localVideoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing local media devices:', error);
      });

    return () => {
      // 컴포넌트 언마운트 시 웹 소켓 연결 해제
      websocket.close();
    };
  }, []);

  const handleMessage = (message) => {
    const {
      type, senderId, channelId, candidate, sdp,
    } = message;

    switch (type) {
      case 'offer':
      case 'answer':
      case 'ice':
        // 원격 비디오 스트림 처리
        break;
      case 'join':
        // 새로운 사용자 입장 처리
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const message = {
      senderId: 123, // 사용자 ID 설정
      type: 'text', // 텍스트 메시지 타입
      content: inputValue,
    };

    // 웹 소켓을 통해 메시지 전송
    websocketRef.current.send(JSON.stringify(message));

    setInputValue('');
  };

  return (
    <div>
      <div>
        <video ref={localVideoRef} autoPlay muted />
        {remoteStreams.map((stream, index) => (
          <video key={index} ref={(ref) => (remoteVideosRef.current[index] = ref)} autoPlay />
        ))}
      </div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.content}</div>
        ))}
      </div>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatComponent;
