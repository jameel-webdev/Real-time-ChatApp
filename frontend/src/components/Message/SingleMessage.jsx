export const SingleMessage = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            alt="user-avatar-img"
          />
        </div>
      </div>

      <div className="chat-bubble text-white bg-blue-500">Hi, Whatsapp</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:03
      </div>
    </div>
  );
};
