import React from 'react';
import './Herosection.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import heroimg from '../../assets/images/hero.jpg';

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discovery rare digital art and Collect<span>sel extraordinary</span>NFTs
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum unde laboriosam dolorem, optio quo suscipit reprehenderit facilis, sapiente fuga ipsam tempore beatae reiciendis delectus cumque odio, iure nobis
                accusantium blanditiis.
              </p>
              <div className="hero__btn d-flex align-items-center gap-4">
                <button className="explore_btn d-flex align-items-center gap-2 justify-content-center">
                  <i className="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create_btn d-flex align-items-center gap-2 justify-content-center">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroimg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
