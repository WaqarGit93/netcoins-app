import React from 'react'
import { Link } from 'react-router-dom'

const Tasks = () => {
  return (
    <section className='w-full netcoins-main h-[100vh] pt-[40px] pb-[60px] sm:py-[100px]'>
        <div className='max-w-[1024px] w-full mx-auto flex flex-col justify-between h-full gap-[20px] px-4 md:px-2 lg:px-0'>

    
        <div className='btm-btns-wrap flex justify-between gap-2 sm:gap-[50px]'> 
            <Link to='/' className='btn'> Back </Link>
        </div>
        </div>  
    </section>
  )
}

export default Tasks