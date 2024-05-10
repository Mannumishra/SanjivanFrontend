import React, { useEffect, useState } from 'react'
import './Contact.css'
import axios from 'axios'

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        companyname: "",
        business: ""
    })

    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("https://sanjivanser.onrender.com/api/contact", data)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <div className="container contactmain ">
                <div className="row">
                    <div className="col-md-12">
                        <p className='contactheading'>Contact for Manufacturing </p>
                    </div>
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27940.170000743485!2d77.06981247755455!3d28.912571449743762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dafd394799c17%3A0x34d238cc157eb1c5!2sSanjivan%20Anusandhan%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1715081497303!5m2!1sen!2sin" width="100%" height="450" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6">
                        <form action="" onSubmit={postData}>
                            <div className="col mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" name="name" id="" placeholder='Enter Name' className='form-control' onChange={getInputData} />
                            </div>
                            <div className="col mb-3">
                                <label htmlFor="">Email</label>
                                <input type="email" name="email" id="" placeholder='Enter Email' className='form-control' onChange={getInputData} />
                            </div>
                            <div className="col mb-3">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" name="phone" id="" placeholder='Enter Phone No.' className='form-control' onChange={getInputData} />
                            </div>
                            <div className="col mb-3">
                                <label htmlFor="">Company Name</label>
                                <input type="text" name="companyname" id="" placeholder='Enter Company Name' className='form-control' onChange={getInputData} />
                            </div>
                            <div className="col mb-3">
                                <label htmlFor="">Business Needs</label>
                                <textarea className='form-control' onChange={getInputData} name="business" id="" placeholder='Business Needs'></textarea>
                            </div>
                            <div className="col mb-3">
                                <button className='btn btn-dark'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact