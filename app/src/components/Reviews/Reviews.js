import reviewsStyles from "./Reviews.module.css";

import AntonChigurh from "../../media/reviews/anton-chigurh.webp";
import PabloEscobar from "../../media/reviews/pablo-escobar.webp";
import HarshadMehta from "../../media/reviews/harshad-mehta.webp";

const Reviews = () => {
    return (
        <div className={reviewsStyles.reviewContainer}>
            <div className={reviewsStyles.reviewCard} style={{ alignSelf: 'flex-start' }}>
                <div className={reviewsStyles.reviewCardHeader}>
                    <img src={AntonChigurh} alt="Javier Bardem"></img>
                    <h3>Anton Chigurh</h3>
                </div>
                <p>"This smart home system has made my life so much easier. Highly recommend it!"</p>
            </div>
            <div className={`${reviewsStyles.reviewCard} ${reviewsStyles.target}`} style={{ alignSelf: 'flex-end' }}>
                <div className={reviewsStyles.reviewCardHeader}>
                    <img src={PabloEscobar} alt="Pablo Escobar"></img>
                    <h3>Pablo Escobar</h3>
                </div>
                <p>"I love the automation features. They save me so much time every day!"</p>
            </div>
            <div className={reviewsStyles.reviewCard} style={{ alignSelf: 'flex-start' }}>
                <div className={reviewsStyles.reviewCardHeader}>
                    <img src={HarshadMehta} alt="Harshad Mehta"></img>
                    <h3>Harshad Mehta</h3>
                </div>
                <p>"A game changer for my family. The security features are top-notch."</p>
            </div>
        </div>
    );
}

export default Reviews;