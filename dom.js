// let headerTitle=document.getElementById('header-title');
// headerTitle.style.borderBottom='solid 3px';



// var Title= document.getElementsByClassName('title');
// Title[0].style.fontWeight=900;


// var li= document.getElementsByClassName('list-group-item');
// li[2].style.backgroundColor='green';
// li[0].style.fontWeight=900;
// li[1].style.fontWeight=900;
// li[2].style.fontWeight=900;
// li[3].style.fontWeight=900;

// var ite = document.getElementsByTagName('li');
// console.log(ite);
// for(var i=0;i<ite.length;i++){
//     ite[i].style.backgroundColor='grey'
// }


var secEle=document.querySelector('.list-group-item:nth-child(2)');

secEle.style.color='green';

var thirdEle=document.querySelector('.list-group-item:nth-child(3)');

thirdEle.innerText='';


var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#ccc'
}