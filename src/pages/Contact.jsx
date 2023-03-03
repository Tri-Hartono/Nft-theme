import React, { useRef } from 'react';
import CommonSection from '../component/Ui/Common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

const Contact = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const subjectRef = useRef('');
  const messageRef = useRef('');

  const handleSubmit = (e) => {
    e.prevenDefault();
  };
  return (
    <>
      <CommonSection title="Contact" />
      <Container>
        <section>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2 className="text-light">Drop a Message</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet delectus inventore sapiente excepturi, similique temporibus veniam.</p>
              <div className="contact">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input type="text" placeholder="Enter your name" ref={nameRef} />
                  </div>
                  <div className="form__input">
                    <input type="email" placeholder="Enter your email" ref={emailRef} />
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder="Enter subject" ref={subjectRef} />
                  </div>
                  <div className="form__input">
                    <textarea rows="7" placeholder="Write Message" ref={messageRef}></textarea>
                  </div>
                  <button className="send__btn" style={{ border: 'none', padding: '7px 25px', borderRadius: '5px', marginTop: '20px' }}>
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Contact;
