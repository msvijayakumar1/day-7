//Q.no.1(e)

let request = new XMLHttpRequest();
//request.open("GET","https://restcountries.com/v3.1/all",true);
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
request.send();

//request.responseType = "json"; //data format

request.onload = function(){
    let data = JSON.parse(request.response);
    console.log(data);   // (250)......


let currencies = data.filter((element)=>{
    
    return element.currencies[0].code =='EUR';
})
console.log(currencies); // (35).......
}