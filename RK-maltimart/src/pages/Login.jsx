import React ,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'
import { Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../firebase.config"
import { toast } from 'react-toastify'
// import { async } from '@firebase/util'
const Login = () =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e)=>{
    e.preventDefault()
    setLoading(true)

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)
      setLoading(false)
      toast.success('Successfully logged in')
      navigate('/checkout')

    }catch(error){
      setLoading(false)
      toast.error(error.message)
    }
  }



  return (

    <Helmet title='Login'>
      <section>
        <container className="form-s">
          {
            loading ? <div><h5>loading...</h5></div> :
          
          <div>
            <h3 className='form_head'>Login</h3>
            <form action="form" className="auth_form" onSubmit={signIn}>
              <formgroup className="form_group">
                <input type="email" placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
              </formgroup><br/><br/>
              <formgroup className="form_group">
                <input type="password" placeholder='Enter your password'value={password} onChange={e=>setPassword(e.target.value)}/>
              </formgroup><br/><br/>
              <button type="submit" className="buy_btn">Login</button><br/><br/>

              <p>Don't have an account?{" "}
              <Link to="/signup">Create an account</Link>
              </p>

            </form>
          </div>
}
        </container>
      </section>

    </Helmet>
   )
}

export default Login