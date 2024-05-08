import React from 'react'
import './Product.css'
import prod1 from '../Image/prod1.webp'
import Planet from '../Image/PATENT.1jpg.jpg'
import Planet1 from '../Image/PATENT.jpg'
import Planet2 from '../Image/PATENT1.jpg'
import Planet3 from '../Image/PATENT2.jpg'
import Planet4 from '../Image/PATENT3.jpg'
import Planet5 from '../Image/PATENT4.jpg'
import Planet6 from '../Image/PATENT6.jpg'

import { Link } from 'react-router-dom'
const Product = () => {
    const btnName = window.location.pathname==="/product"?"Product Enquiry":"Know More"
    const url = window.location.pathname==="/product"?"/contact":"/product"
    return (
        <>
          <section className='mainhome'>
          <div className="product">
                <div className="coreheading">
                Product Range Available for Third Party Manufacturing
                </div>
                <p className='productsmallheading'>EXCLUSIVE DEALS AWAIT YOU</p>
            </div>
            <div className="cardproduct">
                <div className="cardfirst">
                    <div className="firstchild">
                        <img src={Planet} alt="" className='productimage'/>
                        {/* <div className='imgebutton'>
                            SAVE ₹ 899.00
                        </div> */}
                    </div>
                    <div className="secondchild">
                        <p className='productname'>Patent Products</p>
                        <p className='text-center'>Range of Organic Herb Powder</p>
                        {/* <div className='productrateing'>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        </div>
                        <p className='productprice'>₹ 899.00 <span><del style={{color:"black" ,opacity:"0.8" , marginLeft:20}}>₹ 999.00</del></span></p> */}
                        <div className='productbotton'>
                         <Link to={url} style={{color:"white",textDecoration:"none"}}>{btnName}</Link>
                        </div>
                    </div>
                </div>
                <div className="cardfirst">
                    <div className="firstchild">
                        <img src={Planet1} alt="" className='productimage'/>
                        {/* <div className='imgebutton'>
                            SAVE ₹ 899.00
                        </div> */}
                    </div>
                    <div className="secondchild">
                        <p className='productname'>Herbal Cosmetic </p>
                        <p className='text-center'>Range of Organic Herb Powder</p>
                        {/* <div className='productrateing'>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        </div>
                        <p className='productprice'>₹ 899.00 <span><del style={{color:"black" ,opacity:"0.8" , marginLeft:20}}>₹ 999.00</del></span></p> */}
                        <div className='productbotton'>
                         <Link to={url} style={{color:"white",textDecoration:"none"}}>{btnName}</Link>
                        </div>
                    </div>
                </div>
                <div className="cardfirst">
                    <div className="firstchild">
                        <img src={Planet6} alt="" className='productimage'/>
                        {/* <div className='imgebutton'>
                            SAVE ₹ 899.00
                        </div> */}
                    </div>
                    <div className="secondchild">
                        <p className='productname'>Ayurvedic Capsules</p>
                        <p className='text-center'>Range of Organic Herb Powder</p>
                        {/* <div className='productrateing'>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        </div>
                        <p className='productprice'>₹ 899.00 <span><del style={{color:"black" ,opacity:"0.8" , marginLeft:20}}>₹ 999.00</del></span></p> */}
                        <div className='productbotton'>
                         <Link to={url} style={{color:"white",textDecoration:"none"}} >{btnName}</Link>
                        </div>
                    </div>
                </div>
                <div className="cardfirst">
                    <div className="firstchild">
                        <img src={Planet3} alt="" className='productimage'/>
                        {/* <div className='imgebutton'>
                            SAVE ₹ 899.00
                        </div> */}
                    </div>
                    <div className="secondchild">
                        <p className='productname'>Classical Ayurvedic Medicines</p>
                        <p className='text-center'>Range of Organic Herb Powder</p>
                        {/* <div className='productrateing'>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        </div>
                        <p className='productprice'>₹ 899.00 <span><del style={{color:"black" ,opacity:"0.8" , marginLeft:20}}>₹ 999.00</del></span></p> */}
                        <div className='productbotton'>
                         <Link to={url} style={{color:"white",textDecoration:"none"}}>{btnName}</Link>
                        </div>
                    </div>
                </div>
                <div className="cardfirst">
                    <div className="firstchild">
                        <img src={Planet4} alt="" className='productimage'/>
                        {/* <div className='imgebutton'>
                            SAVE ₹ 899.00
                        </div> */}
                    </div>
                    <div className="secondchild">
                        <p className='productname'>Organic Powders</p>
                        <p className='text-center'>Range of Organic Herb Powder</p>
                        {/* <div className='productrateing'>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        </div>
                        <p className='productprice'>₹ 899.00 <span><del style={{color:"black" ,opacity:"0.8" , marginLeft:20}}>₹ 999.00</del></span></p> */}
                        <div className='productbotton'>
                         <Link to={url} style={{color:"white",textDecoration:"none"}}>{btnName}</Link>
                        </div>
                    </div>
                </div>
                <div className="cardfirst">
                    <div className="firstchild">
                        <img src={Planet5} alt="" className='productimage'/>
                        {/* <div className='imgebutton'>
                            SAVE ₹ 899.00
                        </div> */}
                    </div>
                    <div className="secondchild">
                        <p className='productname'>Essential Oils</p>
                        <p className='text-center'>Range of Organic Herb Powder</p>
                        {/* <div className='productrateing'>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        </div>
                        <p className='productprice'>₹ 899.00 <span><del style={{color:"black" ,opacity:"0.8" , marginLeft:20}}>₹ 999.00</del></span></p> */}
                        <div className='productbotton'>
                         <Link to={url} style={{color:"white",textDecoration:"none"}}>{btnName}</Link>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}

export default Product