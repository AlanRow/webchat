export async function delay(func, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(func());
      } catch (error) {
        reject(error);
      }
    }, timeout);
  });
}

export function getIntRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
