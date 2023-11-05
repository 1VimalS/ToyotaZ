import Image from 'next/image'
import "./styles.css"
import pfp from "../../../../public/pfp.png"
import PieChart from '../PieChart/PieChart'
export default function ProfileBar2({ name, Pfp, level, points, friend, value }) {

  return (
    <main className="flex flex-row rounded-md profile-wrapper h-[60px] w-full p-[5px] pl-[10px] pr-[10px]">
      <div className='relative flex profile-pic'>
        <Image
          src={Pfp}
          className='rounded-full object-cover object-center'
          width={50}
          height={50}
          alt={''}></Image>
        <svg className="status absolute -bottom-[1px] right-[1px]" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="6.25" cy="6.25" r="5.75" fill="#14FF00" stroke="black" />
        </svg>
      </div>
      <div className='flex flex-col ml-[15px] self-center'>
        <div className='name'>{name}</div>
        <div className='level'>Level {level}</div>
      </div>

      <div className='flex flex-col ml-auto self-center gap-[5px]'>

        {!friend &&
          <div className='flex flex-col'>
            <div className='points'>{points}</div>
            <div className='pts-label text-center mt-[-5px]'>PTS</div>
          </div>

        }

        {friend &&
          <div className='flex ml-auto'>
            <div className='mr-[15px]'>
              <PieChart value={value} size={"md"}/>
            </div>
            <div className='flex flex-col ml-[15px] self-center'>
                <div className='pts'> {points}</div>
                <div className='pts-label'>PTS</div>
            </div>

          </div>}
      </div>
    </main>
  )
}
