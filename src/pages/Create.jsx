import React from 'react';
import '../Styles/create-item.css';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../component/Ui/Common-section/CommonSection';
import NftCard from '../component/Ui/Nft-card/NftCard';
import img from '../assets/images/img-01.jpg';
import avatar from '../assets/images/ava-01.png';

const item = {
  id: '04',
  title: 'Guard',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.',
  imgUrl: img,
  creator: 'Alex',
  creatorImg: avatar,
  currentBid: 7.89,
};
const Create = () => {
  return (
    <>
      <CommonSection title="Create Item" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>
            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form action="">
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" placeholder="Browse" className="upload__input" />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input type="number" placeholder="Enter Price for one item (ETH)" />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between color-white">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" placeholder="dd-mm-yyyy" />
                    </div>
                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" placeholder="dd-mm-yyyy" />
                    </div>
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea className="w-100" name="" id="" rows="10" placeholder="Enter description"></textarea>
                  </div>
                </form>
                <button className="send__btn" style={{ border: 'none', padding: '7px 25px', borderRadius: '5px', marginTop: '20px' }}>
                  Create
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
