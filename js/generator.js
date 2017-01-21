const rand = (l, h) => Math.floor((h-l+1)*Math.random())+Math.floor(l);

window.getCombination = (letters, min, max) => {
  let output = [];
  
  let length = rand(min, max);

  for(let i = 0; i < length; i++) {
    output.push(letters[rand(0, letters.length - 1)]);
  }

  return output.join('');
};


