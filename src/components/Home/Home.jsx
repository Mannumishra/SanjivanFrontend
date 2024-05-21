import React, { useEffect, useState } from 'react'

import Centerimage from '../Centerimage/Centerimage'
import Newsletter from '../Newsletter/Newsletter'
import Product from '../Product/Product'
import banare1 from '../Image/banare1.jpg'
import banare2 from '../Image/banare2.jpg'
import banare3 from '../Image/banare3.jpg'
import banare4 from '../Image/banare4.jpg'
import aboutus from '../Image/aboutus.png'
import aboutus1 from '../Image/new.png'
import lab from '../Image/lab-1.png'
import lab2 from '../Image/lab2.jpg'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import banare1 from '../Image/banare1.jpg'

const Home = () => {
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
        <div className="home">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={banare1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={banare2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={banare3} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={banare4} class="d-block w-100" alt="..." />
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
      </section>
      <section>
        <div className="contaner mainabout">
          <div className="col-md-12">
            <p className='aboutmainheading'> Sanjivan Ayurvedic Third Party Product Manufacturing Company</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={aboutus} alt="" className='w-100' />
            </div>
            <div className="col-md-6 heightmanage">
              <p className='aboutheading'>Why Choose Sanjivan Anusandhan for Your Manufacturing Needs?      </p>
              <p className='abouttext'><strong>Unmatched Expertise:</strong> We leverage 70 years of experience to deliver a comprehensive range of Ayurvedic medicines, catering to various needs like bone & joint health, liver function, heart health, diabetes management, and immunity boosting.</p>
              <p>
                <strong>  Quality You Can Trust: </strong> As a leading Pharma group with a turnover exceeding 200 crores, we prioritize quality above all else. Our state-of-the-art facilities are GMP, ISO, and FSSAI certified, ensuring the highest standards in production and product safety. </p>
              <p>
                <strong> Unmatched Efficiency and Flexibility: </strong>We offer the most diverse range of manufacturing capabilities in the region, handling Drugs, Cosmetics, Nutraceuticals, Ayurvedic products, and Softgels.exclamation
                Google Search didn’t find relevant content. Consider researching further to assess the statement.</p>
              <p>
                <strong>Unbeatable Value:</strong> We understand the importance of cost-effectiveness.  That's why we offer the best possible rates while maintaining the exceptional quality you expect.
              </p>
              <p>
                <strong> Partnering for Success:</strong>  We've built strong relationships with over 2000 clients across India.exclamation Let us be your trusted partner in creating successful Ayurvedic product lines.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <p className='aboutheading'>Sanjivan Anusandhan Your Trusted  Partner for Quality Ayurvedic Products</p>
              <p className='abouttext'>At Sanjivan Anusandhan, we're passionate about harnessing the power of nature to create high-quality Ayurvedic products that promote health and well-being.  For over 80 years, we've been a leading manufacturer of luxurious and contemporary Ayurvedic medicines, drawing on the wisdom of ancient practices to develop effective solutions.</p>
            </div>
            <div className="col-md-6">
              <img src={aboutus1} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container labsection">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src={lab} alt="" className='w-100' />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p className='aboutheading headinghomefirst'>Research & Development in Third-Party Manufacturing for Ayurvedic Products:</p>
                <p> At <strong>Sanjivan Anushandhan,</strong> our in-house R&D department is dedicated to formulating new Ayurvedic products and ensuring their quality through rigorous testing. Collaborating with renowned and NABL accredited laboratories across India, we uphold the highest standards in our manufacturing processes, guaranteeing the safety, efficacy, and compliance of our offerings. Our commitment to innovation, continuous improvement, and customer satisfaction underscores every aspect of our third-party manufacturing services, fostering trust and reliability among our partners and consumers alike.</p>
                <p><strong>Pharmacognosy-</strong> To identify authentication raw materials through Microscopic and Macroscopic methods.</p>
                <p><strong>Chemistry-</strong> To ensure the quality standards of every product, we implement rigorous pre-process, in-process, and post-process controls.</p>
                <p><strong>Pharmaceutics-</strong>To ensure the development of new formulations, effective presentations, and optimal dosages for each medicine.</p>
                <p><strong>Microbiology-</strong> To ensure the absence of microbial contamination in Ayurvedic products, standardize fermentation processes, and identify herbs with strong antibacterial and antifungal properties.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container labsection">
          <div className="row">
            <div className="col-md-12 mt-3">
              <p className='whyshould'>Why Should You Pick sajivan anushandhan
                for Third-Party Product Manufacturing in India?</p>
              <p className='textwhyshould'>Choosing Sanjivan Anushandhan for third-party manufacturing in India offers numerous advantages. With our robust in-house R&D capabilities and collaborations with renowned NABL accredited laboratories, we ensure the highest standards of quality, safety, and compliance in every product we manufacture. Our commitment to innovation, continuous improvement, and customer satisfaction distinguishes us in the industry, fostering trust and reliability among our partners. Moreover, our expertise in Ayurvedic formulations, combined with efficient manufacturing processes, enables us to deliver cost-effective solutions tailored to meet the diverse needs of our clients. Partnering with Sanjivan Anushandhan ensures seamless production, superior quality, and a competitive edge in the dynamic market of Ayurvedic products.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container labsection">
          <div className="row">
            <div className="col-md-4">
              <div className='divsectionthirdparty'>
                <p className='thirdparyheading'>Tailored Solutions for Your Unique Needs</p>
                <p>At Sanjivan Anushandhan, we specialize in crafting customized products and solutions to meet your unique requirements. From personalized formulations to bespoke manufacturing processes, we tailor our approach to ensure that your specific needs are addressed with precision and excellence. Whether you're seeking a specific herbal blend, custom packaging, or tailored production timelines, we are committed to delivering solutions that exceed your expectations. Partner with us for unparalleled customization and innovation in Ayurvedic manufacturing.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='divsectionthirdparty'>
                <p className='thirdparyheading'>Championing Sustainability and Ethical Practices</p>
                <p>At Sanjivan Anushandhan, sustainability and ethical practices are at the heart of everything we do. We are dedicated to minimizing our environmental footprint by sourcing responsibly, reducing waste, and implementing eco-friendly manufacturing processes. Our commitment extends to ethical sourcing practices, ensuring fair treatment of workers and fostering positive relationships with our partners and communities. With a focus on sustainability and ethics, we strive to create a better world while delivering high-quality Ayurvedic products to our clients.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='divsectionthirdparty'>
                <p className='thirdparyheading'>Unrivaled Expertise and Decades of Experience</p>
                <p>At Sanjivan Anushandhan, our team brings unparalleled expertise and decades of experience to every aspect of our operations. With deep-rooted knowledge in Ayurvedic formulations, manufacturing processes, and industry trends, we stand as leaders in the field. Our seasoned professionals are dedicated to delivering innovative solutions and exceptional service, drawing from years of hands-on experience and a commitment to continuous learning. Partnering with us means tapping into a wealth of knowledge and expertise, ensuring the success and excellence of your Ayurvedic products.</p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className='divsectionthirdparty'>
                <p className='thirdparyheading'>Excellence in Quality Assurance</p>
                <p>At Sanjivan Anushandhan, we are committed to providing the highest level of quality assurance in every aspect of our operations. Our stringent quality control measures, coupled with cutting-edge technology and experienced professionals, ensure that each product meets or exceeds industry standards. From meticulous raw material selection to thorough testing and validation processes, we leave no stone unturned in guaranteeing the purity, potency, and safety of our Ayurvedic products. With a relentless pursuit of excellence, we strive to instill confidence in our partners and customers, knowing they can trust in the quality and reliability of our offerings.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className='divsectionthirdparty'>
                <p className='thirdparyheading'>Safeguarding Privacy and Confidentiality</p>
                <p>At Sanjivan Anushandhan, safeguarding privacy and maintaining confidentiality are paramount in all our endeavors. We uphold strict protocols to ensure the protection of sensitive information, proprietary formulations, and client data. Our dedicated team is trained to handle confidential matters with the utmost discretion and professionalism. Whether it's proprietary product formulations, manufacturing processes, or business agreements, you can trust us to maintain the highest level of privacy and confidentiality at every step. Partnering with us means entrusting your valuable information to a trusted ally committed to safeguarding your interests.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='divsectionthirdparty'>
                <p className='thirdparyheading'>Ensuring Quality: WHO-GMP Certified Facility</p>
                <p>At Sanjivan Anushandhan, we take pride in our WHO-GMP certified facility, which underscores our commitment to maintaining the highest standards of quality and safety in our manufacturing processes. This certification ensures that our facility complies with the stringent guidelines set by the World Health Organization (WHO) for Good Manufacturing Practices (GMP). From raw material sourcing to final product distribution, every step of our manufacturing process adheres to these rigorous standards, guaranteeing the integrity, purity, and efficacy of our Ayurvedic products. Partnering with us means entrusting your brand to a facility that prioritizes excellence and compliance in every aspect of production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <Link to='/product' style={{ color: "white", textDecoration: "none" }}>See All Product Related Category</Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
      <section>
        <Centerimage />
      </section>
      <section>
        {/* <Querysection /> */}
      </section>
      <section>
        <Newsletter />
      </section>

    </>
  )
}

export default Home