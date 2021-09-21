import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const Tagname = ({ blok }) => {
 
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white ">
        <div  >
         
          <p className='tagname' >{render(blok.tagname)}</p>


     
        </div>
      </div>
    </SbEditable>
  )
}

export default Tagname
