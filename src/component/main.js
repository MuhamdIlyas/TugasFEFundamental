function main() {
    const urlImage = "https://image.tmdb.org/t/p/w500/";
    const urlTrendingMovieWeek = "https://api.themoviedb.org/3/trending/movie/week?api_key=52d1755103928c6172453f23097460d2";
    const urlPopularMovie = "https://api.themoviedb.org/3/movie/popular?api_key=52d1755103928c6172453f23097460d2";
    const urlTopRateMovie = "https://api.themoviedb.org/3/movie/top_rated?api_key=52d1755103928c6172453f23097460d2";
    const urlUpComing = "https://api.themoviedb.org/3/movie/upcoming?api_key=52d1755103928c6172453f23097460d2";

    const buttonPopular = document.getElementById("popular");
    const buttonRating = document.getElementById("rating");
    const buttonUpcoming = document.getElementById("upcoming");

    const inputSearch = document.getElementById("input-search");
    const buttonSearch = document.getElementById("button-search");

    //Mendapatkan Api data movie
    const getMovie = (url) => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.error){
                    showResponseMessage(responseJson.message);
                } else {
                    renderingMovie(responseJson.results);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    const getTrendingMovie = (url) => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.error){
                    showResponseMessage(responseJson.message);
                } else {
                    renderingTrendingMovie(responseJson.results);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    //Menampilkan data
    const renderingTrendingMovie = (movies) => {
        const listTrendingMovies = document.querySelector("#listTrendingMovies");
        listTrendingMovies.innerHTML = "";

        movies.forEach(movie => {
            listTrendingMovies.innerHTML +=
            `<item-trending-movie class="col-lg-3 col-md-6 col-12 mb-4"
            path="${urlImage}${movie.poster_path}"
            title="${movie.original_title}"
            </item-trending-movie>`
        });
    }

    const renderingMovie = (movies) => {
        const listMovies = document.querySelector("#listMovies");
        listMovies.innerHTML = "";

        movies.forEach(movie => {
            listMovies.innerHTML +=
            `<item-movie class="col-lg-2 col-md-4 col-6"
            path="${urlImage}${movie.poster_path}"
            title="${movie.original_title}"
            release="${movie.release_date}"
            popularity="${movie.popularity}"
            id-movie="${movie.id}">
            </item-movie>`
        });

        //Detail Movie
        const buttonModal = document.querySelectorAll(".modal-detail-button");
        buttonModal.forEach(button => {
            button.addEventListener("click", function(){
                let idMovie = this.getAttribute("data-id");
                fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=52d1755103928c6172453f23097460d2`)
                    .then(response => {
                        return response.json();
                    })
                    .then(responseJson => {
                        if(responseJson.error){
                            showResponseMessage(responseJson.message);
                        } else {
                            renderMovieDetail(responseJson);
                        }
                    })
                    .catch(error => {
                        showResponseMessage(error);
                    })
            })
            
        });
    };

    //Menampilkan detail
    const renderMovieDetail = (movie) => {
        const modalBody = document.querySelector(".modal-body");
        const genres = movie.genres;
        let listGenres = [];
        
        genres.forEach(genre => {
            listGenres.push(genre.name);
        })

        modalBody.innerHTML = `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${urlImage}${movie.poster_path}" class="img-fluid" alt="poster">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${movie.original_title}</h4></li>
                            <li class="list-group-item"><strong>Release Date : </strong>${movie.release_date}</li>
                            <li class="list-group-item"><strong>Genre : </strong>${listGenres}</li>
                            <li class="list-group-item"><strong>Companies : </strong>${movie.production_companies[0].name}</li>
                            <li class="list-group-item"><strong>Language : </strong>${movie.original_language}</li>
                            <li class="list-group-item"><strong>Overview : </strong>${movie.overview}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
    
    const showResponseMessage = ( message = "Your Internet Connection Lost") => {
        alert(message);
    };

    //form search
    const searchForm = document.querySelector("form");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        getMovie(`https://api.themoviedb.org/3/search/movie?api_key=52d1755103928c6172453f23097460d2&query=${inputSearch.value}&page=1`);
    });

    window.onload = () =>{
        getTrendingMovie(urlTrendingMovieWeek);
    };

    buttonPopular.addEventListener("click", ()=>{
        getMovie(urlPopularMovie)
    });

    buttonRating.addEventListener("click", ()=>{
        getMovie(urlTopRateMovie)
    });
    
    buttonUpcoming.addEventListener("click", ()=>{
        getMovie(urlUpComing)
    });

}

export default main;