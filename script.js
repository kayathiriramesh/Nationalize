let div=document.createElement("div");
div.setAttribute("class","main");

let content=document.createElement("div");
content.setAttribute("class","content");

//for create heading
let h1=document.createElement("h1");
h1.setAttribute("class","heading");
h1.innerHTML="Search For The Nationality Based On The Name";

//for create input box
let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main1");
input.setAttribute("placeholder","Enter the Name");

// for create search button
let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="400px";
button.style.marginTop="20px";
button.addEventListener("click",foo);

var names=document.createElement("div");
names.setAttribute("id","names");
let br1=document.createElement("br");
let countryID1=document.createElement("div");
countryID1.setAttribute("id","countrtyID1");
let probability1=document.createElement("div");
probability1.setAttribute("id","probability1");
let br2=document.createElement("br");
let countryID2=document.createElement("div");
countryID2.setAttribute("id","countrtyID2");
let probability2=document.createElement("div");
probability2.setAttribute("id","probability2");

content.append(h1,input,button,names,br1,countryID1,probability1,br2,countryID2,probability2);

div.append(content);
document.body.append(div);


async function foo(){
try {
let name1=document.getElementById("main1").value;
console.log(name1);
let result=await fetch(`https://api.nationalize.io/?name=${name1}`);
let result1= await result.json();
console.log(result1);
console.log(result1.name);
names.innerHTML=`Name: ${""} <mark>${result1.name}</mark>`;

// for print top 1st country details
console.log(result1.country[0].country_id);
countryID1.innerHTML=`Name Of The Top First Country ID: ${""} ${result1.country[0].country_id}`;
console.log(result1.country[0].probability);
probability1.innerHTML=`Top First Probability Value: ${""} ${result1.country[0].probability}`;

//for print top 2nd country details
console.log(result1.country[1].country_id);
countryID2.innerHTML=`Name oF The Top Second Country ID: ${""} ${result1.country[1].country_id}`;
console.log(result1.country[1].probability);
probability2.innerHTML=`Top Second Probability Value: ${""} ${result1.country[1].probability}`;

} catch (error) {
  console.log(error);
}
}