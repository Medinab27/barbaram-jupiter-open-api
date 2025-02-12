document.getElementById('imageLink').addEventListener('click', () => {
  fetchDogImages();
});

document.getElementById('breedLink').addEventListener('click', () => {
  fetchDogBreeds();
});

// Function to fetch dog images
function fetchDogImages() {
  fetch('https://api.thedogapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => {
          const content = document.getElementById('content');
          content.innerHTML = ''; // Clear previous content

          data.forEach(dog => {
              const imageDiv = document.createElement('div');
              const img = document.createElement('img');
              img.src = dog.url;
              img.alt = 'Dog Image';
              imageDiv.appendChild(img);
              content.appendChild(imageDiv);
          });
      })
      .catch(error => {
          console.error('Error fetching dog images:', error);
          alert('Failed to load dog images.');
      });
}

// Function to fetch dog breed information
function fetchDogBreeds() {
  fetch('https://api.thedogapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => {
          const content = document.getElementById('content');
          content.innerHTML = ''; // Clear previous content

          let breedInfoAvailable = false; // To track if any breed info is available

          data.forEach(dog => {
              const imageDiv = document.createElement('div');
              const img = document.createElement('img');
              img.src = dog.url;
              img.alt = 'Dog Image';
              imageDiv.appendChild(img);

              // Check if breed information is available
              if (dog.breeds && dog.breeds.length > 0) {
                  const breedInfo = dog.breeds[0];
                  const breedDetails = document.createElement('p');
                  breedDetails.innerHTML = `
                      <strong>Breed:</strong> ${breedInfo.name} <br>
                      <strong>Origin:</strong> ${breedInfo.origin} <br>
                      <strong>Life Span:</strong> ${breedInfo.life_span} <br>
                      <strong>Temperament:</strong> ${breedInfo.temperament}
                  `;
                  imageDiv.appendChild(breedDetails);
                  breedInfoAvailable = true;
              } else {
                  const noBreedDiv = document.createElement('p');
                  noBreedDiv.innerHTML = `<i>Breed information not available</i>`;
                  imageDiv.appendChild(noBreedDiv);
              }

              content.appendChild(imageDiv);
          });

          // If no breed information was found, show a message
          if (!breedInfoAvailable) {
              const noBreedMessage = document.createElement('div');
              noBreedMessage.innerHTML = `<p>No breed information available for any of these dogs.</p>`;
              content.appendChild(noBreedMessage);
          }
      })
      .catch(error => {
          console.error('Error fetching dog breeds:', error);
          alert('Failed to load dog breeds.');
      });
}
