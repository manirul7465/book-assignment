// ------search-field-----\\
const searchbook=()=>{
    const searchField=document.getElementById("search-field");
    const firstErrorDiv= document.getElementById('empty-error');
    const searchText=searchField.value; 
    
  //  ------empty error massage-handling---\\
    if (searchField.value==='') {
      firstErrorDiv.innerHTML=`<h1>please input <span class="fw-bold">Book Name</span></h1>`;
    }

    searchField.value='';
    
    // -------api----\\
    const url=`https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data))
 }
     
      //  ----------display result------\\

const displaySearchResult=docs=>{

  // ----book length---\\
  const bookdocs=docs.docs;
  document.getElementById('length-books').innerHTML=`<h1>Total Books:<span class="fw-bold">${docs.numFound}</span></h1>`;

    const searchResult=document.getElementById('search-result');

    // -----ERROR HANDLING-----\\
    const errorDiv= document.getElementById('error');
    if(bookdocs.length === 0){
      errorDiv.innerHTML = `<h2>Sorry!! <span class="fw-bold">NOT FOUND</span></h2>`;
  }
  else{
    errorDiv.innerText = '';
  }
  // -------forEach-----\\
    bookdocs.forEach(doc => {
        // ----- add-class-----\\
    const div=document.createElement('div');
        div.classList.add('col');

        // --------inner html-----\\
        div.innerHTML=`
          <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h4><span class="fw-bold">BookName</span>:${doc.title}</h4>
            <h4><span class="fw-bold">Author-Name</span>:${doc.author_name}</h4>
            <h4><span class="fw-bold">Book-Publisher</span>:${doc.publisher}</h4>
            <h4><span class="fw-bold">Publish-Date</span>:${doc.publish_date}</h4>
            <h4><span class="fw-bold">First-Publish</span>:${doc.first_publish_year}</h4>
            </div>
          </div>
        
        `;
        searchResult.appendChild(div);
    })
}

// ================================END JS=========================================\\


