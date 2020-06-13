function openNav() {
  document.getElementById("mySidebar").classList.toggle('wide');
  document.querySelector('.openbtn').classList.toggle('open');
}

function closeNav() {
  document.getElementById("mySidebar").classList.toggle('wide');
  document.querySelector('.openbtn').classList.toggle('open');
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

document.querySelector('#reload').addEventListener('click', ()=>{location.reload();});

document.querySelector('#discard').addEventListener('click', ()=>{
  var e = document.querySelector('.model-container');
  var child = e.lastElementChild;
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
});
