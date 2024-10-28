const apiKey = 'xyYXS0sPPVZ6q9oQHxfRj54ItLVMrNqD';

async function fetchGIFs() {
    const searchTerm = document.getElementById("searchInput").value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10&rating=g`;

    const response = await fetch(url);
    const data = await response.json();

    displayGIFs(data.data);
}

function displayGIFs(gifs) {
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = ''; // Rensar tidigare resultat

    gifs.forEach(gif => {
        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.className = "gif";
        gifContainer.appendChild(img);
    });
}
