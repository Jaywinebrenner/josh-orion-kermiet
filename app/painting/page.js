
import { paintings } from '../utils/paintings'
import Navigation from "../components/Navigation";

import React from 'react'

const Paintings = () => {
  return (
    <div className='paintings'>
      <div className='container'>
        <Navigation/>
        <div className='paintings-wrapper'>
          {
              paintings && paintings.map((painting, i) => {
                return (
                  <div className='painting-wrapper'>
                    <img src={painting.imageUrl}/>
                    <p>{painting.title }</p>

                  </div>
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default Paintings