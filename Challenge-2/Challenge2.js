const fs = require("fs");

function solveArithmeticExpressions(inputFile, outputFile) {
  fs.readFile(inputFile, "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading the file:", err);
      return;
    }

    const expressions = data.split("\n").map(line => line.trim()).filter(line => line !== "");

    const results = expressions.map(expression => {
      const trimmedExpression = expression.replace("=", "").trim();

      try {
        const result = eval(trimmedExpression);  
        return `${expression} ${result}`;
      } catch (e) {
        return `${expression} Error in expression`;
      }
    });

    fs.writeFile(outputFile, results.join("\n"), "utf-8", (err) => {
      if (err) {
        console.log("Error writing the output file:", err);
      } else {
        console.log("Output written to", outputFile);
      }
    });
  });
}

solveArithmeticExpressions("input.txt", "output.txt");
