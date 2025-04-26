import React from 'react'
import SearchInput from './components/SearchInput'
import ConversationList from './components/ConversationList'
import LogoutButton from './components/LogoutButton'



const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>  
            <SearchInput />
            <div className='divider px-3'></div>
            <ConversationList />
            <LogoutButton />
            
        </div>
  )
}

export default Sidebar