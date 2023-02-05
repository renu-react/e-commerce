import React, {useState, useEffect }from 'react'
  import '../../styles/clock.css'

const ClockTime = () => {
  const[days, setDays] = useState()
  const[hours, setHours] = useState()
  const[minutes, setMintues] = useState()
  const[seconds, setSeconds] = useState()
  let interval;

  const countDown = ()=>{
    const destination = new Date('feb 28,2023').getTime()
    interval = setInterval(()=>{
      const now = new Date().getTime()
      const different = destination - now
      const days = Math.floor(different / (1000 * 60 * 60 * 24))
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(different % (1000 * 60 * 60 ) / (1000 * 60 ))
      const seconds = Math.floor(different % (1000 * 60 ) / 1000)

      if (destination < 0) clearInterval(interval.current);
      else{
        setDays(days);
        setHours(hours);
        setMintues(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(()=>{
    countDown()

  }
  )




  return (
  <div className="clock_wrapper">
    <div className="clock_data">
      <div>
        <h1>{days}</h1>
        <h5>Days</h5>
        </div>
        <span>:</span>
      </div>

    <div className="clock_data">
      <div >
        <h1>{hours}</h1>
        <h5>Hours</h5>
        </div>
        <span>:</span>
      </div>
    <div className="clock_data">
      <div >
        <h1>{minutes}</h1>
        <h5>Minutes</h5>
        </div>
        <span>:</span>
      </div>
    <div className="clock_data">
      <div >
        <h1>{seconds}</h1>
        <h5>Seconds</h5>
        </div>
      </div>
  </div>
  )
  
}

export default ClockTime