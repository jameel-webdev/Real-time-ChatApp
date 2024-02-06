import useGetConverastions from "../../hooks/useGetConversations";
import generateRandomEmoji from "../../utils/emojiGenerator";
import { UserBar } from "./UserBar";

export const Conversations = () => {
  const { loading, conversations } = useGetConverastions();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => {
        return (
          <UserBar
            key={conversation._id}
            conversation={conversation}
            emoji={generateRandomEmoji()}
            lastIdx={index === conversations.length - 1}
          />
        );
      })}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};
