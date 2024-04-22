

import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [LevelOneTotal, setLevelOneTotal] = useState(1000);
  const [HowManyTimeClick, setHowManyTimeClick] = useState(1000);
  const [LevelOneCounter, setLevelOneCounter] = useState(1000);
  const timerRef = useRef(null);


  const handleClick = () => {
    setLevelOneCounter((prev) => prev - 1); 
    setHowManyTimeClick((prev) => prev + 1);
    clearTimeout(timerRef.current); 
  };

 
  const startIncreaseTimer = () => {
    timerRef.current = setTimeout(() => {
      incrementCounter(); 
    }, 1000);
  };

 
  const incrementCounter = () => {
    if (LevelOneCounter < LevelOneTotal) {
      setLevelOneCounter((prev) => prev + 1);
      startIncreaseTimer(); 
    }
  };


  useEffect(() => {
    startIncreaseTimer();
    return () => clearTimeout(timerRef.current); 
  }, []);


  useEffect(() => {
    clearTimeout(timerRef.current);
    startIncreaseTimer(); 
  }, [LevelOneCounter]);


  return (
    <>
       <div className='w-full netcoins-main h-[100vh] py-[100px]'>
        <div className='max-w-[1024px] w-full mx-auto flex flex-col justify-between h-full gap-[20px] px-4 md:px-2 lg:px-0'>
          <div className='flex flex-col justify-center items-center'>
            <div className='collections-bar-wrap max-w-[400px] min-w-[90%] sm:min-w-[400px] mx-auto rounded-xl py-3 px-6 bg-[#c94af8] flex justify-center items-center border border-[#FFDD33]'>
              <h3 className='text-[20px] font-semibold text-[#fff]'> {LevelOneCounter} / {LevelOneTotal} </h3>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <div className='collections-bar-wrap w-[50px] h-[50px] mx-auto rounded-full bg-[#DACD8D] flex justify-center items-center border border-[#FFDD33] cursor-pointer'>
                <div className='hover:shadow-md bg-[#F7CF08] w-[80%] h-[80%] rounded-full flex justify-center items-center'> 
                  <h4 className='text-[22px] font-semibold text-[#DACD8D]'> N </h4> 
                </div> 
              </div>
              <h4 className='text-[28px] font-semibold text-[#fff]'> {HowManyTimeClick} </h4>
            </div>
          </div>
          
          <div className='collections-bar-wrap w-[200px] h-[200px] mx-auto rounded-full bg-[#DACD8D] flex justify-center items-center border border-[#FFDD33] cursor-pointer'>
            <div onClick={handleClick} className='hover:shadow-md bg-[#F7CF08] w-[80%] h-[80%] rounded-full flex justify-center items-center'> 
              <h4 className='text-[72px] font-semibold text-[#DACD8D]'> N </h4> 
            </div> 
          </div>
          <div className='btm-btns-wrap flex justify-between gap-2 sm:gap-[50px]'> 
            <button className='btn'> Shop </button>
            <button className='btn'> Tasks </button>
            <button className='btn'> Out Coin </button>
          </div>
        </div>  
      </div>
    </>
  );
}

export default App;
