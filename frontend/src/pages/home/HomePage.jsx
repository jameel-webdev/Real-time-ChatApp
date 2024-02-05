import { MessageContainer } from "../../components/Message/MessageContainer";
import { SidebarComponent } from "../../components/Sibebar/SidebarComponent";

export const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SidebarComponent />
      <MessageContainer />
    </div>
  );
};
