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

        // Add click event listener to each image
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

        detailsDiv.appendChild(name);
        detailsDiv.appendChild(restaurant);

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

        ramenDiv.appendChild(img);
        ramenDiv.appendChild(detailsDiv);

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



document.addEventListener('DOMContentLoaded', () => {
    displayRamens(ramens);
    addSubmitListener();
});