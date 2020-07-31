var i = 0;
var txt = 'There is not much about me to say, but I am a part-time web developer & full-time fun maker and if you have any suggestions regarding my website then kindly contact me. My Email is sonupalak47@gmail.com. Thank you ! ';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}