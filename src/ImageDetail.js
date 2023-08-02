import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import User from './Assets/images/user.png';
import Calender from './Assets/images/calender.png';
import Img from './Assets/images/img.png';
import Share from './Assets/images/share.png';
import Download from './Assets/images/download.png';
import AI from './Assets/images/microchip.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultContext } from './Context/ResultContext';

const ImageDetail = () => {
    const { value, imageDataNew, generateImage, userPrompt } = useContext(ResultContext);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ImgId = searchParams.get('id') || '';
    // const imgUrl = imageDataNew[ImgId];
    const values = JSON.parse(localStorage.getItem("imageUrl"));
    const imgUrl = values[ImgId];
    


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div className='detail-wrapper'>
            <Container fluid className='px-xl-5 px-3'>
                <Row>
                    <Col lg={7} md={7} sm={12} className=''>
                        <div className='image-container text-center'>
                            <img src={values[ImgId].url} alt='' className='main-img' />
                        </div>
                    </Col>
                    
                    <Col lg={5} md={5} sm={12} className='align-self-center'>
                        <div className='content ps-xl-4 ps-0'>
                            <button className='btn close-btn p-0' onClick={() => navigate(-1)}><AiOutlineCloseCircle /></button>

                            <div className='detail d-flex align-items-center justify-content-md-start justify-content-center mt-md-0 mt-4'>
                                <div className='item'>
                                    <img src={User} alt='' />
                                    <p>John Doe</p>
                                </div>
                                <div className='item'>
                                    <img src={Calender} alt='' />
                                    <p>22-Jun-2023</p>
                                </div>
                                <div className='item'>
                                    <img src={Img} alt='' />
                                    <p>1024x1024</p>
                                </div>
                            </div>

                            <h1 className='my-4 text-md-start text-center'>{userPrompt || imageDataNew[ImgId].prompt}</h1>

                            <div className='btn-group'>
                                <button className='me-4 btn' onClick={() => window.open(imgUrl.url, "_blank")}><img className='me-2' src={Download} alt='' /> Open & Save</button>
                                <button className='btn'><img className='me-2' src={Share} alt='' /> Share</button>
                            </div>

                            <p className='mt-4 text-md-start text-center'><img src={AI} alt='' /> Created with AI</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
  )
}

export default ImageDetail