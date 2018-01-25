function score(input) {

  if(validateInput(input)){
    let frame = 0;
    let totalScore = 0;
    const length = input.length;

    for (let i = 1; i < length; i += 2) {
      if (frame === 9) {
        if(validateLastFrame(input,i)){
          if (input[i - 1] === 10) {
            totalScore += input[i - 1] + input[i] + input[i + 1];
          } else if (input[i - 1] + input[i] === 10) {
            totalScore += input[i - 1] + input[i] + input[i + 1];
          } else {
            totalScore += input[i - 1] + input[i];
          }
        }
        else{
          return 'invalid input';
        }
      }
      else{
        if (input[i] + input[i - 1] === 10) {
          if(validateFrame(input,i)){
            const temp = input[i] + input[i - 1];
            totalScore += temp;
            totalScore += input[i + 1];
            frame += 1;
          }
          else return 'invalid input';
        } else if (input[i] === 10 && input[i - 1] !== 10) {
          if(validateFrame(input,i)){
            const temp = input[i - 1] + input[i] + input[i + 1];
            totalScore += temp;
            frame += 1;
          }
          else return 'invalid input';
        } else if (input[i - 1] === 10) {
          const temp = input[i - 1] + input[i] + input[i + 1];
          totalScore += temp;
          i -= 1;
          frame += 1;

        } else {
          if(validateFrame(input,i)){
            const temp = input[i] + input[i - 1];
            totalScore += temp;
            frame += 1;
          }
          else return 'invalid input';
        }
      }
    }

    return totalScore;
  }
  else return 'invalid input';
}

function validateInput(input){
  if(input.length < 10 || input.length > 21){
    return false;
  }
  else return true;
}

function validateFrame(input,index){
  if(input[index - 1] + input[index] > 10 || input[index - 1] < 0 || input[index < 0]){
    return false;
  }
  else return true;
}

function validateLastFrame(input, index){
  if(input[index - 1] < 0 || input[index] < 0){
    return false;
  }
  else if(input[index - 1] + input[index] === 10 || input[index - 1] === 10){
    if(input[index + 1] || input[index + 1] === 0 || input[index + 1] > 0){
      return true;
    }
  }
  else if(input[index - 1] + input[index] < 10){
    if(!input[index + 1]){
      return true;
    }
  }
  else return false;
}

module.exports = score;

console.log(score([10, 6, 3, 6, 3, 6, 3, 6, 3, -6, 3, 6, 3, 6, 3, 6, 3, 6, 3]));
