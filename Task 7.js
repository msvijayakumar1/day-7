let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();

//request.responseType = "json"; //data format

request.onload = function(){
    let data = JSON.parse(request.response);
    console.log(data);   // (250)......

//a
var region = data.filter((element)=>{

    return element.region === "Africa";
})
console.log(region);  // (59)......


//b
var population = data.filter((element)=>{
    
    return element.population < 200000;
})
console.log(population); // (62).......


//c

data.forEach(element => {
    console.log('    NAME     :',element.name);  
    console.log("    CAPITAL     :",element.capital);
    console.log("    FLAG  :",element.flag);  
});


//d
let popTotal =[];
data.forEach(element => {
    popTotal.push(element.population);
     })

let total = popTotal.reduce((accu,cur)=>{
  return accu+cur;
})
console.log(total)     //7777721563*/

}