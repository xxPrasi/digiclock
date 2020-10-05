
function clock(){
/*functions from Date to get value into each variable*/	
const fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();

/*setting every number to two digits*/
if(hours < 10 ){
	hours = "0" + hours ;
}
if(hours > 12){
	hours = "0" + (hours - 12);/*sets clock to 12 hour format*/
}
if(mins < 10 ){
	mins = "0" + mins ;
}
if(secs < 10 ){
	secs = "0" + secs ;
}
/*assigning values to html elements by id name*/
document.getElementById('hour').innerHTML = hours + ':'; 
document.getElementById('minute').innerHTML = mins + ':'; 
document.getElementById('second').innerHTML = secs; 

/*setting array to access month name values as js only gives numeric value using default functions*/
var monthName = ["January", "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
var month = monthName[(fullDate.getMonth())];
/*setting array to access weekday name values as js only gives numeric value using default functions*/
var dayName = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
var day = dayName[(fullDate.getDay())];
/*variable equaled display to full date of current day*/
var datetoday = fullDate.getDate()+' '+ month +' '+ fullDate.getFullYear() +' , '+ day ;
document.getElementById ('datetoday').innerHTML = datetoday; 
}
/*updates whole function each 0.1 second(i.e. 100 ms)*/
setInterval(clock, 100);

