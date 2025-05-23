import React from 'react'
import useConversation from "../../../zustand/useConversation";
import { useSocketContext } from '../../../context/SocketContext.jsx';

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;

	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

  return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
					  <img
							src={conversation.profilePicture}
							alt='user avatar'
					  />
					  {isOnline && (
      					<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
)}
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex justify-between gap-3'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='h-1 py-0 my-0 divider' />}
		</>
	);
}

export default Conversation