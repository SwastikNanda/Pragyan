const url="https://opentdb.com/api.php?amount=10";
 // API for get requests
 let fetchRes = fetch(url);
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d);
            let da=JSON.stringify(d);
            // document.querySelector("#ques").innerHTML=da; 
            let dada=JSON.parse(da);
            document.querySelector("#ques").innerHTML=dada.results[0].question;      
        })
