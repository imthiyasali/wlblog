import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const Tag = ({ blok }) => {
 
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white flex">
        

          <p className='tag' >{render(blok.tag)}</p>

     
        
      </div>
    </SbEditable>
  )
}

export default Tag
