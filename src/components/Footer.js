import "./FooterStyles.css"
import React from 'react'

const Footer = ()  =>{
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>Crafted</h1>
                <p>Your one-stop shop for all things beautifully made</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"/>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"/>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"/>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"/>
                </a>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>Contact & Media</h4>
                <a href="/">Contact</a>
                <a href="/">Media</a>
                <a href="/">Latest News</a>
            </div>
            <div>
                <h4>Corporate</h4>
                <a href="/">Careers</a>
                <a href="/">Sustainable Business</a>
                <a href="/">Partners</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Help Center</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
            </div>
        </div>
    </div>
  )
}

export default Footer