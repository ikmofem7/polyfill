const shuffle = (array) => {
  const shuffledArray = [...array];

  for (let i = 0; i < array.length; i++) {
    const randomNumber = Math.floor(Math.random() * array.length + 1);
    [shuffledArray[i], shuffledArray[randomNumber]] = [
      shuffledArray[randomNumber],
      shuffledArray[i],
    ];
  }
  return shuffledArray;
};

// Sample input
const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Original array:", sampleArray);

// Shuffle the array
const shuffledArray = shuffle(sampleArray);

console.log("Shuffled array:", shuffledArray);
