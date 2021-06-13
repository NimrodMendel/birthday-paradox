function chaneByNumberOfRuns(numberOfPeople, numberOfRuns) {
  let successCounter = 0;

  for (let i = 0; i < numberOfRuns; i++) {
    const dates = populateArray(numberOfPeople);

    if (hasDuplicates(dates) === true) {
      successCounter++;
    }
  }

  return successCounter / numberOfRuns;
}

function chanceByAccurracy(numberOfPeople, accurracy) {
  let res;
  let runs = 1;

  while (true) {
    let chanceByCurrentRuns = chaneByNumberOfRuns(numberOfPeople, runs);
    let chanceByProceedingRuns = chaneByNumberOfRuns(numberOfPeople, runs + 1);
    let diff = Math.abs(chanceByCurrentRuns - chanceByProceedingRuns);

    if (diff <= accurracy && diff > 0 && diff < 1) {
      res = chanceByProceedingRuns;
      break;
    }
    runs++;
  }
  return res;
}

function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        arr[i].getDate() === arr[j].getDate() &&
        arr[i].getMonth() === arr[j].getMonth()
      ) {
        return true;
      }
    }
  }
  return false;
}

function generateDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function populateArray(size) {
  let datesArray = new Array(size);
  let startDate = new Date(1970, 0, 1);
  let endDate = new Date();

  for (let i = 0; i < size; i++) {
    datesArray[i] = generateDate(startDate, endDate);
  }

  return datesArray;
}

/************** DRIVER CODE ******************* */

people = 23;
runs = 500;
accurracy = 0.001;

chanceByRuns = chaneByNumberOfRuns(people, runs);
chanceAccurracy = chanceByAccurracy(people, accurracy);

console.log(
  `Given ${people} people, the chance of a shared birthday is ${chanceByRuns.toPrecision(
    3
  )}`
);
console.log(
  `Given ${people} people, the chance of a shared birthday is ${chanceAccurracy.toPrecision(
    3
  )}`
);
