import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const Tag = ({ blok }) => {
 
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white w-full">
        <div className="container  mx-auto py-12 pad">
         
                           {render(blok.tagname)}


     
        </div>
      </div>
    </SbEditable>
  )
}

export default Tag
