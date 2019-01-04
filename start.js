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

      cell.forEach((elem, i)=>{
        elem.removeAttribute('ondrop')
        elem.removeAttribute('ondragover')
        if(elem.classList.contains('their')) {
          elem.classList.remove('their');
        } 
      })

      run.setAttribute('disabled', '');
    }
  }

  run.addEventListener('click', getMap, false);


})();