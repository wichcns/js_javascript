//console.log("Hello wich")
//console.log("Hello wich")
//console.log("Hello wich")
//alert("ยินดีต้อนรับ")
// var name = "wichcns"
// console.log(name)
//  name = "boom"
//console.log(name)

//alert(name)
//name = "kio"
//age = 15

//console.log("sirawich" + " " + "tankruad")
//alert("sirawich" + " " + "tankruad")

//console.log(2*(2+2))
// number = 2540
// name   = "wich"
// lastname = "cns"
// age    = 25

//console.log(name + " " + lastname + " " + age + " " + number )
//alert("คุณชื่ออะไร")

//console.log(number)
//Math.floor(Math.random() * 10);
//console.log(Math.floor(Math.random() * 100));
//let name = prompt("กรอกชื่อก่อนเลือกสุ่ม : ")
//console.log(name)
// document.getElementById("names").innerText = name ;
// let number = prompt("กรอกเลขที่ต้องการ : ")
// console.log(number)
// console.log(Math.floor(Math.random() * 100));
// document.getElementById("result").innerHTML = Math.floor(Math.random() * 100);
//console.log('4' === 'Henow');

//  let age = prompt("กรุณากรอกอายุของคุณ")
//  if(age > 18){
//       document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/n0OIhBxg-xg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
//  }else{
//    if(age < 20){
//    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0wj3yD2Mqkg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
//          }
//    if(age < 18){
//       document.getElementById("content").innerText = "คุณยังอายุน้อยเกินไปที่จะได้รับชม";
//          }
// }

// for(var counter = 0; counter < 5; counter++){
//    console.log("hello" + counter)
// }

// let qrt = prompt("จำนวนสินค้า")
// let sum = 0
// for(var i = 1; i <= qrt; i++)
// {
//    let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
//    sum = sum + parseInt(item_price)
//    document.getElementById("price-list").innerHTML +=
//    "รายการสินค้าชิ้นที่"+ i + " : " +item_price + "บาท" + "<br>"

// }
// document.getElementById("result").innerHTML = "ราคารวม" + sum + "บาท"

// let round = prompt("คุณจะเล่นทั้งหมดกี่่รอบ ?");
// for (var i = 0; i < round; i++) {
//    var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย !!!!")
//    if(Math.floor(Math.random() *10) <=4){
//       //หัว
//       random_answer = "หัว"
//    }else{
//       //ก้อย
//       random_answer = "ก้อย"
//    }
//    if(answer == random_answer){
//       alert("ตอบถูก ! ได้ไง")
//    }else{
//       alert("ตอบผิดแล้วนะ !!")
//    }
//    console.log(random_answer + ":" + answer)
// }
//การบ้าน แปลงหน่วยองศา
// function toCelsius(fahrenheit)
// {
  
//   let valur = (fahrenheit - 32) * 5 / 9
//   return valur.toFixed(2) + "°C";
// }
// function display(elementId, valur)
// {
//    document.getElementById(elementId).innerHTML = valur;
// }
// function toFahrenhei(Celsius)
// {
  
//   let valur = (Celsius * 9) / 5 + 32
//   return valur.toFixed(2) + "°F";
// }
// alert(toCelsius(150))
// display("toCelsius",toCelsius(150))
// alert(toFahrenhei(65))
// display("toFahrenhei",toFahrenhei(65))
// function index(UserName,userLastnmae)
// {
   
//    return "Hi" + " " + UserName + " " + userLastnmae
// }
// let userInput = prompt("Input your name :")
// alert(index(userInput,"Bnagsaen"))

function toCelsius(fahrenheit)
{
  
  let valur = (fahrenheit - 32) * 5 / 9
  return valur.toFixed(2) + "°C";
}
function display(elementId, valur)
{
   document.getElementById(elementId).innerHTML = "<b>"+valur+"</b>";
}
function toFahrenhei(Celsius)
{
  
  let valur = (Celsius * 9) / 5 + 32
  return valur.toFixed(2) + "°F";
}

function toCelsiusProgram(valur)
{
   alert(toCelsius(valur))
}
function toFahrenheiProgram(valur)
{
  alert(toFahrenhei(valur))
}