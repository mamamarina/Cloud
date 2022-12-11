//toggle active class

let items = document.getElementsByClassName('aside-navbar__link');

for (let i = 0; i < items.length; i++) {

  items[i].addEventListener('click', function() {  

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active'); 
    }
    this.classList.add('active');
  })
}


//create a path

let elements = document.getElementsByClassName('aside-navbar__link'),
    pathDynamic = document.getElementById('path'),
    pathStatic = ' / Cloud Source to Target Mapping';
    
for (let element of elements) {
  element.addEventListener("click", createPath);
}

function createPath() {      
  pathDynamic.innerHTML = `<span>${this.innerHTML}</span>` + '&nbsp;' + pathStatic ;
}


	







