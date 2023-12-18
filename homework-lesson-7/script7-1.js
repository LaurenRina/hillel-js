function getArguments(arg) {
  return arg;
}

function logArguments(fn) {
  return (...args) => {
    console.log(args);
    fn(...args);
  };
}

const loggedArguments = logArguments(getArguments);
loggedArguments(1, 2, "test");

function validate(fn, validator) {
  return (...args) => {
    for (const arg of args) {
      if (arg < validator) {
        throw new Error("Validation failed");
      }
    }
    console.log(args);
    fn(...args);
  };
}

const validatedArguments = validate(getArguments, 10);
validatedArguments(11, 35);

function getData() {
  const data = prompt("Enter your data:");
  if (!data) {
    throw new Error("Data cannot be empty");
  }
  return data;
}

function retry(fn, maxAttempts) {
  return (...args) => {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const data = fn(...args);
        console.log(`Correct: ${data}`);
        return data;
      } catch (error) {
        console.warn(`Retry attempt ${attempt}/${maxAttempts}`);
      }
    }
    throw new Error(`Max retry attempts (${maxAttempts}) reached`);
  };
}

const checkData = retry(getData, 3);

try {
  checkData();
} catch (error) {
  console.error("Error:", error.message);
}

