import React from 'react'
import Conversation from './Conversation'
import { getRandomEmoji } from '../../../utils/emojis.js'
import useGetConversations from '../../../hooks/useGetConversations.js'

const ConversationList = () => {
  const { loading, conversations } = useGetConversations();
  return (
      <div className='py-2 flex flex-col overflow-auto'>
          {conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
 		  </div>)
}

export default ConversationList