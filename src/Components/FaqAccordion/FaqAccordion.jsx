import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './faqAccordion.css'

const FaqAccordion = () => {


    return (
        <div className='faq__container'>
            <div className="faq__container-head">
                <img className='faq__container-head-img' src='./assets/images/icon-star.svg' alt="star icon" />
                <span className='faq__container-head-title'>FAQs</span>
            </div>
            <div className="faq__container-acordion">
                <Accordion defaultActiveKey="0">

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is Frontend Mentor, and how will it help me?</Accordion.Header>
                        <Accordion.Body>
                            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS , and JavaScript. it's suitable for all levels and ideal for portfolio building.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Is Frontend Mentor free?</Accordion.Header>
                        <Accordion.Body>
                            The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can I use Frontend Mentor project in my portfolio?</Accordion.Header>
                        <Accordion.Body>
                            Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How can I get help if I'm stuck on a challenge?</Accordion.Header>
                        <Accordion.Body>
                            The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div >
    )
}

export default FaqAccordion