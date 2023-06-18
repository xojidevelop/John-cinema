var elActiveBtns = document.querySelectorAll('.carousel__btn_active')
var elMovieList = document.querySelector('.movie__list')

for (var item of elActiveBtns) {
    item.addEventListener('click', (e)=>{
        for (var inner of elActiveBtns) {
            inner.classList.remove('my__active')
        }
        e.target.add('my__active')
    })
}
// var filData = movies.slice(0, 50)

// for (var item of filData){
//     var newLi = document.createElement('li')
//     newLi.innerHTML = `
//     <div class="card" style="width: 18rem;">
//   <img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${item.Title}</h5>
//     <p class="card-text">${item.fulltitle}</p>
//     <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-primary">Watch video</a>
//   </div>
// </div>`
//     console.log(item );
//     elMovieList.appendChild(newLi)
// }