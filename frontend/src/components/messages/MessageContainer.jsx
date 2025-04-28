import React from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from '../../context/AuthContext';


const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
	
  return (
      <div className='md:min-w-[450px] flex flex-col bg-gray-400'>
          {!selectedConversation ? <NoSelected /> : (<>
				{/* Header */}
				<div className='px-4 py-2 mb-2 bg-slate-500'>
					<span className='text-sm label-text'>To:</span> <span className='font-bold text-gray-900'>John doe</span>
				</div>

              <Messages />
              <MessageInput />
                
				
			</>)}
			
		</div>
	);
}

const NoSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl text-center md:text-6xl' />
			</div>
		</div>
	);
};

export default MessageContainer