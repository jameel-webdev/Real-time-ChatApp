import { UserBar } from "./UserBar";

export const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <UserBar />
      <UserBar />
      <UserBar />
      <UserBar />
      <UserBar />
    </div>
  );
};
