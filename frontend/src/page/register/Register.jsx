import React from 'react'
import CheckBox from './CheckBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useRegister from '../../hooks/useRegister'

const Register = () => {

    const [inputs, setInput] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        sex: ""
    })

    const handleCheckbox = (sex) => {
        setInput({ ...inputs, sex })
    }
    const { loading, register } = useRegister()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await register(inputs)
    }


    
  return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
              <h1 className='text-3xl font-semibold text-center text-gray-300'>
                  Register <span className='text-blue-500'> ChatApp</span>
              </h1>
          

          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
              <div>
                    <label htmlFor="Fullname" className="label p-2">
                    <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input
                        type="text"
                        id="Fullname"
                        placeholder='Enter fullname'
                        className='input w-full input-bordered h-10'
                        value={inputs.fullName}
                        onChange={(e) => setInput({ ...inputs, fullName: e.target.value})}
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
                        value={inputs.username}
                        onChange={(e) => setInput({ ...inputs, username: e.target.value })}
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
                        value={inputs.password}
                        onChange={(e) => setInput({ ...inputs, password: e.target.value })}
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
                        value={inputs.confirmPassword}
                        onChange={(e) => setInput({ ...inputs, confirmPassword: e.target.value })}
                    ></input>
                      
                  </div>

                  <CheckBox onCheckboxChange={handleCheckbox} selectGender={inputs.sex} />
                      
                  <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-3 inline-block">
                        Already have an account?
                    </Link>

                    <div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>



          </form>
        </div>
      </div>
  )
}

export default Register