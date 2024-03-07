import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full ' key={name}>
                <img src={imgURL} alt="" className='w-[280px] h-[280px]' />
                <div className='flex mt-8 gap-2.5 justify-start'>
                    <img src={star} alt="rating"
                    width={24}
                    height={24}/>
                    <p className=' font-montserrat text-lg text-slate-gray leading-normal'>(4.5)</p>
                </div>
        <p className=' mt-2 font-semibold leading-normal font-palanquin text-2xl'>{name}</p>
        <p className=' mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'> {price}</p>
    </div>
  )
}

export default PopularProductCard