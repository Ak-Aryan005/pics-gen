// const key=`7rVt8qN3nfTvtTZ9a6E0knuVklEjskSqATyZ0LPMCSc`
// const url=`<https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next"`

// const merge=`https://api.unsplash.com/search/photos?page=3&query=office&client_id=7rVt8qN3nfTvtTZ9a6E0knuVklEjskSqATyZ0LPMCSc`

// let page=1;
// let keyword=''
// let mg=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=7rVt8qN3nfTvtTZ9a6E0knuVklEjskSqATyZ0LPMCSc`
// let it=document.querySelector("#txt");
// let btn=document.querySelector("#bt");
// let res=document.querySelector("#result");

// btn.addEventListener("click",()=> picgen())


// async function picgen() {
//     let response=await fetch(mg)
//     let get= await response.json()
//     console.log(get)
//     let pbox=document.createElement('div')
//     pbox.id='dv';
//     res.appendChild(pbox);
//     it.value=`${keyword}`
//     const results=get.results;
//     results.map((result)=>{
//         let pc=document.createElement('img');
//         pc.id='ig';
//         pbox.appendChild(pc)
//         pc.src=results.urls.small;
//         const imagelink=document.createElement('a');
//         imagelink.href=result.links.html;
//         imagelink.target   ='_blank'
//         imagelink.appendChild(pc)
//         pbox.appendChild(imagelink)
//     })
 
// }




const key = `7rVt8qN3nfTvtTZ9a6E0knuVklEjskSqATyZ0LPMCSc`;
let page = 1;
let keyword = '';
let it = document.querySelector("#txt");
let btn = document.querySelector("#bt");
let res = document.querySelector("#result");
let np=document.querySelector("#nb");

btn.addEventListener("click", () =>{
    res.innerHTML=""
    picgen()
} );

async function picgen() {
    keyword = it.value; // Get the keyword from the input field
    let mg = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;

    try {
        let response = await fetch(mg);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let get = await response.json();
        console.log(get);
        if(page===1){
        // Clear previous results
        res.innerHTML = '';
        }
        let pbox = document.createElement('div');
        pbox.id = 'dv';
        res.appendChild(pbox);

        const results = get.results;
        results.forEach((result) => {
            let pc = document.createElement('img');
            pc.id = 'ig';
            pc.src = result.urls.small; // Corrected to result.urls.small
            const imagelink = document.createElement('a');
            imagelink.href = result.links.html;
            imagelink.target = '_blank';
            imagelink.appendChild(pc);
            pbox.appendChild(imagelink);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
    np.style.display='block'   
}

np.addEventListener('click',()=>{
    page++;
    console.log(page)
    if(it.value===""){
        // page++
        pictgen()
    } else{
        picgen()

    }
})




async function pictgen() {
    let mg=`https://api.unsplash.com/search/photos?page=${page}&query=Avengers&client_id=${key}&per_page=12`
    try {
        let response = await fetch(mg);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let get = await response.json();
        console.log(get);
        if(page===1){
        // Clear previous results
        res.innerHTML = '';
        }
        let pbox = document.createElement('div');
        pbox.id = 'dv';
        res.appendChild(pbox);

        const results = get.results;
        results.forEach((result) => {
            let pc = document.createElement('img');
            pc.id = 'ig';
            pc.src = result.urls.small; // Corrected to result.urls.small
            const imagelink = document.createElement('a');
            imagelink.href = result.links.html;
            imagelink.target = '_blank';
            imagelink.appendChild(pc);
            pbox.appendChild(imagelink);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
    np.style.display='block'   
}

pictgen()