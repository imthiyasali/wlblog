import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => (
  <SbEditable content={blok}>
    <div    >
      
<div className='codewrapper'>

      <div className='flex codetop'>
      <div className='red'></div>

      <div className='yellow'></div>

      <div className='green'></div>
      </div>
      <div className='codeact'>
      { blok.code}
      </div>

 


 </div>





      
<div className='outputwrapper'>

      <div className='flex codetop'>

      <div className='red'></div>
      <div className='yellow'></div>
      <div className='green'></div>
      
      </div>
      <div className='outputact'>
       {blok.output}
      </div>

 


 </div>







 



    </div>
  </SbEditable>
)

export default Grid
