import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faq = ({FaqSec}) => {

  return (
    <div className='faq-section my-md-5 mt-0 py-5' ref={FaqSec}>
        <h2 className='text-center fw-bold text-uppercase mb-5'>Frequently Asked Questions</h2>

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is Dall-E Free?</Accordion.Header>
                <Accordion.Body>
                Dall-E Free is a website that provides a platform for accessing DALL-E-generated images for free. It allows you to generate AI-powered images on the spot without you having to log in every time you need to generate one.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How does Dall-E Free work?</Accordion.Header>
                <Accordion.Body>
                Dall-E Free utilises DALL-E, a powerful AI model, to generate unique and high-quality images. Users can access the website and easily generate and download these DALL-E-generated images for their projects. You can insert a prompt and generate an image as per your liking. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Are the DALL-E-generated images on Dall-E Free really cost-free?  </Accordion.Header>
                <Accordion.Body>
                Yes, all the DALL-E-generated images you generate through Dall-E Free are completely free to use.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Can I use the DALL-E 2 generated images from Dall-E Free for commercial purposes? </Accordion.Header>
                <Accordion.Body>
                Yes, you are allowed to use the DALL-E-generated images from Dall-E Free for both personal and commercial projects.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Are there any limitations on the number of DALL-E 2 generated images on Dall-E Free?  </Accordion.Header>
                <Accordion.Body>
                No, there are no specific limitations on the number of DALL-E AI-Generated images you can generate on Dall-E Free. You can generate as many images as you need to enhance your projects.

                </Accordion.Body>
            
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Can I modify or edit the DALL-E 2 generated images on Dall-E Free? </Accordion.Header>
                <Accordion.Body>
                Yes, once you have received a DALL-E-generated image from Dall-E Free, you have the freedom to modify and edit it according to your requirements. Feel free to customise and enhance the Dall-E images to suit your project's needs by re-entering the prompt and making a few modifications to your text.
                </Accordion.Body>
            
            </Accordion.Item>


            {/* <Accordion.Item eventKey="6">
                <Accordion.Header>Are there any attribution requirements for using DALL-E 2 AI-generated images from ?</Accordion.Header>
                <Accordion.Body>No, there are no specific attribution requirements for using DALL-E 2 generated images from Dall-E Free. However, it is always appreciated if you can credit Dall-E Free as the source of the images.</Accordion.Body>
            </Accordion.Item> */}


            <Accordion.Item eventKey="7">
                <Accordion.Header>How frequently can you generate DALL-E 2 generated images on Dall-e Free?</Accordion.Header>
                <Accordion.Body>
                Dall-e Free allows you limitless access to generating Dall-e images. You just have to enter a prompt and the images will be generated. 
                </Accordion.Body>
            
            </Accordion.Item>
            <Accordion.Item eventKey="8">
                <Accordion.Header>What image formats are available for download on Dall-E Free?</Accordion.Header>
                <Accordion.Body>
                Dall-E Free primarily offers DALL-E 2 generated images in the PNG format, ensuring high-quality and transparent backgrounds. This format allows for easy integration into various design projects
                 </Accordion.Body>
            
            </Accordion.Item>
            {/* <Accordion.Item eventKey="9">
                <Accordion.Header>Can I provide feedback or suggestions for improving Dall-E Free's services? </Accordion.Header>
                <Accordion.Body>Yes, Dall-E Free appreciates user feedback and suggestions to enhance its services. You can provide feedback or suggestions through the website's contact or feedback form. Your input helps improve the user experience for everyone.</Accordion.Body>
            </Accordion.Item> */}
        </Accordion>
    </div>
  )
}

export default Faq