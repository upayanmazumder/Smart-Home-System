import "./Products.css";
import SmartSpeaker from "../../media/devices/smart-speaker.webp";
import SmartLighting from "../../media/devices/smart-lighting.webp";
import SmartThermostat from "../../media/devices/smart-thermostat.webp";

const Products = () => {
    return (
        <>
            <div style={{ paddingTop: '5px' }}>
                <a className="sectionHeading" href="/#products">
                    <h2>Products</h2>
                    <p style={{ marginBottom: '30px' }}>Some of our best-selling products!</p>
                </a>
                <div className="product-container">
                    <div className="product">
                        <ul>
                            <img src={SmartSpeaker} alt="Smart Speakers" className="product-image"></img>
                            <div className="product-content">
                                <h3 className="product-name">Smart Speakers</h3>
                                <p className="product-description">
                                    Control other smart home devices, play music, set
                                    reminders,
                                    and much more using voice commands
                                </p>
                                <a href="#" className="shop-link">Shop Now</a>
                            </div>
                        </ul>
                    </div>
                    <div className="product">
                        <ul>
                            <img src={SmartLighting} alt="Smart Lighting Systems" className="product-image"></img>
                            <div className="product-content">
                                <h3 className="product-name">Smart Lighting Systems</h3>
                                <p className="product-description">
                                    Transform your home with smart lighting. You can
                                    control
                                    the
                                    lights using your smartphone, set schedules, and even change colors to create
                                    the
                                    perfect ambiance
                                </p>
                                <a href="#" className="shop-link">Shop Now</a>
                            </div>
                        </ul>
                    </div>
                    <div className="product">
                        <ul>
                            <img src={SmartThermostat} alt="Smart Thermostats"
                                className="product-image" />
                            <div className="product-content">
                                <h3 className="product-name">Smart Thermostats</h3>
                                <p className="product-description">
                                    This smart thermostat learns your temperature
                                    preferences
                                    and
                                    adjusts automatically to save energy. You can control it remotely via your
                                    phone,
                                    and it
                                    even shows you the weather forecast
                                </p>
                                <a href="#" className="shop-link">Shop Now</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <button onClick={() => window.location.href='https://buymeacoffee.com/upayan'} className="shop">
                Check out other products
            </button>
            <br />
        </>
    )
}

export default Products;