"use client"
import Link from 'next/link'
import ProfileBar from '../components/ProfileBar/ProfileBar'
import PieChart from '../components/PieChart/PieChart'
import { userData } from '../providers'
import { useRecoilState } from "recoil";
import './styles.css'
import { useEffect } from 'react'
import pfp from "../../../public/pfp.png"
import {useDisclosure} from "@nextui-org/react";
import DashModal from '../components/Modal/DashModal'


export default function Dashboard() {

  const [userDataState, setUserDataState] = useRecoilState(userData);

  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    const interval = setTimeout(() => {
      console.log('hi')
      onOpen();
    }, 30000);
  });

  return (
    <main className="flex w-screen h-screen p-[15px] pt-[50px] flex-col">
      <DashModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <ProfileBar name={"Matt John"} level={userDataState.level} points={userDataState.points} Pfp={pfp}/>
      <div className='welcome mt-[15px] mb-[30px]'>Hello, <span className='welcome-name'>Matt!</span></div>

      <div className='long-tile tile p-[5px] pt-[10px] pb-[10px] flex flex-row'>
        <div className='flex flex-col'>
          <div className='streak'>Super Driver</div>
          <div className='streak-label'>100 Day Streak</div>
        </div>


        <div className='ml-auto flex flex-col self-center gap-2'>
          <div className='xp-pts'>{100*(2**userDataState.level)-userDataState.exp} points to level up!</div>
          <div className='xpbar ml-auto w-[100px] h-[5px]'></div>
        </div>
      </div>


      
      <div className='flex flex-row flex-grow-0'>
        <div className='flex flex-col'>
          <div className="flex tile mt-[15px] w-[169px] h-[90px] bg-white rounded-[5px] border border-gray-300">
            <div className='self-center ml-auto mr-auto'>
              <PieChart value={userDataState.score} size={"lg"}/>
            </div>
          </div>
          <a className="flex flex-col mt-[15px] ml-[0px] tile w-[169px] h-[169px] bg-white rounded-[5px] border border-gray-300" href="/friends">
          <svg className="ml-auto mt-auto mr-auto self-center" xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 50 52" fill="none">
            <path opacity="0.4" d="M38.8923 14.4454C38.7171 14.4204 38.5418 14.4204 38.3666 14.4454C34.4861 14.3203 31.4067 11.1408 31.4067 7.23523C31.4067 3.2546 34.6363 0 38.642 0C42.6226 0 45.8772 3.22957 45.8772 7.23523C45.8522 11.1408 42.7728 14.3203 38.8923 14.4454Z" fill="#00C2FF"/>
            <path opacity="0.4" d="M47.0551 31.7947C44.2512 33.6724 40.3206 34.3734 36.6905 33.8977C37.6418 31.8448 38.1425 29.5666 38.1676 27.1632C38.1676 24.6596 37.6168 22.2812 36.5653 20.2033C40.2705 19.7027 44.2011 20.4036 47.0301 22.2813C50.9857 24.8849 50.9857 29.166 47.0551 31.7947Z" fill="#00C2FF"/>
            <path opacity="0.4" d="M11.1314 14.4454C11.3066 14.4204 11.4819 14.4204 11.6571 14.4454C15.5376 14.3203 18.617 11.1408 18.617 7.23523C18.617 3.2546 15.3874 0 11.3817 0C7.40109 0 4.14648 3.22957 4.14648 7.23523C4.17152 11.1408 7.25088 14.3203 11.1314 14.4454Z" fill="#00C2FF"/>
            <path opacity="0.4" d="M11.4036 27.1637C11.4036 29.5921 11.9294 31.8954 12.8807 33.9733C9.35072 34.3488 5.67052 33.5978 2.9667 31.8203C-0.988899 29.1915 -0.988899 24.9105 2.9667 22.2818C5.64548 20.4792 9.42583 19.7532 12.9809 20.1538C11.9544 22.2567 11.4036 24.6351 11.4036 27.1637Z" fill="#00C2FF"/>
            <path d="M25.3525 34.7241C25.1522 34.6991 24.9269 34.6991 24.7016 34.7241C20.095 34.5739 16.4148 30.7935 16.4148 26.137C16.4148 21.3802 20.2453 17.5248 25.027 17.5248C29.7838 17.5248 33.6392 21.3802 33.6392 26.137C33.6392 30.7935 29.984 34.5739 25.3525 34.7241Z" fill="#00C2FF"/>
            <path d="M17.2159 39.9062C13.4355 42.4348 13.4355 46.5907 17.2159 49.0942C21.522 51.9733 28.582 51.9733 32.8881 49.0942C36.6684 46.5656 36.6684 42.4097 32.8881 39.9062C28.607 37.0271 21.5471 37.0271 17.2159 39.9062Z" fill="#00C2FF"/>
          </svg>
          <div className="mb-auto text-center h-3 text-black text-2xl font-semibold">Friends</div>
        </a>
        </div>

        <div className='ml-[5px] flex flex-col'>
            <a href="/rewards">
              <div className="mt-[15px] tile w-[169px] h-[169px] bg-white rounded-[5px] border border-gray-300">
                <svg className="mt-[30px] ml-[50px] self-center ml-auto mr-auto w-[80px] h-[80px] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/> <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/> </svg>
                <div className="self-center ml-auto mr-auto text-center h-3 text-black text-2xl font-semibold">Point Shop</div>
              </div>
            </a>
            <a href="/Infopage">
          <div className="flex tile mt-[15px] w-[169px] h-[140px] bg-white rounded-[5px] border border-gray-300">
            <div className='self-center ml-auto mr-auto'>
            <svg className="ml-auto mr-auto mt-auto" xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 512 512"><path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg>
            <div className="self-center ml-auto mr-auto text-center h-3 text-black text-2xl font-semibold">Information</div>
            </div>
          </div>
          </a>
          <a href="/settings">
          <div className="flex tile mt-[15px] w-[169px] h-[120px] bg-white rounded-[5px] border border-gray-300">
            <div className='self-center ml-auto mr-auto'>
            <svg className="ml-auto mr-auto" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
            <div className="self-center ml-auto mr-auto text-center h-3 text-black text-2xl font-semibold">Settings</div>
            </div>
            
          </div>
          </a>
        </div>
      </div>



      <div className='flex flex-row -mt-[170px]'>
        <a href="/button">
        <div className="flex flex-col tile w-[169px] h-[169px] bg-white rounded-[5px] border border-gray-300">
          <svg className="ml-auto mt-auto mr-auto self-center" xmlns="http://www.w3.org/2000/svg" width="54" height="58" viewBox="0 0 54 58" fill="none">
            <path d="M2 28.6131V17.4968C2 3.69504 11.7736 -1.95676 23.733 4.9441L33.3817 10.5023L43.0304 16.0604C54.9899 22.9613 54.9899 34.2649 43.0304 41.1658L33.3817 46.724L23.733 52.2821C11.7736 59.183 2 53.5311 2 39.7294V28.6131Z" fill="#2DFFE6" stroke="black" stroke-width="3.72701" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div className="mb-auto text-center h-3 text-black text-2xl font-semibold">Start Drive</div>
        </div>
        </a>
        
        
      </div>


    </main>
  )
}