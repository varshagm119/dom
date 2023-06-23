let headerTitle=document.getElementById('header-title');
headerTitle.style.borderBottom='solid 3px #000';



var Title= document.getElementsByClassName('title');
Title[0].style.fontWeight=900;


var li= document.getElementsByClassName('list-group-item');
li[2].style.backgroundColor='green';
li[0].style.fontWeight=900;
li[1].style.fontWeight=900;
li[2].style.fontWeight=900;
li[3].style.fontWeight=900;

var ite = document.getElementsByTagName('li');
console.log(ite);
for(var i=0;i<ite.length;i++){
    ite[i].style.backgroundColor='grey'
}