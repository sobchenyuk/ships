// start game

const StartGame = (()=>{

  const run = getSelector('#start');
  const person = getSelector('.person');
  const cell = getSelectorAll('.cell', person);
  const grid = getSelector('.grid', person)
  let MAP = [];
  let a = 0;

  const getMap = () => {
    cell.forEach((elem, i)=>{
      if(elem.classList.contains('their')) {
        MAP[a] =  i; 
        a++
      } 
    })

    if(MAP.length < 19) {
      MAP = [];
      grid.classList.add('false');
    } else {
        const cell = getSelectorAll('.cell', person);
        if(grid.classList.contains('false')) {
          grid.classList.remove('false');
        }
  
        cell.forEach(elem => {
          elem.removeAttribute('ondrop')
          elem.removeAttribute('ondragover')

          const Child = elem.firstChild

          if(!!Child) {
            Child.setAttribute('draggable', 'false')
            Child.removeAttribute('ondragstart')
          }
        })
  
        run.setAttribute('disabled', '');

        getSelector('.harbor').style.display = 'none';
    }
  }

  run.addEventListener('click', getMap, false);

  return {
    map: () => MAP
  }


})();