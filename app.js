// Chapter 31-34
// Q.1

var date = new Date()

document.write(date)

// Q.2
alert("Current month : "+date.toString().slice(3,8));

// Q.3
var date2 = new Date()
var arrdate = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var num3 = arrdate[date2.getDay()]
alert("Today is "+num3.slice(0,3));

// Q.4
var userInput = prompt("Enter Days Name")

var arrdate = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"]


if(arrdate.slice(0,1) == userInput || arrdate.slice(6,7) == userInput){
    document.write("<h1 style= 'color: blue;' ;>It's Fun day : </h1>" + userInput);
}else{
    document.write("<h1>It's Not fun day</h1>");
}

//Q.5

let Currentdate = new Date();

let dayOfMonth = Currentdate.getDate();

if(dayOfMonth < 16 ){
    document.write("<h1>First fifteen days of the month</h1>")
}else{
    document.write("<h1>Last Day of the month</h1>")
}

