class AppState {
  counter = 0;

  private static instance: AppState;
  private constructor() {}

  static getInstance(): AppState {
    if (AppState.instance === undefined) {
      AppState.instance = new AppState();
    }

    return AppState.instance;
  }
}

const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();

appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;

console.log(appState1.counter);
console.log(appState2.counter);
