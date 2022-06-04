import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/5b9fdff5-be3d-4fc6-9606-dd1b4002f277/IN-en-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='w-full fixed px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        <form className='w-full flex flex-col py-4'>
                            <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email or Phone number' autoComplete='email' />
                            <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' />
                            <button className='bg-red-600 my-6 py-3 rounded font bold '>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-1' type="checkbox" /> Remember me</p>
                                <p>Need help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600'>New to Netflix ?</span>{' '}<Link to='/login'>Sign Up</Link></p>
                        </form>
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Login
