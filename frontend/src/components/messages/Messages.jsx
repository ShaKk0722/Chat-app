import React from 'react'
import Message from './Message';
import MessageSkeleton from './MessageSkeleton';
import useGetMessages from '../../hooks/useGetMessages';
import { useEffect, useRef } from "react";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	console.log(messages);
	const lastMessageRef = useRef();
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
		<div className='flex-1 px-4 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	  
	);
}

export default Messages