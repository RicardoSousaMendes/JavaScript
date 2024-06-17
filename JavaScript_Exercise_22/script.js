const loadAnimesFiltered = (yearParam) => {
    const promise = new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open("GET", "https://api.jikan.moe/v4/top/anime");
      request.responseType = "json";
      request.send();
  
      request.addEventListener("error", () => reject("errro!"));
  
      request.addEventListener("load", () => {
        const animesList = request.response.data;
  
        const animesFiltered = animesList.filter(
          (animeItem) => animeItem.year === yearParam
        );
  
        resolve(animesFiltered);
      });
    });
  
    return promise;
  };
  
  const findAnimeByYear = async (year) => {
    const response = await loadAnimesFiltered(year);
  
    if (response.length === 0) {
      console.log(`O ano ${year} não tem conteúdos.`);
    } else {
      response.map((animeItem) => console.log(animeItem.title));
    }
};


