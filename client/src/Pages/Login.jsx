import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

const Login = () => {
  function login()
  {
    alert("Login Successfull");
  }
  return (
    <>
    <Navbar/>
    <div className='flex justify-center item-center h-screen' id='login'>
     <div className='flex-col my-20  space-y-8 w-[60%] max-sm:px-10 px-20 max-sm:w-[100%]'>
      <h2 className='text-xl font-semibold text-center'>Login To Your Account</h2>
      <form action="" className='flex-col justify-center'>
      <div className="my-4 flex-col  space-y-4">
            <label for="username" className="mr-12 text-xl">Enter your Usernmae:</label><br></br>
            <input className='w-[100%] max-sm:w-[60%] border-2 border-solid border-slate-400 outline-none rounded-md py-2 placeholder:p-2 bg-transparent' placeholder='Enter your Username' type="text" id="username" name="password" required />
            </div>
            <div className="my-4 flex-col space-y-4">
            <label for="username" className="mr-12 text-xl">Enter your Password:</label><br></br>
            <input className='w-[100%] bg-transparent max-sm:w-[60%] border-2 border-solid border-slate-400 outline-none rounded-md py-2 placeholder:p-2'placeholder='Confirm your password' type="password" id="username" name="password" required />
            </div> 
            <button className='w-[240px] max-sm:w-[60%] border-2 border-slate-200 rounded-md p-2 bg-sky-400 text-white font-bold' type="submit" onClick={login}>Login</button>
      </form>
      <div><h2>Don't have an Account?<Link to='/signup'><span className='text-green-900 font-bold'>Create account Here</span></Link></h2></div>
     </div>
     <div className='fixed bottom-0 left-0 right-0'>
     <Footer/>
     </div>
    
    </div>
    </>
    
  )
}

export default Login
