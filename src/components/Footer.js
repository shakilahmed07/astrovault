import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#1E2023] text-[#B9BABB]'>
      <div className='flex items-center justify-center space-x-8 py-10'>
        <div className='flex space-x-6'>
          <BsTwitter className='h-7 w-8 cursor-pointer' />
          <FaTelegramPlane className='h-7 w-8 cursor-pointer' />
        </div>
        <div className='flex space-x-8 text-[14px]'>
          <p className='cursor-pointer'>Terms and Conditions</p>
          <p className='cursor-pointer hidden md:inline'>Privacy Policy</p>
          <p className='cursor-pointer hidden md:inline'>unicrypt.network</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer