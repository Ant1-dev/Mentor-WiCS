import React, {useState} from 'react'
import './FeaturedMentors.css'

function FeaturedMentors() {

    return (
        <div className="featured-mentors">
        <div className="mentor-cards">
            <div className="mentor-card1">
                <div className="circular-frame">
                    <img src="/jannice-mentor.jpg" alt="Mentor" className="circular-image" />
                </div>
                <div>
                    <h3>Jannice Waterson</h3>
                    <p className="mentor-description">A self-made entrepreneur, she launched a nonprofit organization that provides coding workshops for underrepresented women in tech.</p>
                </div>
            </div>
            <div className="mentor-card1">
                <div className="circular-frame">
                    <img src="/candace-mentor.jpg" alt="Mentor" className="circular-image" />
                </div>
                <div>
                    <h3>Candace Parker</h3>
                    <p className="mentor-description">A self-made entrepreneur, she launched a nonprofit organization that provides coding workshops for underrepresented women in tech.</p>
                </div>
            </div>
            <div className="mentor-card1">
                <div className="circular-frame">
                    <img src="/frederica-mentor.jpg" alt="Mentor" className="circular-image" />
                </div>
                <div>
                    <h3>Jannice Waterson</h3>
                    <p className="mentor-description">A self-made entrepreneur, she launched a nonprofit organization that provides coding workshops for underrepresented women in tech.</p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default FeaturedMentors

