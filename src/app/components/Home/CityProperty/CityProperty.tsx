import React from 'react'
import SectionHeading from '../../SectionHeading'
import CitySlider from './CitySlider'

const CityProperty = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[80%]  mx-auto '>
            <SectionHeading heading='Apartments,Villas and more'/>

            <div className='mt-10 md:mt-16'>
                {/* {slider} */}
                <CitySlider/>
            </div>
        </div>
    </div>
  )
}

export default CityProperty