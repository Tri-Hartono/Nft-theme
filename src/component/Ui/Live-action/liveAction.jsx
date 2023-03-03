import React from 'react';
import './live-action.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import NftCard from '../Nft-card/NftCard';
import { NFT__DATA } from '../../../assets/data/data.js';
const liveAction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <div className="live__action__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore More</Link>
              </span>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item, index) => (
            <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
              <NftCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default liveAction;
