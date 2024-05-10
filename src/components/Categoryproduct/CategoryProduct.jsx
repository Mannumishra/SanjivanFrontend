import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CategoryProduct = () => {
  const { catedata } = useParams()
  const [data, setData] = useState([])

  const getApiData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/product")
      console.log(res);
      setData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const filterData = data.filter((x) => x.categoryname === catedata)
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
          <div className="coreheading">
            Product Available {catedata} category
          </div>
          <p className='productsmallheading'>EXCLUSIVE DEALS AWAIT YOU</p>
        </div>
        <div className="cardproduct">
          {filterData.map((item, index) =>
            <div className="cardfirst">
              <div className="firstchild">
                <Link to={`/singlepage/${item._id}`}> <img src={item.image} alt="" className='productimage' /></Link>
              </div>
              <div className="secondchild">
                <p className='productname'>{item.categoryname}</p>
                <p className='text-center'>{item.productdescription}</p>
                <div className='productbotton'>
                  <Link to={`/singlepage/${item._id}`} style={{ color: "white", textDecoration: "none" }}>Product Details</Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  )
}

export default CategoryProduct