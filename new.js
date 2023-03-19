const url="https://opentdb.com/api.php?amount=10";
// let data=fetch(url);
// console.log(data);

// let da;
 // API for get requests
 let fetchRes = fetch(url);
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d);
            let da=JSON.stringify(d);
            document.querySelector("#p1").innerHTML=da; 
            let dada=JSON.parse(da);
            document.querySelector("#p1").innerHTML=dada.results[0].question;      
        })

// let dada=JSON.parse(da);
// document.querySelector("#p1").innerHTML=dada[0].question;
        