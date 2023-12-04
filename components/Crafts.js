import React from 'react'
import Jewelry1 from "../assets/Jewelry.jpg"
import Jewelry2 from "../assets/Jewelry2.jpg"
import "./CraftsStyles.css"

const Crafts = () =>{
  return (
    <div className='craft'>
        <h1>Let's Support Local Products</h1>
        <p>It's your opportunity to buy authentic and handmade products</p>

        <div className='first-design'>
            <div className='design-text'>
                <h2>Handmade Jewelry</h2>
                <p>
                    Handmade jewelry is any piece of jewelry that is created by hand, rather than by mass-produced machinery. This can include pieces that are made from scratch, 
                    as well as pieces that are assembled from pre-made components. 
                    Handmade jewelry is often unique and one-of-a-kind, and it can be made from a variety of materials, including metals, gemstones, beads, and glass. 
                </p>
            </div>
            <div className='image'>
                <img alt='img' src={Jewelry1} />
                <img alt='img' src={Jewelry2} />
            </div>
        </div>
    </div>
  )
  }

export default Crafts;