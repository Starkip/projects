const imageContainer = document.getElementById('image-container');

let photosArray = [];

// unsplash api
let imgaecount = 3;
const apiKey = 'MgRR5DJnk4oih23Qo6EftTCqeT9fpnEB7GY25tfDr8w';
const apiUrl = `https://api.unsplash.com/photos/random?query=japan&client_id=${apiKey}&count=${imgaecount}`;

function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

function displayPhotos() {
	photosArray.forEach((photo) => {
		const link = document.createElement('a');
		setAttributes(link, {
			href: photo.links.html,
			target: '_blank',
		});

		const img = document.createElement('img');
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		});

		link.appendChild(img);
		imageContainer.appendChild(link);
	});
}

async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		displayPhotos();
	} catch (error) {

	}
}

window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000);
	getPhotos();
})
getPhotos();
