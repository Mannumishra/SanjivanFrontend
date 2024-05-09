import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <section className='footerset'>
                <div className="footer">
                    <div className="footermain">
                        <div className="first">
                            <p className='footerheading'>SANJIVAN ANUSHANDHAN</p>
                            <p className='fotertext'>Your one-stop shop for authentic Ayurvedic medicines and products, delivering the ancient wisdom of India's natural healing tradition to your doorstep.</p>
                        </div>
                        <div className="second">
                            <p className='footerheading'> CONTACT US:</p>
                            <p className='fotertext'>Address:
                                Sanjivan Anusandhan Pvt. Ltd.
                                Plot No. 1880, Rai Industrial Area, Rai, Haryana 131029</p>
                            <p className='fotertext'>Call Us: 9810000523 / 9810020523</p>
                            <p className='fotertext'>Email:
                                sanjivan.anusandhan@gmail.com
                                sanjivan.anusandhan1880@gmail.com</p>
                        </div>
                        {/* <div className="third">
                            <p className='footerheading'>LEGAL INFORMATION</p>
                            <p className='fotertext'>Privacy Policy</p>
                            <p className='fotertext'>Refund Policy</p>
                            <p className='fotertext'>Terms & conditions</p>
                            <p className='fotertext'>Shipping & Delivery Policy</p>
                        </div> */}
                        <div className="four">
                            <p className='footerheading'>FOLLOW US</p>
                            <p className='fotertext'>Follow and discover the time-tested secrets of Ayurveda with us!</p>
                            <div className="iconset">
                               <Link to="https://www.facebook.com/sanjivanayurveda1967" style={{textDecoration:"none" ,color:"#3b5998"}}> <i class="ri-facebook-circle-fill"></i></Link>
                               <Link to="https://www.instagram.com/sanjivanayurveda1967/" style={{textDecoration:"none" ,color:"#ee2a7b"}}> <i class="ri-instagram-line"></i></Link>
                               <Link to="https://www.youtube.com/channel/UCyI8Dnrr7-1Zcf1_x9AORDQ" style={{textDecoration:"none" ,color:"#FF0000"}}> <i class="ri-youtube-line"></i></Link>
                               <Link to="https://www.linkedin.com/in/sanjivan-ayurveda-07021a228/?original_referer=https%3A%2F%2Flinktr.ee%2F" style={{textDecoration:"none" ,color:"#0A66C2"}}><i class="ri-linkedin-box-fill"></i></Link>
                               <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fsanjivan1967" style={{textDecoration:"none" ,color:" #1DA1F2"}}><i class="ri-twitter-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer