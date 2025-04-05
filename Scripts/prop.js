// Price Slider Value Display
const priceSlider = document.getElementById('price');
const priceValue = document.getElementById('priceValue');
priceSlider.addEventListener('input', () => {
    priceValue.textContent = priceSlider.value;
});

// Sample Data for Properties
const properties = [
    { id: 1, title: 'Luxury Apartment', price: 500000, location: 'New York', type: 'apartment', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Cozy House', price: 300000, location: 'Los Angeles', type: 'house', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Commercial Space', price: 700000, location: 'Chicago', type: 'commercial', image: 'https://via.placeholder.com/300x200' },
    // Add more properties as needed
];

// Function to display properties
function displayProperties(filteredProperties) {
    const propertiesContainer = document.getElementById('properties');
    propertiesContainer.innerHTML = '';
    filteredProperties.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.classList.add('property');
        propertyElement.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>Price: $${property.price}</p>
            <p>Location: ${property.location}</p>
            <p>Type: ${property.type}</p>
        `;
        propertiesContainer.appendChild(propertyElement);
    });
}

// Filter Properties
document.getElementById('propertyFilterForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const price = parseInt(priceSlider.value);
    const location = document.getElementById('location').value.toLowerCase();
    const type = document.getElementById('type').value;

    const filteredProperties = properties.filter(property => {
        return (
            (price ? property.price <= price : true) &&
            (location ? property.location.toLowerCase().includes(location) : true) &&
            (type ? property.type === type : true)
        );
    });

    displayProperties(filteredProperties);
});

// Initial Display
displayProperties(properties);

// Sample Blog Posts
const blogPosts = [
    { title: 'How to Choose the Right Property', content: 'Choosing the right property is crucial for long-term success. Here are some tips...' },
    { title: 'Top Property Investment Trends', content: 'Investing in property can be lucrative, but it’s important to stay informed about trends...' },
    // Add more blog posts as needed
];

function displayBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = '';
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        blogContainer.appendChild(postElement);
    });
}

// Initial Blog Display
displayBlogPosts();