import React from 'react'
import SectionHeading from '../SectionHeading'

import Highlightslider from './Highlightslider'

const  Highlight = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[80%]  mx-auto '>
            <SectionHeading heading='Top highlighted projects'/>

            <div className='mt-10 md:mt-16'>
                {/* {slider} */}
                <Highlightslider/>
            </div>
        </div>
    </div>
  )
}

export default Highlight;