import React from 'react'
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
const About = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  return (
    <div className='about-page'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Dall-e Free</title>
        <meta name="description" content="Unleash your creative spirit with prompt AI-generated images. With Dall-e Free you can generate limitless images through Dall-e AI image generator"></meta>
      </Helmet>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className='image-animate'>
              <div className='left'></div>
              <div className='middle'></div>
              <div className='right'></div>
            </div>
          </Col>

          <Col lg={6} className='ps-lg-5 ps-3'>
            <h1>Welcome to Dall-E Free where imagination gives way to new possibilities</h1>
            <p>Unleash your creative spirit with on-the-spot AI-generated images, courtesy of the revolutionary Dall-e model. And the best part? It's all completely free, no strings attached!</p>
            <p>We believe in making creativity accessible to everyone. That's why Dall-E Free brings you a treasure trove of visually stunning images, ready to ignite your imagination. No sign-ups, no subscriptions—just pure, unbridled inspiration at your fingertips.</p>
            <p>Our intuitive platform ensures that creating the perfect image is just a click away. Whether you're seeking artistic inspiration or a jaw-dropping visual for your project, our curated powerful search function makes exploration a joyride.</p>
            <p>Privacy and security are our top priorities. No personal information is required, and no data is stored—just you and your artistic pursuits. We believe in fostering a stress-free environment so you can focus on creating without any distractions.</p>
            <p>Dall-E Free is constantly evolving, allowing you the freedom to produce mind-bending images whenever you want wherever you want. Join our vibrant community of creators, where imagination knows no boundaries. Let your ideas soar powered by the limitless potential of AI image generator Dalle-e.</p>
            <p>So get on board with us to discover a world where artistry and technology collide, and every click sparks a world of possibilities.</p>
            <p>Unleash your creativity today and let the Dall-e 2 ai magic set your ideas free.</p>
          </Col>
        </Row>
      </Container>
    </div>
)
}

export default About