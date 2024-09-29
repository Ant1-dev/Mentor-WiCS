import React, {useState} from 'react'
import './Testimonials.css'

import QuotationIcon from '../icons/QuotationIcon'

function Testimonials() {
    return (
        <div className="testimonials">
    <h2>What Our Users Say</h2>
    <div className="testimonial-container">
        <div className="testimonial">
            <div className="testimonial-content">
                <QuotationIcon/>
                <div className="testimonial-text">
                    <p>"This changed my life. I connected with an amazing mentor who guided me through job interviews and 
                        helped me refine my skills. Their support gave me the confidence I needed to land my dream job in tech. Now, I want to give back and mentor others too!"</p>
                    <div className="testimonial-author">
                        <span>Sarah Witner</span><br />
                        <span>Senior @ FIU</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial">
            <div className="testimonial-content">
                 <QuotationIcon/>
                <div className="testimonial-text">
                    <p>"Using the mentorship database completely shifted my career path. I connected with someone who offered insights I hadn’t considered, helping me navigate difficult decisions and build confidence. 
                        Their advice led me to an opportunity I’m passionate about, and now I’m excited to share that same guidance with others looking for direction."</p>
                    <div className="testimonial-author">
                        <span>Emma Johnson</span><br />
                        <span>Junior @ UCF</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial">
            <div className="testimonial-content">
                <QuotationIcon/>
                <div className="testimonial-text">
                    <p>"Connecting with the mentor database was an eye-opener for me. I found a mentor whose advice and experiences directly aligned with my goals. 
                        They helped me see new possibilities and gave me the tools to pursue them. Thanks to their guidance, I’m now in a role I love, and I hope to inspire others."</p>
                    <div className="testimonial-author">
                        <span>Olivia Smith</span><br />
                        <span>Freshman @ FAU</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Testimonials