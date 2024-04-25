
import { paintings } from '../utils/paintings'
import Navigation from "../components/Navigation";
import { animations } from '../utils/animations';
import React from 'react'

const Animation = () => {

  console.log(animations)
  return (
    <div className='animations'>
      <div className='container'>
        <Navigation/>
        <div className='animations-wrapper'>
          {
              animations && animations.map((animation, i) => {
                return (
                  <div key={`animation-key=${i}`} className='animation-wrapper'>
                    <img src={animation.imageSrc}/>
                    <p>{animation.title }</p>
                  </div>
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default Animation