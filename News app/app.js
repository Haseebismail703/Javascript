
let getdiv = document.getElementById('getdiv')
let getnews1 = document.getElementById('news')


let getnews = function(){

    fetch(`https://newsapi.org/v2/everything?q=${getnews1.value}&2023-09-12&sortBy=publishedAt&apiKey=2f318f53ebc544c9a2b7931b26b3ddcb`)



    .then(data => data.json())
    .then(data =>{
        for(let i=0; i<data.articles.length; i++ ){
            getdiv.innerHTML +=`
            
            <div class="card m-3" style="width: 18rem;">
            <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body m-5">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
    
        }
    }
    )
    
    .catch(err => console.log(err))
    
    

    
}


