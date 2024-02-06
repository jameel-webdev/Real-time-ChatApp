import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import { MessageSkeleton } from "../skeleton/MessageSkeleton";
import { SingleMessage } from "./SingleMessage";

export const AllChats = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <SingleMessage message={message} />
            </div>
          );
        })}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send message to start the conversation</p>
      )}
    </div>
  );
};
