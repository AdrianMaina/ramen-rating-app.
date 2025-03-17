const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu ramen.jpeg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso ramen.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonokotsu ramen.jpeg" }
];

function displayRamens(ramens) {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = '';

    ramens.forEach(ramen => {
        const ramenDiv = document.createElement('div');
        ramenDiv.classList.add('ramen-item');

        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add('ramen-img'); 

        
        img.addEventListener('click', () => {
            displayLargeRamen(ramen);
        });

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('ramen-details');
        detailsDiv.style.display = 'none';

        const name = document.createElement('h3');
        name.textContent = ramen.name;

        const restaurant = document.createElement('p');
        restaurant.textContent = `Restaurant: ${ramen.restaurant}`;

        
        if (ramen.rating) {
            const rating = document.createElement('p');
            rating.textContent = `Rating: ${ramen.rating}`;
            detailsDiv.appendChild(rating);
        }

        if (ramen.comment) {
            const comment = document.createElement('p');
            comment.textContent = `Comment: ${ramen.comment}`;
            detailsDiv.appendChild(comment);
        }

        detailsDiv.appendChild(name);
        detailsDiv.appendChild(restaurant);
        
        ramenDiv.appendChild(img);
        ramenDiv.appendChild(detailsDiv);

        // Hover effects
        img.addEventListener('mouseover', () => {
            detailsDiv.style.display = 'block';
        });
        img.addEventListener('mouseout', () => {
            detailsDiv.style.display = 'none';
        });

        ramenMenu.appendChild(ramenDiv);
    });
}

function displayLargeRamen(ramen) {
    const displayDiv = document.getElementById('ramen-display');
    const displayImage = document.getElementById('display-image');
    const displayDetails = document.getElementById('display-details');

    displayImage.src = ramen.image;
    displayImage.alt = ramen.name;

    let detailsHTML = `
        <h3>${ramen.name}</h3>
        <p>Restaurant: ${ramen.restaurant}</p>
    `;

    if (ramen.rating) {
        detailsHTML += `<p>Rating: ${ramen.rating}</p>`;
    }

    if (ramen.comment) {
        detailsHTML += `<p>Comment: ${ramen.comment}</p>`;
    }

    displayDetails.innerHTML = detailsHTML;
    displayDiv.style.display = 'block';
}

function addSubmitListener() {
    const form = document.getElementById('ramen-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const restaurant = document.getElementById('restaurant').value;
        const image = document.getElementById('image').value;
        const rating = document.getElementById('rating').value || null; // Default to null if no rating
        const comment = document.getElementById('comment').value || null; // Default to null if no comment

        const newRamen = { 
            id: ramens.length + 1, 
            name, 
            restaurant, 
            image, 
            rating, 
            comment 
        };

        ramens.push(newRamen);
        displayRamens(ramens);
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayRamens(ramens);
    addSubmitListener();

    
    const imageInput = document.getElementById('image');
    const imagePreview = document.createElement('img');
    imagePreview.id = 'image-preview';
    imagePreview.style.width = '150px'; 
    document.querySelector('form').appendChild(imagePreview);

    imageInput.addEventListener('input', () => {
        const imageUrl = imageInput.value;
        if (imageUrl) {
            imagePreview.src = imageUrl;
            imagePreview.style.display = 'block';
        } else {
            imagePreview.style.display = 'none';
        }
    });
});
