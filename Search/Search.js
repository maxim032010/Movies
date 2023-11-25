let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navbar.classList.remove('active');
}

document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var searchResultsElement = document.getElementById("searchResults");
    var errorMessageElement = document.querySelector(".error-message");
    searchResultsElement.innerHTML = '';

    if (searchTerm.trim() !== '') {
        var folderPath = '../Movies/';
        var fileNames = [
            { name: 'Elemental', poster: '../img/elemental.png', link: 'Elemental/Elemental.html' },
            { name: 'five nights at freddys', poster: '../img/fnaf.png', link: 'five nights at freddys/fnaf.html'},
            { name: 'fnaf', poster: '../img/fnaf.png', link: 'five nights at freddys/fnaf.html'}
        ];

        fileNames.forEach(function(file) {
            if (file.name.toLowerCase().includes(searchTerm)) {
                var listItem = document.createElement("li");

                var posterImg = document.createElement("img");
                posterImg.src = folderPath + file.poster;
                posterImg.alt = file.name;

                var link = document.createElement("a");
                link.href = folderPath + file.link;
                link.appendChild(posterImg);

                listItem.appendChild(link);
                searchResultsElement.appendChild(listItem);
            }
        });

        if (searchResultsElement.children.length === 0) {
            errorMessageElement.style.display = "block";
        } else {
            errorMessageElement.style.display = "none";
        }
    } else {
        errorMessageElement.style.display = "none";
    }
});

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");
});

document.querySelector(".loader").addEventListener("transitioned", () => {
    document.body.removeChild(document.querySelector(".loader"));
});