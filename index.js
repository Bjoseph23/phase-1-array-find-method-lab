// code your solution here
const record = [
    { year:"2015", result: "w"},
    { year:"2014", result: "N/A"},
    { year:"2013", result: "L"},
]
const superbowlWin = (record) => {
    const winningYear = record.find(
      (element) => element.result.toLowerCase() === "w"
    );
    if (winningYear) {
      return winningYear.year; 
    } else {
      return undefined;
    }
  };