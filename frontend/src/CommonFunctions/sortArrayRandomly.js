export const sortArrayRandomly = (array) => {
  const getRandomSeed = () => new Date().getTime();

  const shuffleArray = (arr, seed) => {
    const shuffledArr = [...arr];
    const random = (seed) => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(random(seed) * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }

    return shuffledArr;
  };

  const seed = getRandomSeed();
  return shuffleArray(array, seed);
};