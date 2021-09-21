import React from "react"
import SbEditable from "storyblok-react"
import { render, MARK_BOLD } from "storyblok-rich-text-react-renderer"
 import { useRouter } from 'next/router'


import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const BlogPost = ({ blok }) => {
  const router = useRouter()


const  getdata=()=>{
console.log('----------------')
 
 var x=[]
 
if(blok.navhome==undefined){
  return []
}
 

 for(var i=0;i<blok.navhome.length;i++){
var y={},z=[],samp={}
    if(blok.navhome[i].navsub.length>0){


 for(var j=0;j<blok.navhome[i].navsub.length;j++){
samp={

  title: blok.navhome[i].navsub[j].aq,
                itemId: '#'+blok.navhome[i].navsub[j].aq,
}
z.push(samp)
 }


  y={
               title: blok.navhome[i].navtitle,
                itemId: '#'+blok.navhome[i].navtitle,
                subNav: [
                  ...z
                ],

              }
              x.push(y)
    }else{
        y={
               title: blok.navhome[i].navtitle,
                itemId: '#'+blok.navhome[i].navtitle,
              }
              x.push(y)
    }
        

 }

 console.log('==============')
 console.log(x)

    return x



  }


  return (
    <SbEditable content={blok} key={blok._uid}>



      <div className="container   mx-auto  ">
        <div className=" w-full  padx   ">
          <h1 className="titlepost">
            {blok.title}
          </h1>
          <div className='datebox'>
            <p className='mins'>10 Min Read</p>
            <div className='dash'></div>
            <p className='postname'>Posted On August 10, 2021</p>
          </div>
          <div className='imgborder my-16'>
           <img className="w-full"  src={blok.postview_image} />
           </div>
           <div className="w-full pt-20 flex  ">
      <div className='w-25'>

<div className='navright'>
<div className='onpagebor'>
<div className='onpage'>On this Page</div>
<Navigation
             activeItemId="/management/members"
            onSelect={({itemId}) => {
              var x=location.href.split('#')
              if(x.length>1){
                location.href=x[0]+itemId
              }else{
                location.href=location.href+itemId

              }
             //router.push('/en/blog/post2'+itemId)
            }}
            items={getdata()}
          />
          </div>

          <div>
          <img src='https://a.storyblok.com/f/126892/415x250/2b8ee2bdf3/mask-group-5.png' className='imgwid' />
          </div>
          <div className='btns'>
          Get Latest Tutorials in Inbox
          </div>
          <div className='ourserv'>
          Our Services
          </div>
             <div className='ourservs'>
             <p>
          View Ready Made Sites
          </p>
          <p>
         Get Hosting
          </p>
          <p>
          See Courses
          </p>
          </div>



          </div>

      </div>
      <div className='w-75'>
       <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {  

          render(blok.long_text, {
    markResolvers: {
        [MARK_BOLD]: (children) => <strong id={children}>{children}</strong>
    }
})
}

        </div>
      </div>
      
      </div>


        </div>
      </div>

       
    </SbEditable>
  )
}

export default BlogPost
