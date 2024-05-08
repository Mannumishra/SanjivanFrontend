import React, { useState } from 'react'
import './Singlepage.css'
const SinglePage = () => {
    let [qty, setQty] = useState(1)

    const increment = () => {
        setQty(qty + 1)
    }
    const decriment = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
        else{
            alert("Quatity is must me greatethen 1 then you can decriment the quantity")
        }
    }
    return (
        <>
            <div className="singlepage">
                <div className="singlepagemain">
                    <div className="singlefirst">
                        <div className='chilefirst'>
                            <img src="../image/prod1.webp" height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" alt="" />
                            <img src="../image/prod1.webp" height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" alt="" />
                            <img src="../image/prod1.webp" height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" alt="" />
                            <img src="../image/prod1.webp" height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" alt="" />
                        </div>
                        <div className='chilesecond'>
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../image/prod1.webp" class="d-block singlepageimage1" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../image/prod1.webp" class="d-block singlepageimage1" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../image/prod1.webp" class="d-block singlepageimage1" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../image/prod1.webp" class="d-block singlepageimage1" alt="" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="singlesecond">
                        <p className='singlepagetext'>Sajivan Ayurved</p>
                        <p className='singlepageproductname'>Pure Shilajit Resin</p>
                        <div className='singlepagerateing'>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                        </div>
                        <div className="priceandsaveprice">
                            <p className='singlepageprice'>₹ 899.00 <span><del style={{ color: "black", opacity: "0.8", marginLeft: 10 }}>₹ 999.00</del></span></p>
                            <div className='savebutton'>
                                SAVE ₹ 100.00
                            </div>
                        </div>
                        <hr />
                        <div className="singlepagewaitbutton">
                            20gm
                        </div>
                        <p className='quantitytext'>Quantity:</p>
                        <div className='cartquantity'>
                            <i class="ri-subtract-line iconsize" onClick={decriment}></i>
                            <p className='textquantity'>{qty}</p>
                            <i class="ri-add-line iconsize" onClick={increment}></i>
                        </div>
                        <div className='productbotton'>
                            ADD TO CART
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePage