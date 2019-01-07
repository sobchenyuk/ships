// initial
const INIT = (()=>{
  const field = getSelector('.field');
  const grid = getSelector('.grid', field);
  const enemy_ships = getSelector('.enemy_ships', field);
  const img = getSelectorAll('.ships', field)
  const harbor_ships = getSelector('.harbor_ships', field)


  const grid_w = grid.clientWidth;
  const grid_h = grid.clientHeight;

  const cell = 100;
  let s = 0;
  let c = 0;

  const drawing_enemies = () => {
    const enemys = array_fill_random(20, 0, 100);
    let summ = 0;

    if(enemys.length < 20) {
      drawing_enemies()
    } else {
      for (let i = 0; i < cell; i++) {
        enemys.forEach((elem, index)=>{
          if(elem === i) {
            summ = s;
            s++
          }
        })
      } 

      if (summ > 19) {
        summ = 0;
        drawing_enemies()
      } else {
        const ship = summ+1;
        // console.log(summ)
        for (let i = 0; i < cell; i++) {
          const li = document.createElement('li');
          const l = document.createElement('li');
          li.classList.add('cell')
          l.classList.add('cell')
  
          enemys.forEach((elem, index)=>{
            if(elem === i) {
              l.classList.add('enemys')
              l.innerHTML = c;
              c++
            }
          })
          
          enemy_ships.appendChild(l)
          
          li.setAttribute("id", i)
          li.setAttribute("ondrop", "drop(event)")
          li.setAttribute("ondragover", "allowDrop(event)")
          grid.appendChild(li)
        } 

        for (let i = 0; i < ship; i++) {
          const img = document.createElement('img');
          img.src="s.png"
          img.classList.add('ships')
          img.setAttribute("id", `${i+1}`)
          img.setAttribute("draggable", "true")
          img.setAttribute("ondragstart", "drag(event)")

          harbor_ships.appendChild(img)
        }
      }
    }



  }

  drawing_enemies()

  return {
    imgs: () => img
  }
})();

const imgs = INIT.imgs()