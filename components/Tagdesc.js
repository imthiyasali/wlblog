import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const Tagdesc = ({ blok }) => {
 
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white w-full">
         
       <p className='tagdesc' >{render(blok.tagdesc)}</p>

     
       
      </div>
    </SbEditable>
  )
}

export default Tagdesc
