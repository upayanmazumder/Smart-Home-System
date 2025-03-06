import partnerStyles from "./Partners.module.css";

const Partners = () => {
  return (
    <ul className={partnerStyles.partners}>
        <div className={`${partnerStyles.tier} ${partnerStyles['tier-1']}`}>
            <i className="fab fa-spotify" aria-label="Spotify"></i>
            <i className="fab fa-amazon" aria-label="Amazon"></i>
        </div>
        <div className={`${partnerStyles.tier} ${partnerStyles['tier-2']}`}>
            <i className="fab fa-facebook" aria-label="Facebook"></i>
            <i className="fab fa-instagram" aria-label="Instagram"></i>
            <i className="fab fa-google" aria-label="Google"></i>
            <i className="fab fa-youtube" aria-label="YouTube"></i>
        </div>
        <div className={`${partnerStyles.tier} ${partnerStyles['tier-3']}`}>
            <i className="fab fa-twitter" aria-label="Twitter"></i>
            <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
            <i className="fab fa-tiktok" aria-label="TikTok"></i>
            <i className="fab fa-snapchat" aria-label="Snapchat"></i>
            <i className="fab fa-apple" aria-label="Apple"></i>
            <i className="fab fa-reddit" aria-label="Reddit"></i>
        </div>
    </ul>
  );
}

export default Partners;