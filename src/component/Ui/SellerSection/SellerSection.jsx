import React from 'react';
import './seller-section.css';
import { Col, Container, Row } from 'reactstrap';
import { SELLER__DATA } from '../../../assets/data/data';

const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="seller__section__title">
              <h3>Top Seller</h3>
            </div>
          </Col>
          {SELLER__DATA.map((item) => (
            <Col lg="2" md="3" sm="4" xs="6" className="mb-4" key={item.id}>
              <div className="single__seller__card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="" className="w-100" />
                </div>
                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
