import React from 'react'
import './QuerySection.css'
const Querysection = () => {
    return (
        <>
            <div className="querycestion">
                <div className="querfirst">
                    <div className="fistchild">
                        <i class="ri-ancient-pavilion-line iconsize"></i>
                        <p className='querytextfirst'>FREE SHIPPING</p>
                        <p className='querythirdtext'>Free nationwide shipping -on paid orders</p>
                    </div>
                    {/* <div className="seconchild"></div>
                    <div className="thirdchild"></div> */}
                </div>
                <div className="querysecond">
                    <div className="fistchild">
                        <i class="ri-phone-line iconsize"></i>
                        <p className='querytextfirst'>CUSTOMER SERVICE</p>
                        <p className='querythirdtext'>We are available from monday to saturday to answer your questions.</p>
                    </div>
                </div>
                <div className="querythird">
                    <div className="fistchild">
                    <i class="ri-secure-payment-line iconsize"></i>
                        <p className='querytextfirst'>SECURE PAYMENT</p>
                        <p className='querythirdtext'>Your payment information is processed securely.</p>
                    </div>
                </div>
                <div className="queryfour">
                    <div className="fistchild">
                    <i class="ri-mail-line iconsize" ></i>
                        <p className='querytextfirst'>CONTACT US</p>
                        <p className='querythirdtext'>Need to contact us? Just send us an e-mail at  sanjivan@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Querysection