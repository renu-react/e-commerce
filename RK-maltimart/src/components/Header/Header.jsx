import React,{useRef,useEffect} from 'react'
import './header.css'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container, Row} from 'reactstrap';
import { useSelector } from 'react-redux';
const nav_Links =[
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
    },
    {
        path:'cart',
        display:'Cart'
    },
]
const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate()
    const totalQuantity = useSelector(state=>state.cart.totalQuantity)

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll",()=>{
        if(
            document.body.scrollTop > 80 || 
            document.documentElement.scrollTop > 80
        ){
            headerRef.current.classList.add("sticky_header");
        }else{
            headerRef.current.classList.remove("sticky_header");
        }
    })
    };
    useEffect ( ()=> {
        stickyHeaderFunc();
        return () => window.removeEventListener("scroll", stickyHeaderFunc);

    });
    const menuToggle = () => menuRef.current.classList.toggle("active_menu")

    const navigateToCart =()=> {
        navigate('/cart')

    }
    const navigateToLogin =()=>{
        navigate('/login')
    }
    const navigateToShop =()=>{
        navigate('/shop')
    }


  return <header className="header" ref={headerRef}>
    
    
       <Container>
        <Row>
        <div className="nav_wrapper">
            <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                    <h1>RK_Multimart</h1>
                </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
               <ul className="menu">
               {
                 nav_Links.map((item,index)=>(
                    <li className="nav_item" key={index}>
                        <NavLink to={item.path} className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""}>{item.display}</NavLink>   
                    </li>
                ))
               }
               </ul>
            </div>
            <div className="nav_icons">
                <span>
                <span className='fav_icon' onClick={navigateToShop}><i class="ri-heart-line"></i><span className="badge">1</span></span>
                <span className='cart_icon' onClick={navigateToCart}><i class="ri-shopping-bag-line"></i><span className="badge">{totalQuantity}</span></span>
                <img src={userIcon} alt="login" onClick={navigateToLogin} />
            </span>
            <div className="mobile_menu">
                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
            </div>
            </div>
        </div>
        </Row>
       </Container>
  </header>
}

export default Header