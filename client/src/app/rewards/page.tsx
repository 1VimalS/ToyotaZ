import Image from 'next/image'
import mac from '../../../public/macdonald.png'
import uber from '../../../public/uber.jpg'
import jersey from '../../../public/jersey.png'
import walmart from '../../../public/walmart.png'
import state from '../../../public/state.png'
import back from '../../../public/back.png'
import './styles.css'


export default function Rewards() {
  return (
    <main className="flex flex-col w-screen h-screen p-[15px] pt-[50px]">
      <a className="absolute left-5 pt-[2px] w-[20px] z-10" href="/dashboard">
        <Image src={back}></Image>
      </a>


      <h1 className="mt-[25px] font-lexend text-[#D128C9] font-bold">Rewards</h1>
      <div className='mt-[5px] flex flex-row flex-grow-0 gap-[25px] overflow-y-hidden overflow-x-scroll h-[140px] w-[330px] snap-center scroll-smooth focus:scroll-auto'>
        
        <div className='profile-wrapper flex-none p-[5px] h-[130px] w-[330px] rounded-md z-10'>
          <div className='flex flex-row'>
            <Image className="rounded-md object-cover h-[120px] w-[120px]" src={state} /> 
            <div className='flex flex-col mt-auto mb-auto gap-[10px] ml-[5px]'>
              <div className='name'>State Farm</div>
              <div className='level'>keep up driving safe! Click to claim insurance benefits from your provider.</div>
            </div>
          </div>
        </div>
        
        <div className='profile-wrapper flex-none p-[5px] h-[130px] w-[330px] rounded-md z-10'>
          <div className='flex flex-row'>
            <Image className="rounded-md object-cover h-[120px] w-[120px]" src={mac} /> 
            <div className='flex flex-col mt-auto mb-auto gap-[10px] ml-[5px]'>
              <div className='name'>McDonalds</div>
              <div className='level'>Thanks for keeping our roads safe! Click to claim your free reward.</div>
            </div>
          </div>
        </div>


      </div>


      <div className="absolute left-5 pt-[270px]">
        <h1 className="font-lexend text-[#D128C9] font-bold">Categories</h1>
        <hr className="pt-[4px] w-[330px] "></hr>
        <div className="box-content h-[130px] w-[330px] bg-[#EEF1EF] shadow-lg rounded-lg">
          <h1 className="font-lexend absolute left-[135px] top-[320px] font-bold">Ride Sharing</h1>
          <p className="font-lexend absolute left-[135px] top-[350px]"> Click here for available rewards </p>
          <div className="pt-[12px] pl-[7px] box-content h-[75px] w-[100px] rounded-lg">
            <Image className="rounded-lg" src={uber} />
          </div>
        </div>
        <br />
        <div className="box-content h-[130px] w-[330px] bg-[#EEF1EF] shadow-lg rounded-lg">
          <h1 className="font-lexend absolute left-[135px] top-[470px] font-bold">Restaurants</h1>
          <p className="font-lexend absolute left-[135px] top-[500px]"> Click here for available rewards </p>
          <div className="pt-[12px] pl-[7px] box-content h-[75px] w-[100px] rounded-lg">
            <Image className="rounded-lg" src={jersey} />
          </div>
        </div>
        <br />
        <div className="box-content h-[130px] w-[330px] bg-[#EEF1EF] shadow-lg rounded-lg">
          <h1 className="font-lexend absolute left-[135px] top-[620px] font-bold">Retail</h1>
          <p className="font-lexend absolute left-[135px] top-[650px]"> Click here for available rewards </p>
          <div className="pt-[12px] pl-[7px] box-content h-[75px] w-[100px] rounded-lg">
            <Image className="rounded-lg" src={walmart} />
          </div>
        </div>
      </div>
    </main>
  )
}
