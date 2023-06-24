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


// var secEle=document.querySelector('.list-group-item:nth-child(2)');

// secEle.style.color='green';

// var thirdEle=document.querySelector('.list-group-item:nth-child(3)');

// thirdEle.innerText='';


// var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#ccc'
// }





// TRAVERSING THE DOM 
 var item =document.querySelector('#items');

 console.log(item.parentNode);
 item.parentNode.style.backgroundColor='#f4f4';

 console.log(item.lastElementChild);
 item.lastElementChild.innerText='hi 4';

console.log(item.lastChild);

console.log(item.firstElementChild);
item.firstElementChild.style.color='#ccc';

console.log(item.nextSibling);

console.log(item.nextElementSibling);

console.log(item.previousElementSibling);
item.previousElementSibling.style.borderBottom='solid 3px'


//creating and inserting an element

var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','newly created div');
 
//creating a text node
var newDivText=document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

//adding this to the header part
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';