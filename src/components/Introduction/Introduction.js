import "./Introduction.css";
import terrorblade from './terrorblade.jpg';

export default function Introduction() {
    return (
        <div className="introduction-container">
            <div className="img-display-wrapper">
                <img className="img-display" src={terrorblade} alt="My Pic Here"></img>
            </div>

            <div className="personal-info-container">
                <div className="personal-info-inner name-display">
                    Sai Mahesh Vemulapalli
                </div>

                <div className="personal-info-inner contact-details-display">
                    <div><a href="https://github.com/maheshtnt">Github</a></div>
                    <div><a href="https://www.linkedin.com/in/sai-mahesh-vemulapalli/">LinkedIn</a></div>
                </div>

                <div className="personal-info-inner desc-display">
                    This is just a test for this test and so this is nothing but a test. Lorem Ipsum, I guess.
                </div>
            </div>
        </div>
    )
}