import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Signup = () => {
  return ( 
    <>
    <Navbar/>
    <div className='flex justify-center' id='login'>
       <div className=' my-10 max-sm:w-[100%]'>
         <div className='text-2xl font-semibold text-center'>Create an Account</div>
         <form action="" className=' mx-10'>
          <div className=''>
          <div className="my-4 flex-col">
          <label for="username" className="text-black font-semibold">Enter Your Name:</label><br></br>     
          <input className='w-[400px] border-2 border-solid border-slate-800 bg-transparent  outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]'placeholder='Enter your Name' type="text" id="username" name="Email" required />     
            </div> 
            <div className="my-4 flex-col items-center justify-center space-y-2">
            <label for="username" className="text-black font-semibold">Enter your Email:</label><br></br>
            <input className='w-[400px] border-2 border-solid border-slate-800 bg-transparent outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]'placeholder='Enter your Email' type="text" id="username" name="Email" required />
            </div>
            <div className="my-4 flex-col space-y-2">
            <label for="username" className="text-black font-semibold">Enter your Contact:</label><br></br>
            <input className='w-[400px]  border-2 border-solid border-slate-800 bg-transparent outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]' placeholder='Enter your contact No' type="text" id="username" name="phone" required />
            </div>
            <div className="my-4 flex-col space-y-2">
            <label for="username" className="text-black font-semibold">Enter a Password:</label><br></br>
            <input className='w-[400px]   border-2 border-solid border-slate-800 bg-transparent outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]' placeholder='Enter your password' type="password" id="username" name="password" required />
            </div>
            <div className="my-4 flex-col space-y-2">
            <label for="username" className="text-black font-semibold">Confirm your Password:</label><br></br>
            <input className='w-[400px]  border-2 border-solid border-slate-800 bg-transparent outline-none rounded-md py-2 placeholder:p-2 max-sm:w-[100%]'placeholder='Confirm your password' type="password" id="username" name="password" required />
            </div>
            <div className='text-center'>
            <button className=' border-2 border-solid rounded-md btn btn-primary text-white font-bold'>Create Account</button>
            </div>
           

          </div>
           
         </form>
         <div className='w-[100%] text-center'><h2>Already have an Account?<Link to='/login'><span className='text-green-900 font-bold'> Login Here</span></Link></h2></div>
         <div className='w-[100%] text-center mb-10'><h2>OR<br></br><Link to='/login'><span className='text-black font-bold'>Continue With Google</span></Link></h2></div>
        
       </div>
       <div className='fixed bottom-0 left-0 right-0 w-[100%]'>
     <Footer/>
     </div>
    </div>
    </>
    
  )
}

export default Signup
