import "./Reviews.css";
import AntonChigurh from "../../media/reviews/anton-chigurh.webp";
import PabloEscobar from "../../media/reviews/pablo-escobar.webp";
import HarshadMehta from "../../media/reviews/harshad-mehta.webp";

const Reviews = () => {
    return (
        <div>
        <a class="sectionHeading" href="/#reviews">
            <h2>Reviews</h2>
            <p>What they say about us..</p>
        </a>
        <div class="review-container">
            <div class="review-card" style={{ alignSelf: 'flex-start' }}>
                <div class="review-card-header">
                    <img src={AntonChigurh} alt="Javier Bardem"></img>
                    <h3>Anton Chigurh</h3>
                </div>
                <p>"This smart home system has made my life so much easier. Highly recommend it!"</p>
            </div>
            <div class="review-card target" style={{ alignSelf: 'flex-end' }}>
                <div class="review-card-header">
                    <img src={PabloEscobar} alt="Pablo Escobar"></img>
                    <h3>Pablo Escobar</h3>
                </div>
                <p>"I love the automation features. They save me so much time every day!"</p>
            </div>
            <div class="review-card" style={{ alignSelf: 'flex-start' }}>
                <div class="review-card-header">
                    <img src={HarshadMehta} alt="Harshad Mehta"></img>
                    <h3>Harshad Mehta</h3>
                </div>
                <p>"A game changer for my family. The security features are top-notch."</p>
            </div>
        </div>
    </div>  
    );
}

export default Reviews;