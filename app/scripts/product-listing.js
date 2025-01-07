const products = [
    {
        "image": "media/devices/smart-speaker.jpg",
        "name": "Smart Speakers",
        "description": "Control other smart home devices, play music, set reminders, and much more using voice commands",
        "shopLink": "#"
    },
    {
        "image": "media/devices/smart-lighting.jpg",
        "name": "Smart Lighting Systems",
        "description": "Transform your home with smart lighting. ou can control the lights using your smartphone, set schedules, and even change colors to create the perfect ambiance",
        "shopLink": "#"
    },
    {
        "image": "media/devices/smart-thermostat.jpg",
        "name": "Smart Thermostats",
        "description": "This smart thermostat learns your temperature preferences and adjusts automatically to save energy. You can control it remotely via your phone, and it even shows you the weather forecast",
        "shopLink": "#"
    }
];

const container = document.getElementById('product-container');

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.innerHTML = `
        <ul>
            <img src="${product.image}" alt="${product.name}" height="180" width="180" class="product-image">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <a href="${product.shopLink}" class="shop-link">Shop Now</a>
            </div>
        </ul>
    `;

    container.appendChild(productElement);
});