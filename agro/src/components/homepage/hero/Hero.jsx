import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"

const Hero = () => {
  return (
    <div>
        <section className='hero'>
          <div className='container'>
            <div className='row'>
              <Title subtitle ='WELCOME TO ACDAEMIA' title='Best Online Education'/>
              <p>Control every aspect of your e-Learning platform in one place. Revolutionary LMS on Vue.js. Free LMS Starter Theme. Monetize your courses. Front-end course builder. 25 000+ Happy Customers. Services: Booking, Renting, Delivery, Freelancer, Online Business.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET START NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
            </div>
          </div>

        </section>
        <div className='margin'>

        </div>
    </div>
  )
}

export default Hero