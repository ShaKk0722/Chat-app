import React from 'react'
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import useConversation from '../../../zustand/useConversation';
import useGetConversations from '../../../hooks/useGetConversations';
import { useState } from 'react'

const SearchInput = () => {
  const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
  };
  

  return (
      <form onSubmit={handleSubmit} className='flex items-center gap-3'>
        <input type="text" placeholder="Search" className="w-full max-w-xs input input-bordered border-slate-900" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type='submit' className='text-white btn btn-circle bg-sky-500'>
              <FaSearch className='w-6 h-6 outline-none' />
 		</button>
          
          
    </form>
  )
}

export default SearchInput