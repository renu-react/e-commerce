import React, { useRef } from 'react';
import { Container,Row,Col,} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useSelector } from 'react-redux'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

const Checkout = () => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3opg9k9', 'template_tlblag4', form.current, 'kmG8zfag45wcnD24d')
        .then((result) => {
            console.log(result.text);
            console.log ('msg send');
        }, (error) => {
            console.log(error.text);
            console.log ("msg not send");
            toast.error("Please submit your valid information")
            
        });
        toast.success("Your order is successfull")
    };


  
  return (
   <Helmet title='Checkout'>
    <CommonSection title='Checkout'/>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4 fw-bold'>Billing information</h6>
            {/* <form ref={form} onSubmit={sendEmail}>
              <Form ref={form} onSubmit={sendEmail}>
              <FormGroup className='form_group'>
                <input type="text" name="user_name" placeholder='Enter your name' />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="email" name="user_email" placeholder='Enter your email' />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="number"name="user_number" placeholder=' Phone number' />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="text" name="user_address" placeholder='address' />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="text" name="user_city" placeholder='city' />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="text" name="user_postal code" placeholder='postal code' />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="text" name="user_country" placeholder='country' />
              </FormGroup>
              <FormGroup className='form_group'>
              <input type="submit" value="Send" />
              </FormGroup>
            </Form>
            </form> */}
             <form className='form_group' ref={form} onSubmit={sendEmail}>
            
                <input type="text" name="user_name" placeholder='Name'/><br/><br/>
                <input type="email" name="user_email" placeholder='Email' /><br/><br/>
                <input type='number' name="user_number" placeholder='Phone Number'/><br/><br/>
                <input type="text" name="user_address" placeholder='Address'/><br/><br/>
                <input type="text" name="user_city" placeholder='City'/><br/> <br/>              
                <input type='text' name="user_postal_code"placeholder='postal_code' /><br/><br/>
                <input type='text' name="user_country" placeholder='Country'/><br/><br/>

                <input type="submit" value="Send" className='send_btn' />
             </form>
          </Col>
          <Col lg='4'>
            <div className="checkout_cart">
              <h6>Total qty: <span>{totalQty}</span></h6>
              <h6>subtotal: <span>{totalAmount}</span></h6>
              <h6>Shipping: <br/>
              <span>$0</span></h6>
      
              <h6>Totalcost: <span>${totalAmount}</span></h6>
            </div>
            <div className='btn'>
            <botton onSubmit={"sendForm"}>Place an order</botton>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

   </Helmet>
  )
}

export default Checkout