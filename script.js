alert("Enter the value of a")
let a = prompt("enter the number")
a = Number.parseInt(a)
alert("you entered a type of " + (typeof a))
let tru = confirm("do you want to write it on your page")
if (tru){
document.write(a)  
}
else {
document.write("please allow me to write your number here")  
}