async function getAnime() {
  const data = await fetch("https://api.jikan.moe/v3/search/anime?q=naruto&page=1");
  let anime = await data.json();
  console.log(anime);

  const searchResults = document.querySelector(".card-container");
  searchResults.innerHTML = anime.results.map((ele) => {
    return `
          <div class="card">
            <img src="${ele.image_url}" class="avtar" alt="Avatar" style="width:100%">
            <div class="container">
                 <h4><b>${ele.title}</b></h4> 
                 <p>${ele.synopsis}</p> 
             </div>
        </div>
      `;
  });
}
getAnime();
