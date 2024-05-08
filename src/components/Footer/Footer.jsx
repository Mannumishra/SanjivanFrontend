import React from 'react'
import './Footer.css'
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
                        <div className="third">
                            <p className='footerheading'>LEGAL INFORMATION</p>
                            <p className='fotertext'>Privacy Policy</p>
                            <p className='fotertext'>Refund Policy</p>
                            <p className='fotertext'>Terms & conditions</p>
                            <p className='fotertext'>Shipping & Delivery Policy</p>
                        </div>
                        <div className="four">
                            <p className='footerheading'>FOLLOW US</p>
                            <p className='fotertext'>Follow and discover the time-tested secrets of Ayurveda with us!</p>
                            <div className="iconset">
                                <i class="ri-facebook-circle-fill"></i>
                                <i class="ri-instagram-line"></i>
                                <i class="ri-youtube-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer