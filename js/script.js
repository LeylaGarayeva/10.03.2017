document.getElementById('basliq').innerHTML = "<b>Salam</b>";
document.getElementById('basliq').style.fontSize = '25px';


var p_ler = document.getElementsByClassName('text');
// console.log(p_ler);
p_ler[1].innerHTML = '<b>Salam</b>';
p_ler[2].innerHTML = '<b>Salam</b>';

p_ler[1].setAttribute('title', 'Salam ver');

var link = document.getElementById('link_to_google');

link.innerText = 'Facebook';

link.setAttribute('href', 'https://www.facebook.com/')
link.setAttribute('target', '_blank');
link.setAttribute('title', 'Facebook-a get');


// p_emnt.innerHTML = "<b>Salam</b>";

// p_emnt.style.color = "#ccc";
// p_emnt.style.fontSize = '25px';

// var p_lar = document.querySelectorAll('.header .logo img');
// p_lar[0].src = "img/linux.png";

// for (var i = 0; i < p_lar.length; i++) {
//     p_lar[i].src = "img/linux.png";
// }

// function changeColor(color, id) {
//     document.getElementById(id).style.color = color;
// }

// function sekliDeyis() {
//     var img = document.querySelectorAll('.header .logo img');
//     img[0].src = "img/linux.png";
// }

var click = true;

function sekliDeyis() {
    if (click) {
        document.getElementById('logo').setAttribute('src', 'img/linux.png');
        click = false;
    } else {
        document.getElementById('logo').setAttribute('src', 'img/logo1.png');
        click = true;
    }

}

function changeColor() {
    var element = document.getElementById('basliq')
    element.style.backgroundColor = '#ccc';
    element.style.padding = '15px 10px';
    element.style.width = '300px';
}