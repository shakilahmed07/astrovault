import WebLogo from '../../assets/web-logo.png'

const Farms = () => {
  return (
    <div className='bg-[#151617] h-screen py-10'>
     <div className="md:w-9/12 md:mx-auto">
        <div className="flex items-center bg-[#1E2023] md:py-5 py-4 rounded-3xl md:ml-2 mx-2 pl-4">
          <img src={WebLogo} alt="" className="h-[40px] mr-2" />
          <p className="text-[#b9babb] md:text-[16px] text-xs">Earn fees from our ecosystem with <span className="text-purple-700 cursor-pointer">UNCX staking</span></p>
        </div>
      </div>
    </div>
  )
}

export default Farms