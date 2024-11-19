let ourObject = {
    "name": "casey",
    "profession": "PhD Student",
    "age": 30,
    "pets":[{"name":"Boots", "type":"dog", "age": 9, "unit": "years"}, {"name":"Marty", "type": "cat", "age":5, "unit": "months"}]
}

console.log(ourObject);

let myData = {};

function fetchData(){
fetch('https://corsproxy.io/?https://xkcd.com/614/info.0.json')
    .then(res =>{
        console.log(res)
        if(res.ok){

            return res.json();
        }else{
            console.log(res);
        }
    })
    .then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.year;
    })
    .catch(error => {console.log(error)})
}
fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})

console.log(myData);

let name = "Casey";

// let myString = "hello " + name + "!";
// let myString = `hello ${name} !`;