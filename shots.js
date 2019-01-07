// shots

((map)=>{

  map = array_fill_random(20, 0, 100)

  const field = getSelector('.field');
  const cols = getSelectorAll('.enemy_ships li', field);
  const cell = getSelectorAll('.grid li', field);
  let storage = [];

  const new_random = random => {
    if(array_matches(storage, random) > 0) {
      new_random(rand(1, 99))
    } else {
      return random
    }
  }

  const hit_record = random => {

    const res = array_matches(storage, random); // возвращает позицию в MAP

    if(res < 0) { 
      const result = array_matches(map, random);
      if(result.length) {
        cell[random].classList.add('hit')
      } else {
        cell[random].classList.add('slip')
      }
      storage.push(random)
    } else {
      const number_cell = new_random(rand(1, 99))
      const result = array_matches(map, number_cell);

      if(result > 0) {
        cell[number_cell].classList.add('hit')
      } else {
        cell[number_cell].classList.add('slip')
      }

      storage.push(number_cell)
      console.log(storage)
      console.log(number_cell)
    }
  }

  const volley = (elem, className) => {
    elem.classList.add(className);
    setTimeout(() => hit_record(rand(1, 99)), 500);
  }

  const shots = (e) => {
    const target = e.target;
    // if(getSelector('#start').hasAttribute('disabled')) {
      if(!target.classList.contains('slip') && !target.classList.contains('hit')) {
        target.classList.contains('enemys') ? volley(target, 'hit') : volley(target, 'slip')
      }
    // }
  }

  [].forEach.call(cols, (col) => {
    col.addEventListener('click', shots, false);
  });

})(StartGame.map())
