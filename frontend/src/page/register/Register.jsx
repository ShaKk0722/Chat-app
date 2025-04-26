import React from 'react'
import CheckBox from './CheckBox'


const Register = () => {
  return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
              <h1 className='text-3xl font-semibold text-center text-gray-300'>
                  Register <span className='text-blue-500'> ChatApp</span>
              </h1>
          

          <form>
              <div>
                    <label htmlFor="Fullname" className="label p-2">
                    <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input
                        type="text"
                        id="Fullname"
                        placeholder='Enter fullname'
                        className='input w-full input-bordered h-10'
                    ></input>
              </div>
              
              <div>
                    <label htmlFor="Username" className="label p-2">
                    <span className='text-base label-text'>Username</span>
                    </label>
                    <input
                        type="text"
                        id="Username"
                        placeholder='Enter username'
                        className='input w-full input-bordered h-10'

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

                    ></input>
                </div>
              
                <div className='mb-2'>
                    <label htmlFor="Confirm Password" className="label p-2">
                    <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        id="Confirm Password"
                        placeholder='Enter confirm password'
                        className='input w-full input-bordered h-10'

                    ></input>
                      
                  </div>

                  <CheckBox />
                      
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-3 inline-block">
                        Already have an account?
                    </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Register</button>
                </div>



          </form>
        </div>
      </div>
  )
}

export default Register