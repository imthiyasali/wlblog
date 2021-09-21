import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const Tagname = ({ blok }) => {
 
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white w-full">
        <div className="container  mx-auto py-12 pad">
         
             <p>sssss</p>

     
        </div>
      </div>
    </SbEditable>
  )
}

export default Tagname
