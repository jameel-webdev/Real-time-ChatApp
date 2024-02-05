import { SingleMessage } from "./SingleMessage";

export const AllChats = () => {
  return (
    <div className="px-4 flex-1 overflow-auto">
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
    </div>
  );
};
