import React from 'react';
import '../Styles/wallet.css';
import CommonSection from '../component/Ui/Common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

const wallet__data = [
  {
    title: 'Bitcoin',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, quidem debitis et fugiat cumque?',
    icon: 'ri-bit-coin-line',
  },
  {
    title: 'Coinbase',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, quidem debitis et fugiat cumque?',
    icon: 'ri-coin-line',
  },
  {
    title: 'Metamask',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, quidem debitis et fugiat cumque?',
    icon: 'ri-money-cny-circle-line',
  },
  {
    title: 'Authereum',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, quidem debitis et fugiat cumque?',
    icon: 'ri-bit-coin-line',
  },
];
const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className=" m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis sequi autem. Nobis, voluptas.</p>
              </div>
            </Col>
            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
                <div className="wallet__item">
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
