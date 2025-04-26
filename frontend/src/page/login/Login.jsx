import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>         
                <h1 className='text-3xl font-semibold text-center text-gray-300'>login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form>
                    
                    <div>
                        <label htmlFor="Username" className="label p-2">
                        <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type="text"
                            id="Username"
                            placeholder='Enter username'
                            className='input w-full input-bordered h-10'
                            value={username}
                        ></input>
                    </div>

                    <div>
                        <label htmlFor="Password" className="label p-2">
                        <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            id="Password"
                            placeholder='Enter password'
                            className='input w-full input-bordered h-10'
                            value={password}
                        ></input>
                    </div>

                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-3 inline-block">
                        {"Dont't"} have an account?
                    </a>
                </form>


            </div>
        </div>
    );
}

export default Login