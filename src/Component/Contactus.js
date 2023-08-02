import React from 'react'
import { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contactus = () => {

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }, [])

  return (
    <div className='contact-us py-5'>
        <Container>
          <div className='text-center'>
            <h1>Contact us</h1>
            <p>If you need any help regarding dall-e image generator service please get in touch with us our team will surely help you.</p>
            
          </div>
            <Form className='mt-5'>
              <Row>
                <Col lg={{span: 10, offset: 1}} md={{span: 12}}>
                    <Row>
                    <Col lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                    </Col>
                    
                    <Col lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>
                    </Col>
                    
                    <Col lg={12}>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                      </Form.Group>
                    </Col>

                    <Col lg={12}>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Message" rows={6} />
                      </Form.Group>
                    </Col>

                    <Col lg={12} className='text-center mt-4'>
                      <button className='btn'>SEND US</button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
        </Container>
    </div>
  )
}

export default Contactus