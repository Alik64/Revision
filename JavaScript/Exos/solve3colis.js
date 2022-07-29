function solve(weight0, weight1, weight2) {
  // if(weight0 || weight1 || weight2 <10 || weight0 || weight1 || weight2 > 200 ){
  //     console.log('error')
  // }
  let arr = [weight0, weight1, weight2];
  const max = Math.max(...arr);

  const index = arr.indexOf(max);
  console.log("result : ", index);
}
solve(85, 100, 90);
