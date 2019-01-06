// shots

(()=>{

  const field = getSelector('.field');
  const cols = getSelectorAll('.enemy_ships li', field);

  const volley = (elem, className) => {
    elem.classList.add(className);
    setTimeout(() => {
    }, 500);
  }

  const shots = (e) => {
    const target = e.target;
    target.classList.contains('enemys') ? volley(target, 'hit') : volley(target, 'slip')
  }

  [].forEach.call(cols, (col) => {
    col.addEventListener('click', shots, false);
  });

})()