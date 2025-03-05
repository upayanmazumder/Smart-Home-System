import "./JoinNow.css";
import CoolImage from "../../media/join-now.webp";

const JoinNow = () => {
    return (
        <div>
        <ul class="join">
            <div class="left">
                <h1>
                    Looks dope? Join now!
                </h1>
                <p>
                    Delivering Excellence. Empowering Businesses and
                    Individuals with Premium Services
                </p>
            </div>
            <div class="right">
                <img src={CoolImage} alt="Join Now" height="600px">
                </img>
            </div>
        </ul>
    </div>
    )
}

export default JoinNow;