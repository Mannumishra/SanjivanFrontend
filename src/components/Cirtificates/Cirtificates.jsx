import React from 'react'
import  './Cirtificate.css'
import cirtificate1 from '../Image/cirtificate1.jpg'
import cirtificate2 from '../Image/cirtificate2.jpg'
import cirtificate3 from '../Image/cirtificate3.jpg'
import cirtificate4 from '../Image/cirtificate4.jpg'
const Cirtificates = () => {
    return (
        <>
            <div className="container sectionmanagecirtificate">
                <div className="row">
                    <div className="col-md-12">
                        <p className='aboutheading text-center'>Our Certificates</p>
                    </div>
                    <div className="col-md-6">
                        <img src={cirtificate1} alt="" className='w-100' style={{ height: 400 }} />
                    </div>
                    <div className="col-md-6">
                        <img src={cirtificate2} alt="" className='w-100' style={{ height: 400 }} />
                    </div>
                    <div className="col-md-6">
                        <img src={cirtificate3} alt="" className='w-100' style={{ height: 400 }} />
                    </div>
                    <div className="col-md-6">
                        <img src={cirtificate4} alt="" className='w-100' style={{ height: 400 }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cirtificates