const calcAverage  = (a,b,c) => (a+b+c)/3;

let  avgDolphins1 = (calcAverage (44,23,71));
let  avgKoalas1 =  (calcAverage (65,454,49));

console.log (avgDolphins1,avgKoalas1)

const checkWinner = function checkWinner (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2*avgKoalas){
    console.log(`Dolphin win (${avgDolphins} Vs.${avgKoalas} )`);

  } else if (avgKoalas  >= 2*avgDolphins ){
    console.log(`Koalas win (${avgKoalas} Vs.${avgDolphins} )`);

} else {
console.log ('No Team Wins');
} 
};
checkWinner (avgDolphins1, avgKoalas1)

avgDolphins1 = (calcAverage (85, 54, 41));
avgKoalas1 =  (calcAverage (23, 34, 27));

console.log (avgDolphins1, avgKoalas1);
checkWinner (avgDolphins1, avgKoalas1);

