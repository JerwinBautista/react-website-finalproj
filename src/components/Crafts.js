import React from 'react'
import Jewelry1 from "../assets/Jewelry.jpg"
import Jewelry2 from "../assets/Jewelry2.jpg"
import Painting1 from "../assets/Painting1.jpg"
import Painting2 from "../assets/Painting2.jpeg"
import "./CraftsStyles.css"
import CraftsData from './CraftsData'

const Crafts = () =>{
  return (
    <div className='craft'>
        <h1>Let's Support Local!</h1>
        <p>Together, We can make a difference</p>

        <CraftsData 
        className="first-design"
        heading="Handmade Jewelry"
        text=" Handmade jewelry is any piece of jewelry that is created by hand, rather than by mass-produced machinery. 
        This can include pieces that are made from scratch, as well as pieces that are assembled from pre-made components. 
        Handmade jewelry is often unique and one-of-a-kind, and it can be made from a variety of materials, including metals, 
        gemstones, beads, and glass."
        img1={Jewelry1}
        img2={Jewelry2}
        />
        <CraftsData 
        className="first-design-reverse"
        heading="Local Paintings"
        text="Local paintings are artworks that depict scenes, objects, or people from a particular locality or region. 
        They often reflect the unique culture, history, and natural beauty of the place. Local paintings can be created 
        by both established and emerging artists, and they can be found in a variety of settings, including art galleries, 
        museums, and private homes."
        img1={Painting1}
        img2={Painting2}
        />
    </div>
  )
  }

export default Crafts;