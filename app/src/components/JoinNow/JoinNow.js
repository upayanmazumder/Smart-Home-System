import  joinNowStyles from "./JoinNow.module.css";
import CoolImage from "../../media/join-now.webp";

const JoinNow = () => {
    return (
        <div>
        <ul className={joinNowStyles.join}>
            <div className={joinNowStyles.left}>
                <h1>
                    Looks dope? Join now!
                </h1>
                <p>
                    Delivering Excellence. Empowering Businesses and
                    Individuals with Premium Services
                </p>
            </div>
            <div className={joinNowStyles.right}>
                <img src={CoolImage} alt="Join Now" height="600px">
                </img>
            </div>
        </ul>
    </div>
    )
}

export default JoinNow;