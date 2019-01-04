// initial
const INIT = (()=>{
  const field = getSelector('.field');
  const grid = getSelector('.grid', field);
  const enemy_ships = getSelector('.enemy_ships', field);
  const img = getSelectorAll('.ships', field)


  const grid_w = grid.clientWidth;
  const grid_h = grid.clientHeight;

  const cell = 100;
  const enemys = array_fill_random(20, 1, 100);

  for (let i = 0; i < cell; i++) {
    const li = document.createElement('li');
    const l = document.createElement('li');
    li.classList.add('cell')
    l.classList.add('cell')

    enemys.forEach((elem)=>{
      if(elem === i) {
        l.classList.add('enemys')
      }
    })
  
    enemy_ships.appendChild(l)
    
    li.setAttribute("id", i)
    li.setAttribute("ondrop", "drop(event)")
    li.setAttribute("ondragover", "allowDrop(event)")
    grid.appendChild(li)
  }

  return {
    imgs: () => img
  }
})();

const imgs = INIT.imgs()