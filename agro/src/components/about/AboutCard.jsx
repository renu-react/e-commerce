import React from 'react'
import Title from '../common/title/Title'
const AboutCard = () => {
  return (
    <div>
        <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?w=2000" alt="" />
            </div>
            <div className="right row">
                <Title subtitle='LEARN ANYTHING' title='Benefits About online Learning' />
                <div className="item">{homeAbout.map((val)=>(
                    <div className="item flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                    </div>
                ))}</div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default AboutCard