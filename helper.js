// get selector & selector all
const getSelector = (selector, parent = false) => parent ? parent.querySelector(selector) : document.querySelector(selector);
const getSelectorAll = (selector_all, parent = false) => parent ? parent.querySelectorAll(selector_all) : document.querySelectorAll(selector_all);


// функция генерации случайных чисед
function rand(min, max)
{
	max = max || false;
  min = min || 255;
  
	if (max)
	{
		return Math.floor(Math.random()*(max-min+1))+min;
	}
	else
	{
		return Math.floor(Math.random()*(min+1));
	}
}

// функция генерации массива заполненного случайными числами
function array_fill_random(limit, min, max)
{
	limit = parseInt(limit);
	min = min || 0;
	max = max || 255;
	
	arr = new Array(limit);
	
	for (var i=0; i<limit; i++)
	{
		arr[i] = rand(min, max);
	}
	
	return arr;
}

// найти совпадения в массиве
function array_matches( array, s ) {
  for( var i = 0; i < array.length; ++i )
	if(array[i] === s) {
		return i;
	}
  return -1;
}