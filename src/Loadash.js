import _ from 'loadash';

const sum=_.once((a=0,b=0)=> {
    return a+b;
  })
 
  
  console.log(sum(1, 2)); //3
  console.log(sum(2, 2));//3