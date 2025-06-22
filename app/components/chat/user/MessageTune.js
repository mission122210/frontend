import React, { useEffect, useRef } from "react";

const MessageTone = ({ messages }) => {
  const prevMessagesLengthRef = useRef(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const currentLength = (messages["001"] || []).length;
    if (prevMessagesLengthRef.current < currentLength) {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }
    prevMessagesLengthRef.current = currentLength;
  }, [messages]);

  return <audio ref={audioRef} src="/notification.mp3" preload="auto" />;
};

export default MessageTone;
