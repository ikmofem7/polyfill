class PromiseScheduler {
  constructor(asyncFunctionsWithOrWithoutPromises) {
    this.functions = asyncFunctionsWithOrWithoutPromises;
    this.currentIndex = 0;
    this.isRunning = false;
    this.isPaused = false;
  }
  // code it time will run
  async run() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.isPaused = false;

    while (this.currentIndex < this.functions.length && !this.isPaused) {
      const currentFunction = this.functions[this.currentIndex];
      try {
        await currentFunction();
      } catch (error) {
        console.error(
          `Error in function at index ${this.currentIndex}:`,
          error
        );
      }
      this.currentIndex++;
    }

    if (this.currentIndex >= this.functions.length) {
      this.isRunning = false;
    }
  }

  async pause() {
    this.isPaused = true;
    this.isRunning = false;
  }

  getState() {
    return {
      currentIndex: this.currentIndex,
      isRunning: this.isRunning,
      isPaused: this.isPaused,
      totalFunctions: this.functions.length,
      remainingFunctions: this.functions.length - this.currentIndex,
    };
  }

  runAllUnexecutedFunctions() {
    this.currentIndex = 0;
    this.run();
  }
}

const scheduler = new PromiseScheduler([
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Function 1");
        resolve();
      }, 1000)
    ),
  () => {
    console.log("Function 2");
  },
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Function 3");
  },
]);
// copy the code and refresh

// open code sandbox just for checking
scheduler.run();
