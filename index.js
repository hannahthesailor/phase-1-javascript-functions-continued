// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun());
  console.log(saturdayFun('bathe my dog'));

  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
    console.log(mondayWork());
    console,log(mondayWork('work from home'))
  }

  function wrapAdjective(symbol) {
    return function (adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  
  let result1 = wrapAdjective("*");
  let emphatic1 = result1("a hard worker");
  console.log(emphatic1);
  
  let result2 = wrapAdjective("||");
  let emphatic2 = result2("a dedicated programmer");
  console.log(emphatic2);