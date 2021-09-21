import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const Idelement = ({ blok }) => {
 
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className=" w-full">
        <div className="container  mx-auto py-12 pad">
         
              <h1>{blok.test}</h1>

     
        </div>
      </div>
    </SbEditable>
  )
}

export default Idelement
