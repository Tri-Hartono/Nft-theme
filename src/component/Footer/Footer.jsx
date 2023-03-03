import React from 'react';
import { Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const MY_ACOUNT = [
  {
    display: 'Author Profile',
    url: '/seller-profile',
  },
  {
    display: 'Create Item',
    url: '/create',
  },
  {
    display: 'Collection',
    url: '/market',
  },
  {
    display: 'Edit Profile',
    url: '/edit-profile',
  },
];
const RESOURCE = [
  {
    display: 'Help Center',
    url: '#',
  },
  {
    display: 'Partner',
    url: '#',
  },
  {
    display: 'Community',
    url: '#',
  },
  {
    display: 'Activity',
    url: '#',
  },
];
const COMPANY = [
  {
    display: 'About',
    url: '#',
  },
  {
    display: 'Career',
    url: '#',
  },
  {
    display: 'Ranking',
    url: '#',
  },
  {
    display: 'Contact Us',
    url: '/contact',
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                NFTs
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi quod incidunt, perspiciatis dolor magni, ducimus quibusdam.</p>
            </div>
          </Col>
          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="List__group">
              {MY_ACOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Resource</h5>
            <ListGroup className="List__group">
              {RESOURCE.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Company</h5>
            <ListGroup className="List__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>NewsLetter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3">
              <Link to="#">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link to="#">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link to="#">
                <i className="ri-twitter-line"></i>
              </Link>
              <Link to="#">
                <i className="ri-telegram-line"></i>
              </Link>
            </div>
          </Col>
          <Col lg="12" className="text-center">
            <p className="Copyright">Copyright 2022, Development by Tri Hartono. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
