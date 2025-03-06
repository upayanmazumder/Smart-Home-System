import productStyles from "./Products.module.css";

import SmartSpeaker from "../../media/devices/smart-speaker.webp";
import SmartLighting from "../../media/devices/smart-lighting.webp";
import SmartThermostat from "../../media/devices/smart-thermostat.webp";

import productsData from "../../data/products.json";

const productImages = {
    "Smart Speakers": SmartSpeaker,
    "Smart Lighting Systems": SmartLighting,
    "Smart Thermostats": SmartThermostat
};

const Products = () => {
    return (
        <>  
            <div className={productStyles.productContainer}>
                {productsData.map((product, index) => (
                    <div key={index} className={productStyles.product}>
                        <ul>
                            <img src={productImages[product.name]} alt={product.name} className={productStyles.productImage}></img>
                            <div className={productStyles.productContent}>
                                <h3 className={productStyles.productName}>{product.name}</h3>
                                <p className={productStyles.productDescription}>
                                    {product.description}
                                </p>
                                <a href={`/shop/${product.name.toLowerCase().replace(/ /g, '-')}`} className={productStyles.shopLink}>Shop Now</a>
                            </div>
                        </ul>
                    </div>
                ))}
            </div>
            <br />
            <button onClick={() => window.location.href='https://buymeacoffee.com/upayan'} className={productStyles.shop}>
                Check out other products
            </button>
            <br />
        </>
    )
}

export default Products;