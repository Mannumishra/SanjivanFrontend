import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
    return (
        <>
            <div className="newslettermain mt-2">
                <div className="parantediv">
                    <img src="../image/newsletter.webp" alt="" className='newletterimage' />
                    <div className='newsletterform'>
                        <div className="newstextdiv">
                        <p className='newstextfirst'>SUBSCRIBE TO OUR NEWSLETTER</p>
                        <p className='newslettertextsecond'>Promotions, new products and sales. Directly to your inbox.</p>
                        </div>
                        <div className='newsletterbutton'>
                                <div className="inputtext">
                                    <input type="text" name="email" id="" placeholder='your-email' className='inputsize' />
                                </div>
                                <div className="newsbutton">
                                    SUBSCRIBE
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter