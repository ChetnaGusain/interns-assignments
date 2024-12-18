const fs = require("fs");

const words = fs.readFileSync("words.txt", "utf-8").split("\n");

const getDistance = (a, b) => {
  const dp = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
};

const findSimilarWords = (input) => {
  const results = words
    .map(word => ({ word, distance: getDistance(input, word) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);
  console.log("Suggestions:", results.map(({ word }) => word).join(", ") || "No match found!");
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askUser() {
  readline.question("Enter a word (type 'exit' to quit): ", (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Goodbye!");
      readline.close(); 
    } else {
      findSimilarWords(input); 
      askUser(); 
    }
  });
}

askUser();
