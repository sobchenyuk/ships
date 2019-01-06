// shots

((map)=>{

  const field = getSelector('.field');
  const cols = getSelectorAll('.enemy_ships li', field);
  const cell = getSelectorAll('.grid li', field);
  let storage = [];

  const hit_record = rand => {

    if(array_matches(storage, rand) < 0) {
      const result = array_matches(map, rand);
      if(result >= 0) {
        cell[rand].classList.add('hit')
      } else {
        cell[rand].classList.add('slip')
      }
      storage.push(rand)
    } else {
      // hit_record(rand)
    }

    // console.log(storage)
  }

  const volley = (elem, className) => {
    elem.classList.add(className);
    setTimeout(() => hit_record(rand(1, 99)), 500);
  }

  const shots = (e) => {
    const target = e.target;
    if(getSelector('#start').hasAttribute('disabled')) {
      if(!target.classList.contains('slip') && !target.classList.contains('hit')) {
        target.classList.contains('enemys') ? volley(target, 'hit') : volley(target, 'slip')
      }
    }
  }

  [].forEach.call(cols, (col) => {
    col.addEventListener('click', shots, false);
  });

  
})(StartGame.map())