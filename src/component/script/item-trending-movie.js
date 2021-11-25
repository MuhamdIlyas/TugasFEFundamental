class ItemTrendingMovie extends HTMLElement{
    connectedCallback(){
        this.path = this.getAttribute("path") || null;
        this.title = this.getAttribute("title") || null;
        this.release = this.getAttribute("release") || null;
        this.original_language = this.getAttribute("original_language") || null;
        this.overview = this.getAttribute("overview") || null;
        this.idMovie = this.getAttribute("id-movie") || null;

        this.innerHTML=`
        <div class="card">
        <img src="${this.path}" class="card-img-top" alt="Poster_path">
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
        </div>`
    }
}

customElements.define("item-trending-movie", ItemTrendingMovie);