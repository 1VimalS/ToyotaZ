"use client"

import Image from 'next/image'
import "./styles.css"
import ModalPopUp from '../Modal/Modal'
import PieChart from '../PieChart/PieChart'
import { useState } from 'react'

export default function ProfileBar({ name, Pfp, level, points, friend, value, nearby }) {

  const [isOpen, setOpen] = useState(false);

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
        <div className='nearby'> {nearby} </div>
        <div className='name'>{name}</div>
        <div className='level'>Level {level}</div>
      </div>

      <div className='flex flex-col ml-auto self-center gap-[5px]'>

        {!friend &&
          <div className='flex flex-col'>
            <div className='points'>{points}</div>
            <div className='pts-label text-center mt-[-5px]'>PTS</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="15" viewBox="0 0 65 15" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M58.2737 0L59.5183 0.917735H61.0556L61.5301 2.40133L62.7746 3.31907L62.2992 4.80446L62.7746 6.28895L61.5301 7.20579L61.0556 8.69028H59.5183L58.2737 9.60802L57.0292 8.69028H55.4937L55.02 7.20579L53.7764 6.28895L54.25 4.80446L53.7764 3.31907L55.02 2.40133L55.4937 0.917735H57.0292L58.2737 0Z" fill="#FFC700" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M54.7075 13.9039L53.7764 11.5026L52 12.9342L53.78 8.05817L54.3843 9.47014L56.4589 9.48267L54.7075 13.9039Z" fill="#FFC700" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M61.7933 13.8851L62.7558 11.5026L64.5 12.9154L62.7523 8.05817L62.1479 9.47014L60.0734 9.48267L61.7933 13.8851Z" fill="#FFC700" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0149 2H20.5837V2.86211L18 2.86211V6.90591C18 8.46874 19.7441 9.7548 21.4558 9.88859C22.0177 10.4906 23.0061 10.928 23.8858 11.1144V12.1714C23.0446 12.4298 21.5419 13.0368 21.4558 13.6982H27.2289C27.1419 13.0368 25.4862 12.4289 24.6433 12.1714V11.1144C25.5264 10.928 26.5591 10.4906 27.1218 9.88859C28.8326 9.7548 30.5 8.46874 30.5 6.90591V2.86211H28.0149V2ZM18.7934 3.62838H20.5235V7.11161C20.5235 7.79895 20.7007 8.45285 21.0126 9.04153C19.7182 8.62929 18.7934 7.56733 18.7934 6.32476V3.62838ZM25.57 7.87672L24.2786 7.16513L22.9859 7.87672L23.2327 6.37158L22.1875 5.30628L23.6315 5.08637L24.2786 3.71836L24.9243 5.08637L26.3684 5.30628L25.3239 6.37158L25.57 7.87672ZM27.4889 9.15274C27.8025 8.53731 27.9822 7.85665 27.9822 7.1367V3.65084H29.7165V6.31472C29.7165 7.61332 28.7875 8.7221 27.4889 9.15274Z" fill="#4B93FF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.1743 12.9462C45.1743 13.278 44.8472 13.5486 44.4432 13.5486H38.0991C37.6951 13.5486 37.368 13.278 37.368 12.9462V12.5932C37.368 12.2622 37.6951 11.9916 38.0991 11.9916H44.4432C44.8472 11.9916 45.1743 12.2622 45.1743 12.5932V12.9462Z" fill="#C6D3D3" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7775 11.1806H37.7824L36.1147 5.20824L37.0097 4.65211L39.3715 7.98654L40.7615 3.38611H41.8737L43.124 8.265L45.6247 4.65211L46.4451 5.20824L44.7775 11.1806Z" fill="#C6D3D3" />
              <path d="M46.7407 4.08736C47.1601 4.08736 47.5 3.74742 47.5 3.32807C47.5 2.90873 47.1601 2.56879 46.7407 2.56879C46.3214 2.56879 45.9814 2.90873 45.9814 3.32807C45.9814 3.74742 46.3214 4.08736 46.7407 4.08736Z" fill="#C6D3D3" />
              <path d="M41.2469 2.5123C41.6645 2.5123 42.003 2.17376 42.003 1.75615C42.003 1.33854 41.6645 1 41.2469 1C40.8293 1 40.4907 1.33854 40.4907 1.75615C40.4907 2.17376 40.8293 2.5123 41.2469 2.5123Z" fill="#C6D3D3" />
              <path d="M35.7711 4.09677C36.1969 4.09677 36.5421 3.75472 36.5421 3.33278C36.5421 2.91084 36.1969 2.56879 35.7711 2.56879C35.3452 2.56879 35 2.91084 35 3.33278C35 3.75472 35.3452 4.09677 35.7711 4.09677Z" fill="#C6D3D3" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 2C2.79766 2 0 4.78047 0 8.20859C0 11.6383 2.79766 14.4188 6.25 14.4188C9.70156 14.4188 12.5 11.6375 12.5 8.20859C12.5 4.78047 9.70156 2 6.25 2ZM8.67812 11.3461L6.26641 9.6875L3.85391 11.3461L4.775 8.6625L2.3625 7.00234H5.34453L6.26641 4.31875L7.18828 7.00234H10.1695L7.75781 8.6625L8.67812 11.3461Z" fill="#D128C9" />
            </svg>
          </div>

        }

        {friend &&
          <div className='flex ml-auto'>
            <div className='mr-[15px]'>
            </div>
            <div className='ml-auto flex flex-col mt-auto mb-auto'>
              <ModalPopUp name={name}/>
              {/* <div className="flex w-[65px] h-[30px] bg-green-700 rounded-[3px]">
                <div className="ml-auto mr-auto self-center text-center text-white text-[11px] font-normal">
                  <button onClick={togglePopup}>Request Ride</button>
                  
                </div>
              </div> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="15" viewBox="0 0 65 15" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.2737 0L59.5183 0.917735H61.0556L61.5301 2.40133L62.7746 3.31907L62.2992 4.80446L62.7746 6.28895L61.5301 7.20579L61.0556 8.69028H59.5183L58.2737 9.60802L57.0292 8.69028H55.4937L55.02 7.20579L53.7764 6.28895L54.25 4.80446L53.7764 3.31907L55.02 2.40133L55.4937 0.917735H57.0292L58.2737 0Z" fill="#FFC700" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M54.7075 13.9039L53.7764 11.5026L52 12.9342L53.78 8.05817L54.3843 9.47014L56.4589 9.48267L54.7075 13.9039Z" fill="#FFC700" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M61.7933 13.8851L62.7558 11.5026L64.5 12.9154L62.7523 8.05817L62.1479 9.47014L60.0734 9.48267L61.7933 13.8851Z" fill="#FFC700" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0149 2H20.5837V2.86211L18 2.86211V6.90591C18 8.46874 19.7441 9.7548 21.4558 9.88859C22.0177 10.4906 23.0061 10.928 23.8858 11.1144V12.1714C23.0446 12.4298 21.5419 13.0368 21.4558 13.6982H27.2289C27.1419 13.0368 25.4862 12.4289 24.6433 12.1714V11.1144C25.5264 10.928 26.5591 10.4906 27.1218 9.88859C28.8326 9.7548 30.5 8.46874 30.5 6.90591V2.86211H28.0149V2ZM18.7934 3.62838H20.5235V7.11161C20.5235 7.79895 20.7007 8.45285 21.0126 9.04153C19.7182 8.62929 18.7934 7.56733 18.7934 6.32476V3.62838ZM25.57 7.87672L24.2786 7.16513L22.9859 7.87672L23.2327 6.37158L22.1875 5.30628L23.6315 5.08637L24.2786 3.71836L24.9243 5.08637L26.3684 5.30628L25.3239 6.37158L25.57 7.87672ZM27.4889 9.15274C27.8025 8.53731 27.9822 7.85665 27.9822 7.1367V3.65084H29.7165V6.31472C29.7165 7.61332 28.7875 8.7221 27.4889 9.15274Z" fill="#4B93FF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M45.1743 12.9462C45.1743 13.278 44.8472 13.5486 44.4432 13.5486H38.0991C37.6951 13.5486 37.368 13.278 37.368 12.9462V12.5932C37.368 12.2622 37.6951 11.9916 38.0991 11.9916H44.4432C44.8472 11.9916 45.1743 12.2622 45.1743 12.5932V12.9462Z" fill="#C6D3D3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7775 11.1806H37.7824L36.1147 5.20824L37.0097 4.65211L39.3715 7.98654L40.7615 3.38611H41.8737L43.124 8.265L45.6247 4.65211L46.4451 5.20824L44.7775 11.1806Z" fill="#C6D3D3" />
                <path d="M46.7407 4.08736C47.1601 4.08736 47.5 3.74742 47.5 3.32807C47.5 2.90873 47.1601 2.56879 46.7407 2.56879C46.3214 2.56879 45.9814 2.90873 45.9814 3.32807C45.9814 3.74742 46.3214 4.08736 46.7407 4.08736Z" fill="#C6D3D3" />
                <path d="M41.2469 2.5123C41.6645 2.5123 42.003 2.17376 42.003 1.75615C42.003 1.33854 41.6645 1 41.2469 1C40.8293 1 40.4907 1.33854 40.4907 1.75615C40.4907 2.17376 40.8293 2.5123 41.2469 2.5123Z" fill="#C6D3D3" />
                <path d="M35.7711 4.09677C36.1969 4.09677 36.5421 3.75472 36.5421 3.33278C36.5421 2.91084 36.1969 2.56879 35.7711 2.56879C35.3452 2.56879 35 2.91084 35 3.33278C35 3.75472 35.3452 4.09677 35.7711 4.09677Z" fill="#C6D3D3" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 2C2.79766 2 0 4.78047 0 8.20859C0 11.6383 2.79766 14.4188 6.25 14.4188C9.70156 14.4188 12.5 11.6375 12.5 8.20859C12.5 4.78047 9.70156 2 6.25 2ZM8.67812 11.3461L6.26641 9.6875L3.85391 11.3461L4.775 8.6625L2.3625 7.00234H5.34453L6.26641 4.31875L7.18828 7.00234H10.1695L7.75781 8.6625L8.67812 11.3461Z" fill="#D128C9" />
              </svg>
            </div>

          </div>}
      </div>
    </main>
  )
}