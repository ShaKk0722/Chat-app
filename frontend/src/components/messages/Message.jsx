import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	console.log("img", authUser.profilePicture);
	const profilePic = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";
  return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white  bg-blue-500 pb-2 ${bubbleBgColor}  ${shakeClass} `}>{message.message}</div>
		  <div className='flex items-center gap-1 text-xs opacity-50 chat-footer'>{formattedTime}</div>
		</div>
	);
}

export default Message