import React, { useEffect, useRef } from 'react';
import './header.css';
import { Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const NAV_LINKS = [
  {
    display: 'Home',
    url: '/home',
  },
  {
    display: 'Market',
    url: '/market',
  },
  {
    display: 'Create',
    url: '/create',
  },
  {
    display: 'Contact',
    url: '/contact',
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('active__menu');
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
    });
    return () => {
      window.addEventListener.remove('scroll');
    };
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <Link to="/home" className="logo__link">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                NFTs
              </h2>
            </Link>
          </div>
          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV_LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url} className={(navClass) => (navClass.isActive ? 'active' : '')}>
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right d-flex align-items-center gap-5">
            <button className="btn">
              <Link to="/wallet" className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-wallet-line"></i>
                </span>
                Connect Wallet
              </Link>
            </button>
            <span className="mobile__menu">
              <i className="ri-menu-4-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
