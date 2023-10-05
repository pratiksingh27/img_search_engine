const searchForm = document.getElementById("search-form"),
searchBox = document.getElementById("search-box"),
searchResult = document.getElementById("search-result"),
ShowMoreImg = document.getElementById("show-more-img");

const accessKey = "kRUtu2_n4mltohtV7Q_QjY6x4nZpgeXHf4Qh2ROuNR4";

let keyword = "";
let page = 1;
// &client_id=kRUtu2_n4mltohtV7Q_QjY6x4nZpgeXHf4Qh2ROuNR4
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    // console.log(data);
    const results = data.results;
    
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        /* const imgUrl = result.urls.small; */
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.setAttribute('target', '_blank');
        // imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    ShowMoreImg.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});

ShowMoreImg.addEventListener("click", ()=>{
    page++;
    searchImages();
});