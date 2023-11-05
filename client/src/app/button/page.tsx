"use client"

import React, { useEffect, useState, useRef, use } from 'react';
import PieChart from '../components/PieChart/PieChart'
import { allDrivers } from '../../../test'
import { userData } from '../providers'
import { useRecoilState } from "recoil";
import Link from "next/link"
import Back from "../../../public/back.png"
import Image from "next/image"

const CircleButton = () => {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);
  const [userDataState, setUserDataState] = useRecoilState(userData);

  const [percentagesList, setPercentagesList] = useState();

  const scoreKeys = ["Lane Departure Violation", 'Lane Switches', 'Acceleration/Decelerations over 20mph/s', 
                    'Red Lights/Stops Signs Ran', 'Non-Indicator Turns', 'Seconds while minor speeding',
                    'Seconds while moderate speeding', 'Seconds while major speeding']
  

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if(status === false){
    fetch('http://127.0.0.1:5000/api/trip-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allDrivers[getRandomInt(0, allDrivers.length)]), // Replace with your data
    })
      .then((response) => response.json())
      .then((res) => {
        const [points, ...vars] = res;
        setData(res);
      });}
  }, [status])

  useEffect(() => {
    if(data){
      console.log(data)
      let mistakes = [];
      let penalties = 0;
      let min = null;
      for (const [index, score] of data.slice(1, 10).entries()) {
        if (score != 0) {
          mistakes.push([scoreKeys[index-1], score]) 
          penalties+=score
          if(!min){
            min = [scoreKeys[index-1], score]
          }else if(min[1] > [scoreKeys[index-1], score][1]){
            min = [scoreKeys[index-1], score]
          }
        }
      }
      let newPercentagesList = [];
      for (let i = 0; i < data.length; i++) {
        const percentages = data[i];
        if (i >= 10 && percentages > 0) {
          newPercentagesList.push([percentages, scoreKeys[i - 8]])
        }
      }


      setPercentagesList(newPercentagesList);

      setUserDataState({
        points: Math.floor(userDataState.points+data[0]*1.2),
        score: Math.floor((userDataState.score+data[0])/2),
        weakest: min[0],
        weakest_score: Math.floor(min[1]),
        level: userDataState.level + Math.floor((userDataState.exp + data[0]*1.2)/(100*2**userDataState.level)),
        exp: Math.floor((userDataState.exp + data[0]*1.2)%(100*2**userDataState.level))   
      })
    }
  }, [data])

  useEffect(() => {
    console.log(userDataState)
  },[userDataState])

  useEffect(() => {
    console.log(percentagesList)
  },[percentagesList])
  
  return (
    <div className="flex justify-center h-screen p-[15px]">

      {!data ?
        <div className='flex flex-col'>
          {!status &&
                  <Link href="/dashboard">
                    <div className="absolute left-5 pt-[20px] w-[20px] top-4">
                    <Image src={Back} />
                    </div>
                  </Link>}
          <button
            className="mt-auto mb-auto w-32 h-32 bg-[#D128C9] text-white rounded-full border-none cursor-pointer font-bold text-lg transition-colors duration-300 hover:bg-[#B91EAB]"
            onClick={() => {setStatus(!status)}}
          >
            {status ? 'Stop' : 'Start'}
          </button>
        </div>: 
        <div>
          <a href="/dashboard">Back</a>
          <div className="flex w-[275px] h-[104px] relative bg-fuchsia-600 rounded-[5px] shadow">
              <div className="flex m-auto text-center self-center text-zinc-100 text-[34px] font-normal">Drive Report</div>
          </div>
          <div className="relative">
            <svg className="absolute left-[30px] top-[75px]" width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <path fill="#444" d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path>
            </svg>
            <h2 className="pt-[75px] ml-[70px] text-xl">Hard Brake: {data[3]}</h2>
        </div>
        <div className="relative">
          <svg className="absolute left-[30px] top-[25px]" width="30px" height="30px" viewBox="0 0 16 16" fill="currentColor" xmlns="bi bi-stoplights-fill absolute left-[-10px] top-[500px]">
            <path fill-rule="evenodd" d="M6 0a2 2 0 0 0-2 2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1c1.2-.4 1.833-1.5 2-2h-2V8c1.2-.4 1.833-1.5 2-2h-2V4c1.2-.4 1.833-1.5 2-2h-2a2 2 0 0 0-2-2H6z"/>
          </svg>
          <h2 className="pt-[25px] ml-[70px] text-xl">Lights Ran: {data[4]}</h2>
        </div>
        <div className="relative">
          <svg className="absolute left-[30px] top-[25px]" width="30px" height="30px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#292D32"/>
            <path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V21C11.25 20.59 11.59 20.25 12 20.25C12.41 20.25 12.75 20.59 12.75 21V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="#292D32"/>
            <path d="M1.99814 22.7481C1.93814 22.7481 1.87814 22.7381 1.81814 22.7281C1.41814 22.6281 1.16814 22.2181 1.26814 21.8181L2.26814 17.8181C2.36814 17.4181 2.76814 17.1681 3.17814 17.2681C3.57814 17.3681 3.82814 17.7781 3.72814 18.1781L2.72814 22.1781C2.63814 22.5181 2.33814 22.7481 1.99814 22.7481Z" fill="#292D32"/>
            <path d="M21.7526 22.5026C21.4126 22.5026 21.1126 22.2726 21.0226 21.9326L20.0226 17.9326C19.9226 17.5326 20.1626 17.1226 20.5726 17.0226C20.9726 16.9226 21.3826 17.1626 21.4826 17.5726L22.4826 21.5726C22.5826 21.9726 22.3426 22.3826 21.9326 22.4826C21.8726 22.4926 21.8126 22.5026 21.7526 22.5026Z" fill="#292D32"/>
            <path d="M19.1383 5.3C19.1383 5.6 18.8883 5.84 18.5983 5.84H5.52828C5.22828 5.84 4.98828 5.59 4.98828 5.3C4.98828 5 5.23828 4.76 5.52828 4.76H6.26828L6.54828 3.45C6.80828 2.17 7.34828 1 9.50828 1H14.5983C16.7583 1 17.3083 2.17 17.5683 3.44L17.8483 4.75H18.5883C18.8883 4.75 19.1383 5 19.1383 5.3Z" fill="#292D32"/>
            <path d="M19.4482 9.39969C19.3382 8.19969 19.0182 6.92969 16.6882 6.92969H7.42819C5.09819 6.92969 4.78819 8.20969 4.66819 9.39969L4.25819 13.8197C4.20819 14.3697 4.38819 14.9197 4.76819 15.3397C5.15819 15.7597 5.69819 15.9997 6.27819 15.9997H7.63819C8.81819 15.9997 9.03819 15.3297 9.18819 14.8797L9.33819 14.4397C9.50819 13.9397 9.54819 13.8197 10.1982 13.8197H13.9182C14.5682 13.8197 14.5882 13.8897 14.7782 14.4397L14.9282 14.8797C15.0682 15.3297 15.2982 15.9997 16.4682 15.9997H17.8282C18.3982 15.9997 18.9482 15.7597 19.3382 15.3397C19.7182 14.9297 19.8982 14.3697 19.8482 13.8197L19.4482 9.39969ZM9.87819 10.9197H7.70819C7.40819 10.9197 7.16819 10.6697 7.16819 10.3797C7.16819 10.0897 7.41819 9.83969 7.70819 9.83969H9.88819C10.1882 9.83969 10.4282 10.0897 10.4282 10.3797C10.4282 10.6697 10.1782 10.9197 9.87819 10.9197ZM16.4082 10.9197H14.2282C13.9282 10.9197 13.6882 10.6697 13.6882 10.3797C13.6882 10.0897 13.9382 9.83969 14.2282 9.83969H16.4082C16.7082 9.83969 16.9482 10.0897 16.9482 10.3797C16.9482 10.6697 16.7082 10.9197 16.4082 10.9197Z" fill="#292D32"/>
          </svg>
          <h2 className="pt-[25px] ml-[70px] text-xl">Lane Departure: {data[1]}</h2>
        </div>
        <div className="relative">
        <svg className="absolute left-[30px] top-[25px]" fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>stop</title>
          <path d="M21.562 2h-11.551l-8.261 8.239v11.521l8.261 8.24 11.551-0.073 8.188-8.167v-11.521l-8.188-8.239zM28.75 21.349l-7.604 7.583-10.725 0.068-7.671-7.651v-10.699l7.671-7.65h10.726l7.604 7.65v10.699zM24.191 15.977c0.192-0.051 0.353-0.141 0.48-0.27 0.114-0.116 0.198-0.242 0.25-0.379 0.053-0.138 0.079-0.297 0.079-0.48 0-0.199-0.034-0.372-0.104-0.52-0.069-0.146-0.174-0.267-0.314-0.36-0.123-0.080-0.265-0.137-0.428-0.17s-0.365-0.051-0.607-0.051h-0.641v2.305h0.527c0.313 0 0.566-0.025 0.758-0.075zM20.003 14.225c-0.153-0.201-0.339-0.352-0.557-0.452s-0.462-0.15-0.733-0.15c-0.281 0-0.527 0.049-0.737 0.146-0.21 0.099-0.396 0.25-0.558 0.456-0.153 0.198-0.271 0.447-0.354 0.746s-0.123 0.639-0.123 1.017c0 0.764 0.16 1.349 0.48 1.754 0.321 0.405 0.751 0.607 1.291 0.607s0.969-0.202 1.288-0.607 0.479-0.99 0.479-1.754c0-0.386-0.042-0.727-0.125-1.024-0.083-0.298-0.2-0.544-0.351-0.739zM10.626 3.5l-7.376 7.356v10.286l7.376 7.357 10.313-0.065 7.311-7.292v-10.286l-7.311-7.356h-10.313zM10.502 17.915c-0.093 0.221-0.223 0.408-0.389 0.562-0.188 0.169-0.4 0.3-0.636 0.391s-0.531 0.137-0.886 0.137c-0.423 0-0.781-0.044-1.077-0.131s-0.574-0.194-0.834-0.322v-0.969h0.055c0.256 0.238 0.545 0.423 0.868 0.554s0.635 0.196 0.935 0.196c0.428 0 0.751-0.089 0.97-0.267s0.329-0.413 0.329-0.705c0-0.23-0.058-0.42-0.173-0.565s-0.298-0.253-0.549-0.323c-0.181-0.053-0.345-0.096-0.493-0.129s-0.336-0.080-0.56-0.138c-0.201-0.052-0.382-0.118-0.54-0.199-0.159-0.080-0.301-0.186-0.423-0.316-0.12-0.128-0.214-0.278-0.28-0.451s-0.1-0.373-0.1-0.601c0-0.472 0.184-0.866 0.552-1.186s0.838-0.479 1.409-0.479c0.326 0 0.635 0.033 0.926 0.098s0.561 0.157 0.809 0.276v0.923h-0.059c-0.186-0.167-0.423-0.312-0.713-0.438s-0.595-0.188-0.913-0.188c-0.36 0-0.651 0.084-0.873 0.252s-0.333 0.388-0.333 0.661c0 0.247 0.065 0.443 0.196 0.589s0.32 0.253 0.568 0.32c0.164 0.044 0.365 0.095 0.603 0.15s0.435 0.107 0.592 0.154c0.401 0.123 0.695 0.308 0.88 0.556 0.186 0.247 0.278 0.552 0.278 0.914 0 0.228-0.046 0.452-0.139 0.674zM15.887 13.888h-1.891v5.008h-0.961v-5.008h-1.828v-0.875h4.68v0.875zM22.133 13.075h1.461c0.344 0 0.637 0.029 0.879 0.086s0.456 0.15 0.641 0.277c0.216 0.148 0.386 0.337 0.508 0.564 0.122 0.229 0.184 0.504 0.184 0.826 0 0.253-0.045 0.492-0.135 0.717-0.090 0.226-0.214 0.418-0.373 0.576-0.2 0.198-0.437 0.348-0.707 0.449-0.271 0.102-0.613 0.152-1.027 0.152h-0.656v2.172h-0.773v-5.819zM21.285 15.987c0 0.473-0.060 0.899-0.18 1.28s-0.293 0.7-0.521 0.959c-0.237 0.271-0.514 0.472-0.83 0.601-0.317 0.129-0.665 0.193-1.046 0.193-0.394 0-0.748-0.066-1.063-0.199s-0.586-0.331-0.813-0.595c-0.224-0.259-0.396-0.577-0.516-0.955-0.12-0.379-0.18-0.807-0.18-1.284 0-0.49 0.061-0.921 0.182-1.291s0.294-0.689 0.518-0.955c0.225-0.259 0.495-0.455 0.812-0.589 0.316-0.135 0.671-0.202 1.062-0.202 0.396 0 0.753 0.069 1.071 0.208 0.317 0.138 0.586 0.332 0.805 0.583 0.222 0.256 0.394 0.572 0.517 0.951 0.121 0.378 0.182 0.81 0.182 1.295z"></path>
          </svg>
          <h2 className="pt-[25px] ml-[70px] text-xl">Speeding: {data[6] + data[7] + data[8]}</h2>
        </div>
          <h2 className="pt-[50px] ml-[70px] text-3xl font-bold text-[#D128C9] mt-[10px]">
              Final Grade: {data[0]}</h2>
              {percentagesList && (
              <div>
                {percentagesList.map(([percentage, score], i) => (
              <div key={i}>
                <PieChart value={percentage * 100} size="lg" />
                <p
                  style={{
                    position: 'absolute',
                    left: '150px',
                    top: `${525 + i * 75}px`,
                  }}
                >
                  {score}
                </p>
              </div>
            ))}
              </div>
            )}
        </div>
        
        }     
    </div>
  );
}

export default CircleButton;
