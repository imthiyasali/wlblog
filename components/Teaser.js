import React from 'react'
import SbEditable from 'storyblok-react'

const Teaser = ({blok}) => {
  return (
    <SbEditable content={blok}>
      <div className="bg-white ">
        <div className="   headerhtml" >
        <div className="wraper">

        <div className='contenttitle'>
        <div className='line'></div>
        <p className='guide'>Guides</p>
                          <h2 className="titletext  ">{blok.headline}</h2>
                                  <div className='line'></div>

</div>

        </div>


{
  false && 
          <img src={blok.image.filename} alt={blok.image.alt} className="w-full " />
}
 
        </div>
      </div>
    </SbEditable>
  )
}

export default Teaser
