const billValue = 275;

//bill for 275

const tip = 
billValue >= 50 && billValue <=300 ? 
      console.log(
        `Due to the Bill Value of ${billValue}, the Tip charged @ 15% is ${
          billValue * (15 / 100)
        }`
      ): console.log(
        `Due to the Bill Value of ${billValue}, the Tip charged @ 20% is ${
          billValue * (20 / 100)
        }`
      );
// Task 2 for Bill Value of 275
console.log(
  `The bill was ${billValue}, the tip was ${
    billValue >= 50 && billValue <= 300
      ? billValue * (15 / 100)
      : billValue * (20 / 100)
  } and the total value is ${
    billValue +
    (billValue >= 50 && billValue <= 300
      ? billValue * (15 / 100)
      : billValue * (20 / 100))
  }`
);
// OUTPUT: The bill was 275, the tip was 41.25 and the total value is 316.25
