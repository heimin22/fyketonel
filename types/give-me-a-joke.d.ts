declare module "give-me-a-joke" {
  type JokeCallback = (joke: string) => void;

  interface CustomJokeOptions {
    firstName: string;
    lastName: string;
  }

  interface JokeOfTheDayOptions {
    category?: "general" | "knock-knock" | "programming";
  }

  export function getRandomDadJoke(callback: JokeCallback): void;
  export function getRandomCNJoke(callback: JokeCallback): void;
  export function getCustomJoke(
    firstName: CustomJokeOptions["firstName"],
    lastName: CustomJokeOptions["lastName"],
    callback: JokeCallback
  ): void;
  export function getJokeOfTheDay(
    options: JokeOfTheDayOptions,
    callback: JokeCallback
  ): void;

  const giveMeAJoke: {
    getRandomDadJoke: typeof getRandomDadJoke;
    getRandomCNJoke: typeof getRandomCNJoke;
    getCustomJoke: typeof getCustomJoke;
    getJokeOfTheDay: typeof getJokeOfTheDay;
  };

  export default giveMeAJoke;
}

