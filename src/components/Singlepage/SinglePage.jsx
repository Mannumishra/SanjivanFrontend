import React, { useEffect, useState } from 'react'
import './Singlepage.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const SinglePage = () => {
    const [data, setData] = useState({})
    const [allData, setAllData] = useState([])
    const { _id } = useParams()
    const getApidata = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/product/" + _id)
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getAllProduct = async () => {
        let res = await axios.get("http://localhost:8000/api/product/")
        setAllData(res.data.data)
    }
    useEffect(() => {
        getApidata()
        getAllProduct()
    }, [])
    return (
        <>
            <div className="singlepage mainhome">
                <div className="singlepagemain">
                    <div className="singlefirst">
                        <div className='chilefirst'>
                            <img src={data.image} height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" alt="" />
                            <img src={data.image1} height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" alt="" />
                            <img src={data.image2} height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" alt="" />
                            <img src={data.image3} height={70} className='w-100' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" alt="" />
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
                                        <img src={data.image} class="d-block singlepageimage1" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={data.image1} class="d-block singlepageimage1" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={data.image2} class="d-block singlepageimage1" alt="" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={data.image3} class="d-block singlepageimage1" alt="" />
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
                        <p className='singlepagetext'>{data.categoryname}</p>
                        {/* <p className='text-danger'> Product name</p> */}
                        <p className='singlepageproductname'>{data.productname}</p>
                        {/* <div className='singlepagerateing'>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                        </div> */}
                        {/* <div className="priceandsaveprice">
                            <p className='singlepageprice'>₹ 899.00 <span><del style={{ color: "black", opacity: "0.8", marginLeft: 10 }}>₹ 999.00</del></span></p>
                            <div className='savebutton'>
                                SAVE ₹ 100.00
                            </div>
                        </div>
                        <hr />
                        <div className="singlepagewaitbutton">
                            20gm
                        </div> */}
                        {/* <p className='quantitytext'>Quantity:</p>
                        <div className='cartquantity'>
                            <i class="ri-subtract-line iconsize" onClick={decriment}></i>
                            <p className='textquantity'>{qty}</p>
                            <i class="ri-add-line iconsize" onClick={increment}></i>
                        </div>
                        <div className='productbotton'>
                            ADD TO CART
                        </div> */}
                        <p className='text-danger'> Product Description</p>
                        <p className=''>{data.productdescription}</p>
                    </div>
                </div>
                <div className='singlepagewaitbutton mb-5'>
                    <Link to='/contact' className='buttoncontact'>Enquery Product</Link>
                </div>
            </div>
            <div>
                <p className='aboutmainheading'>Related Product</p>
                <div className="cardproduct">
                    {allData.map((item, index) =>
                        <div className="cardfirst">
                            <div className="firstchild">
                                <Link to={`/category/${item.categoryname}`} > <img src={item.image} alt="" className='productimage' /></Link>
                            </div>
                            <div className="secondchild">
                                <p className='productname'>{item.categoryname}</p>
                                <p className='text-center'>{item.description}</p>
                                <div className='productbotton'>
                                    <Link to={`/category/${item.categoryname}`} style={{ color: "white", textDecoration: "none" }}>See all Product</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default SinglePage