import React from 'react'
import CoreData from '../CoreData/CoreData'
import Centerimage from '../Centerimage/Centerimage'
import Newsletter from '../Newsletter/Newsletter'
import Querysection from '../QuerySection/Querysection'
import Product from '../Product/Product'
import About from '../About/About'

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
                <img src="../image/banare1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../image/banare2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../image/banare3.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../image/banare4.jpg" class="d-block w-100" alt="..." />
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