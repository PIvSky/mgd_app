import {useRef, useState} from 'react'
import { NavLink, useNavigate  } from 'react-router-dom'
import './Nav.scss'
// image imports
import VectorBg from '../Assets/VectorBg/VectorBg';
import mikaLogoMobile from '../../assets/logo/mika-logo-mobile.svg';
import mikaLogoDesktop from '../../assets/logo/mika-logo-desktop.png';

const Nav = () => {

    const [isOfferClicked, setIsOfferClicked] = useState(false);
    const [isOfferActive, setIsOfferActive] = useState(false);
    const navRef = useRef();
    const buttonRef = useRef();
    const navigate = useNavigate();

    // Hamburger menu action 
    const menuTranformation = () => {
        buttonRef.current.classList.toggle('open');
    }

    const handleClick = () => {
        setIsOfferClicked(true);
    };

    const handleOfferElementClick = () => {
        setIsOfferActive(true)
        setIsOfferClicked(false)
        showNavbar();
        menuTranformation();
    };

    const navigateHome = () => {
        navigate('/');
    }

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
        window.scrollTo({
            top: 0,
          });
    }

    const NavList = [
        { 
            element: 'o nas',
            adress: 'about'
        },
        { 
            element: 'oferta',
            adress: '/offer'
        },
        { 
            element: 'succes story',
            adress: '/succes-story'
        },
        { 
            element: 'blog',
            adress: '/blog'
        },
        { 
            element: 'kontakt',
            adress: '/contact'
        }
    ]

    const OfferContent = [
        {
            element: 'dla nowo otwieranych biznesów',
            adress: '/offer/new-business'
        },
        {
            element: 'dla instniejących biznesów',
            adress: '/offer/existing-business'
        },
        {
            element: 'IMPLEMENTACJA NOWOCZESNYCH NARZĘDZI BIZNESOWYCH',
            adress: '/offer/modern-business-tools'
        },
        {
            element: 'BADANIA RYNKU I TRENDY',
            adress: '/offer/market-research'
        },
        {
            element: 'PROJECT MANAGEMENT USŁUG BUDOWLANO-WYKOŃCZENIOWYCH',
            adress: '/offer/project-manager'
        },
    ]

    return (
      <header className="header">
        <img className='header-logo__mobile' src={mikaLogoMobile} alt='background-vector' onClick={navigateHome}/>
        <img className='header-logo__desktop' src={mikaLogoDesktop} alt='background-vector' onClick={navigateHome}/>
        <nav className="nav-container" ref={navRef}>
            <ul className="nav-list">
                {NavList.map((item, index) => (
                    <li className="nav-list__element" key={index}>
                        <NavLink
                            to={item.adress}
                            className={({ isActive }) => 
                                (isActive && item.element !== 'oferta' ? 'active' : '') + 
                                ((isOfferClicked || isOfferActive) && item.element === 'oferta' ? ' active' : '')
                        }
                            onClick={() => {
                                if (item.element === 'oferta') {
                                    handleClick();
                                } else {
                                    setIsOfferClicked(false);
                                    setIsOfferActive(false);
                                    menuTranformation();
                                    showNavbar();
                                }
                            }}
                        >{item.element}
                        </NavLink>
                        {isOfferClicked && item.element === 'oferta' && (
                        <div className="offer-container">
                            {OfferContent.map((item, index) => (
                                <NavLink 
                                    to={item.adress}
                                    className='offer-container__element' 
                                    key={index}
                                    onClick={handleOfferElementClick}
                                >{item.element}
                                </NavLink>
                            ))}
                        </div>
                        )}
                    </li>
                ))
                }
            </ul>
            <VectorBg className='bg-vector'/>
        </nav>
        <button onClick={showNavbar} className="hamburger-box">
            <div className='hamburger-inner' onClick={menuTranformation} ref={buttonRef}>
                <div className='hamburger-top__bun'></div>
                <div className='hamburger-middle__bun'></div>
                <div className='hamburger-bottom__bun'></div>
            </div>
        </button>
      </header>
    );
}

export default Nav