// drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");

  if(!ev.path[0].classList.contains('ships')) {
    ev.target.classList.add('their');
    ev.target.appendChild(document.getElementById(data));
  } else {
    ev.path[0].parentNode.classList.remove('over')
  }
  
}

function handleDragStart(e) {
  this.style.opacity = '0.4';
}

function handleDragEnter(e) {
  this.parentNode.classList.add('over');
}

function handleDragLeave(e) {
  this.parentNode.classList.remove('over');
}

function handleDragEnd(e) {

  [].forEach.call(imgs, function(img) {
    if(img.hasAttribute('style')) {
      img.removeAttribute('style');
    }
  });
}

[].forEach.call(imgs, function(img) {
  img.addEventListener('dragstart', handleDragStart, false);
  img.addEventListener('dragenter', handleDragEnter, false);
  img.addEventListener('dragleave', handleDragLeave, false);
  img.addEventListener('dragend', handleDragEnd, false);
})