import "./Partners.css";

const Partners = () => {
  return (
    <>
        <a class="sectionHeading" href="/#partners">
            <h2>Our Partners</h2>
        </a>
        <div class="tier tier-1">
            <i class="fab fa-spotify" aria-label="Spotify"></i>
            <i class="fab fa-amazon" aria-label="Amazon"></i>
        </div>
        <div class="tier tier-2">
            <i class="fab fa-facebook" aria-label="Facebook"></i>
            <i class="fab fa-instagram" aria-label="Instagram"></i>
            <i class="fab fa-google" aria-label="Google"></i>
            <i class="fab fa-youtube" aria-label="YouTube"></i>
        </div>
        <div class="tier tier-3">
            <i class="fab fa-twitter" aria-label="Twitter"></i>
            <i class="fab fa-linkedin" aria-label="LinkedIn"></i>
            <i class="fab fa-tiktok" aria-label="TikTok"></i>
            <i class="fab fa-snapchat" aria-label="Snapchat"></i>
            <i class="fab fa-apple" aria-label="Apple"></i>
            <i class="fab fa-reddit" aria-label="Reddit"></i>
        </div>
    </>
  );
}

export default Partners;