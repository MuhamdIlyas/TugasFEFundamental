class ItemMovie extends HTMLElement{
    connectedCallback(){
        this.path = this.getAttribute("path") || null;
        this.title = this.getAttribute("title") || null;
        this.release = this.getAttribute("release") || null;
        this.popularity = this.getAttribute("popularity") || null;
        this.overview = this.getAttribute("overview") || null;
        this.idMovie = this.getAttribute("id-movie") || null;

        this.innerHTML=`
        <div class="card">
        <img src="${this.path}" class="card-img-top" alt="Poster_path">
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.release}</li>
            <li class="list-group-item">${this.popularity}</li>
        </ul>
        <button type="button" class="btn btn-primary btn-sm modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieModal" data-id="${this.idMovie}">Get Details</button>
        </div>`;
    }
}

customElements.define("item-movie", ItemMovie);