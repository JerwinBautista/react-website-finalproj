import React from 'react'
import Jewelry1 from "../assets/Jewelry.jpg"
import Jewelry2 from "../assets/Jewelry2.jpg"
import Painting1 from "../assets/Painting1.jpg"
import Painting2 from "../assets/Painting2.jpeg"
import Bag1 from "../assets/Bag1.jpg"
import Bag2 from "../assets/Bag2.jpg"
import Keychain1 from "../assets/Keychain1.jpg"
import Keychain2 from "../assets/Keychain2.jpg"
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
        <CraftsData 
        className="first-design"
        heading="Handmade Bags"
        text=" Handmade bags are bags that are created by hand, rather than by mass-produced machinery. 
        They are often made from a variety of materials, including leather, fabric, and recycled materials. 
        Handmade bags can be simple or elaborate, and they can be used for a variety of purposes, such as 
        carrying everyday items, traveling, or special occasions. "
        img1={Bag1}
        img2={Bag2}
        />
        <CraftsData 
        className="first-design-reverse"
        heading="Handmade Key Chains"
        text=" This means that they are unique and one-of-a-kind, and they can be made from a variety of materials, 
        including metals, gemstones, beads, glass, and polymer clay. People often choose to buy handmade keychains 
        because they are more personal and special than mass-produced keychains. They can also be a more affordable 
        option, as they are not subject to the same overhead costs as mass-produced keychains.  "
        img1={Keychain1}
        img2={Keychain2}
        />
    </div>
  )
  }

export default Crafts;