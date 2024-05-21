import React, { useEffect, useState } from 'react'
import './Product.css'
// import '../CoreData/coredata.css'
// import prod1 from '../Image/prod1.webp'
// import Planet from '../Image/PATENT.1jpg.jpg'
// import Planet1 from '../Image/PATENT.jpg'
// import Planet2 from '../Image/PATENT1.jpg'
// import Planet3 from '../Image/PATENT2.jpg'
// import Planet4 from '../Image/PATENT3.jpg'
// import Planet5 from '../Image/PATENT4.jpg'
// import Planet6 from '../Image/PATENT6.jpg'

import { Link } from 'react-router-dom'
import axios from 'axios'
const Product = () => {
    const [data, setData] = useState([])

    const getApiData = async () => {
        try {
            let res = await axios.get("https://sanjivanser.onrender.com/api/category")
            console.log(res);
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    // const btnName = window.location.pathname === "/product" ? "Product Enquiry" : "Know More"
    // const url = window.location.pathname === "/product" ? "/contact" : "/product"

    useEffect(() => {
        getApiData()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <section className='mainhome'>
                <div className="product">
                    <div className="aboutheading text-center">
                        Product Range Available for Third Party Manufacturing
                    </div>
                    {/* <p className='productsmallheading'>EXCLUSIVE DEALS AWAIT YOU</p> */}
                </div>
                <div className="cardproduct">
                    {data.map((item, index) =>
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
            </section>
        </>
    )
}

export default Product