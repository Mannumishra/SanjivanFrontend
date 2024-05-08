import React from 'react'
import CoreData from '../CoreData/CoreData'
import Centerimage from '../Centerimage/Centerimage'
import Newsletter from '../Newsletter/Newsletter'
import Querysection from '../QuerySection/Querysection'
import Product from '../Product/Product'
import About from '../About/About'
import banare1 from '../Image/banare1.jpg'
import banare2 from '../Image/banare2.jpg'
import banare3 from '../Image/banare3.jpg'
import banare4 from '../Image/banare4.jpg'
// import banare1 from '../Image/banare1.jpg'

const Home = () => {
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
        <About />
      </section>
      <section>
        <CoreData />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <Centerimage />
      </section>
      <section>
        <Querysection />
      </section>
      <section>
        <Newsletter />
      </section>
     
    </>
  )
}

export default Home