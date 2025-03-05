import FooterStyles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.footerContainer}>
                <div className={FooterStyles.footerColumns}>
                    <div className={FooterStyles.footerColumn}>
                        <h3>Company</h3>
                        <a href="https://upayan.dev" target="_blank">About Us</a>
                        <a href="https://upayan.dev" target="_blank">Blog</a>
                        <a href="/p/terms-of-service">Terms of Service</a>
                        <a href="/p/privacy-policy">Privacy Policy</a>
                        <a href="mailto:support.aetherlink@upayan.dev">Support</a>
                    </div>
                    <div className={FooterStyles.footerColumn}>
                        <h3>Products</h3>
                        <a href="/#products">Features</a>
                        <a href="/#products">Pricing</a>
                        <a href="/#products">Integrations</a>
                        <a href="/#products">API</a>
                        <a href="/#products">Demo</a>
                    </div>
                    <div className={FooterStyles.footerColumn}>
                        <h3>Resources</h3>
                        <a href="/contact" target="_blank">Contact</a>
                        <a href="https://github.com/upayanmazumder/Smart-Home-System" target="_blank">Documentation</a>
                        <a href="https://discord.gg/wQTZcXpcaY" target="_blank">Community</a>
                        <a href="/contact" target="_blank">Security</a>
                        <a href="https://github.com/upayanmazumder/Smart-Home-System" target="_blank">Repository</a>
                    </div>
                </div>
                <div className={FooterStyles.footerBottom}>
                    <div className={FooterStyles.socialMedia}>
                        <a href="https://www.facebook.com/upayan.mazumder" target="_blank"><i className={FooterStyles.icon}>Facebook</i></a>
                        <a href="https://github.com/upayanmazumder" target="_blank"><i className={FooterStyles.icon}>Github</i></a>
                        <a href="https://www.instagram.com/upayan.mazumder/" target="_blank">
                            <i class="icon">Instagram</i>
                        </a>
                        <a href="https://www.linkedin.com/in/upayanmazumder/" target="_blank">
                            <i class="icon">LinkedIn</i>
                        </a>
                    </div>
                    <div className={FooterStyles.footerButtons}>
                        <button className={FooterStyles.joinNowButton}>Join now</button>
                        <button className={FooterStyles.getInTouchButton}>Get in touch</button>
                        <button className={FooterStyles.goToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;