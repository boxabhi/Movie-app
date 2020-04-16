const mo = [{
      "popularity": 506.482,
      "vote_count": 2998,
      "video": false,
      "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      "id": 419704,
      "adult": false,
      "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      "original_language": "en",
      "original_title": "Ad Astra",
      "genre_ids": [
         18,
         878
      ],
      "title": "Ad Astra",
      "vote_average": 6,
      "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
      "release_date": "2019-09-17"
   },
   {
      "popularity": 233.655,
      "vote_count": 122,
      "video": false,
      "poster_path": "/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
      "id": 446893,
      "adult": false,
      "backdrop_path": "/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
      "original_language": "en",
      "original_title": "Trolls World Tour",
      "genre_ids": [
         12,
         16,
         35,
         14,
         10402,
         10751
      ],
      "title": "Trolls World Tour",
      "vote_average": 7.7,
      "overview": "Queen Poppy and Branch make a surprising discovery — there are other Troll worlds beyond their own, and their distinct differences create big clashes between these various tribes. When a mysterious threat puts all of the Trolls across the land in danger, Poppy, Branch, and their band of friends must embark on an epic quest to create harmony among the feuding Trolls to unite them against certain doom.",
      "release_date": "2020-03-12"
   },
   {
      "popularity": 263.273,
      "vote_count": 2990,
      "video": false,
      "poster_path": "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
      "id": 38700,
      "adult": false,
      "backdrop_path": "/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
      "original_language": "en",
      "original_title": "Bad Boys for Life",
      "genre_ids": [
         28,
         80,
         53
      ],
      "title": "Bad Boys for Life",
      "vote_average": 7.2,
      "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
      "release_date": "2020-01-15"
   },
   {
      "popularity": 224.277,
      "vote_count": 2607,
      "video": false,
      "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      "id": 454626,
      "adult": false,
      "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
      "original_language": "en",
      "original_title": "Sonic the Hedgehog",
      "genre_ids": [
         28,
         35,
         878,
         10751
      ],
      "title": "Sonic the Hedgehog",
      "vote_average": 7.5,
      "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      "release_date": "2020-02-12"
   },
]

const popular_movies = document.getElementById('popular_movies')
const popular_shows = document.getElementById('popular_shows')

class Movies {
   Movies(url_one, url_two, api_key) {
      this.url_one = url_one;
      this.url_two = url_two;
      this.api_key = api_key;
   }
   getPopularMovie() {
      var html = `<div class="col-lg-12 mx-auto ml-5 pl-5"><div class="spinner-border text-center text-light" role="status"> <span class="sr-only">Loading...</span></div></div>`;
      popular_movies.innerHTML = html
      setTimeout(() => {
         const get_url = `${url_one}?api_key=${api_key}`
         fetch(get_url)
            .then(response => response.json())
            .then(data => {
               this.renderUI(data.results, popular_movies)
            })
      }, 3000)

   }

   getTv() {
      var f_html = `<div class="col-lg-12 mx-auto ml-5 pl-5"><div class="spinner-border text-center text-light" role="status"> <span class="sr-only">Loading...</span></div></div>`;
      popular_shows.innerHTML = f_html
      this.renderUI(mo, popular_shows)
      setTimeout(() => {
         const get_url = `${url_two}?api_key=${api_key}`
         fetch(get_url)
            .then(response => response.json())
            .then(data => {
               console.log(data.results)
               this.renderUI(data.results, popular_shows)
            })
      }, 3000)

   }

   checkBottom() {
      window.onscroll = function (ev) {
         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("bottom")
         }
      };

   }





   renderUI(movies, element) {
      var html = "";
      for (var i = 0; i < movies.length; i++) {
         html += `<div class="col-lg-3 col-sm-4 col-xs-4 mt-3 mx-auto">
          <div class="shadow-lg bg-dark rounded" style="width:220px">
            <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}"
              class="card-img-top img-fluid img-responsive" style="height:220px;width:230px">
            <div class="card-body text-light">
              <h6 class="p-0 m-0 font-weight-bolder">${movies[i].title}</h6>
              <p class="p-0 m-0 text-monospace"><img src="star.png" style="height:14px"> ${parseInt(movies[i].vote_average)}% | ${movies[i].release_date}</p>
              ${(movies[i].overview).substring(0,22)}
            </div>
          </div>
        </div>`
      }
      if (movies.length > 0)
         element.innerHTML = html

   }

}

const url_one = 'https://api.themoviedb.org/3/movie/popular';
const api_key = '1b4b65c9478c6f2e1fbb2eb4d5445288';
const url_two = 'https://api.themoviedb.org/3/tv/top_rated'
var movie = new Movies(url_one, url_two, api_key);
movie.getPopularMovie()
movie.getTv()


// https://api.themoviedb.org/3/movie/popular?api_key=1b4b65c9478c6f2e1fbb2eb4d5445288



/**
 const get_url = `${url}?api_key=${api_key}`
        await fetch(get_url)
        .then(response => response.json())
        .then(data =>{
            console.log(data.results)
})

*/