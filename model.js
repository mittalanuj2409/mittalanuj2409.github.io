$( function() {
  $( ".dataModel" ).draggable({
    containment: ".model-container"
  });
} );

function removeParent(element){
  element.parentElement.remove();
  linesUpdate();
}

function connectLine(id1, id2) {
  var model1 = document.getElementById(id1);
  var model2 = document.getElementById(id2);
  if (model1 !== null && model2 !== null){
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    var y1 = model1.offsetTop;
    var y2 = model2.offsetTop;
    var x1 = model1.offsetLeft;
    var x2 = model2.offsetLeft;
    element.setAttribute('x1', x1+70);
    element.setAttribute('x2', x2+70);
    element.setAttribute('y1', y1+60);
    element.setAttribute('y2', y2+60);
    element.setAttribute('style', "stroke:rgb(255,0,0);stroke-width:2");

    var svg = document.querySelector('svg');
    svg.appendChild(element);
  }

}

function linesUpdate() {
  var lines = document.querySelectorAll('line');
  if(lines !==null){
    lines.forEach((item, i) => {
      item.remove();
    });
  }

  connectLine('data-pull', 'data-cleanse');
  connectLine('data-cleanse', 'data-embed1');
  connectLine('data-embed1', 'data-dedup');
  connectLine('data-dedup', 'data-lm');
  connectLine('data-sm', 'data-jr');
  connectLine('data-lm', 'data-sm');
  connectLine('data-cleanse', 'data-embed2');
  connectLine('data-dedup', 'data-merge');
  connectLine('data-merge', 'data-check');
  connectLine('data-check', 'data-final');
}

function deleteOpt(item, e){
  console.log(item);
  var deleteIcon = document.createElement('span');
  deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteIcon.setAttribute('style', `position:absolute; left:${e.clientX}px; top:${e.clientY}px;`);
  document.querySelector('body').appendChild(deleteIcon);

  item.addEventListener('mouseleave', () => {
    deleteIcon.remove();
  });
}

var models = document.querySelectorAll(".dataModel");

linesUpdate();

models.forEach((item, i) => {
  item.addEventListener('mouseup', linesUpdate);
  item.addEventListener('mouseout', linesUpdate);
});


var rembtn = document.querySelectorAll('.rem');
rembtn.forEach((item, i) => {
  item.addEventListener('click', function(){removeParent(item.parentElement)});
});
