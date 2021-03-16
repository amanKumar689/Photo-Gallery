import React from 'react'
import {motion} from 'framer-motion'
const Image_upload = (props) => {

  let element
   element = props.url.map((url,index)=>{
          
     
      return   <motion.div className="image-grid" key={url.id} layout>
       <img src={url.url} ></img> </motion.div> 
      

      })
      
      element.reverse()
    return (
     <>
      {
         
      element
    
       } </>
    )
}

export default Image_upload
