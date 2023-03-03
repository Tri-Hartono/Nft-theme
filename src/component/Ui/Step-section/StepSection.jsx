import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './stepsection.css';

const STEP_DATA = [
  {
    title: 'Setup your wallet',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugiat quis obcaecati quae, possimus quidem minima laborum esse veniam ipsa ex option',
    icon: 'ri-wallet-line',
  },
  {
    title: 'Create your Collection',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugiat quis obcaecati quae, possimus quidem minima laborum esse veniam ipsa ex option',
    icon: 'ri-layout-masonry-line',
  },
  {
    title: 'Add your NFTs',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugiat quis obcaecati quae, possimus quidem minima laborum esse veniam ipsa ex option',
    icon: 'ri-image-line',
  },
  {
    title: 'List them for sale ',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugiat quis obcaecati quae, possimus quidem minima laborum esse veniam ipsa ex option',
    icon: 'ri-list-check',
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>
          {STEP_DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" className="mb-5" key={index}>
              <div className="single__step__item">
                <span>
                  <Link to="/wallet">
                    <i className={item.icon}></i>
                  </Link>
                  <div className="step__item__content">
                    <h5>
                      <Link to="/wallet">{item.title}</Link>
                    </h5>
                    <p>{item.desc}</p>
                  </div>
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
