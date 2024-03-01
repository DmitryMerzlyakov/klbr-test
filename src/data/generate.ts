function getRandomLength() {
  return Math.round(Math.random() * (9 - 3) + 3);
}

function generateRandomString(length: number) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}

export function generateObjects() {
  const objects = [];

  for (let i = 0; i < 100; i++) {
    const object = {
      name: generateRandomString(getRandomLength()),
      surname: generateRandomString(getRandomLength()),
    };
    objects.push(object);
  }

  return objects;
}
