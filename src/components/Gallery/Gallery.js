import React from 'react'
import './Gallery.css'
import Gallerycard from './Gallerycard/Gallerycard'
import {galleryimages} from './galleryData'

function Gallery() {
  return (
    <div className='gallery_wrapper'>
      <div className='gallery_wrapper_inner_wrapper'>
        {galleryimages.map((gm)=>(
        <Gallerycard image={gm}/>

        ))}        
      </div>
    </div>
  )
}

export default Gallery