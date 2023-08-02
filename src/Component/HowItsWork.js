import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Prompt from '../Assets/images/prompt.svg';
import Recieved from '../Assets/images/recieved.svg';
import Downlaod from '../Assets/images/download-save.svg';

const HowItsWork = ({HowItWorkSec}) => {
  return (
    <div className='how-its-work-section my-md-5 pt-0 py-5' ref={HowItWorkSec}>
        <Container>
            <h2 className='text-center fw-bold text-uppercase mb-md-5 mb-2'>How it's work</h2>

            <Row>
                <Col lg={4}>
                    <div className='block text-center'>
                        <img src={Prompt} alt='Prompt' />
                        <h4 className='px-4'>Enter Your Prompt</h4>
                        <p className='px-4'>Click on the input field and enter your prompt text.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='block text-center'>
                        <img src={Recieved} alt='Review' />
                        <h4 className='px-4'>Review and Refine</h4>
                        <p className='px-4'>Evaluate the generated image and refine your prompt if needed.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='block text-center'>
                        <img src={Downlaod} alt='Download' />
                        <h4 className='px-4'>Download or Save the Image</h4>
                        <p className='px-4'>Use the provided option to save the image to your device.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HowItsWork