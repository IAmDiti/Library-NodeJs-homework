const fs = require("fs");

const read = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("books.json", "utf-8", (err, data) => {
      if (err) return reject(err);

      const parsedData = JSON.parse(data);
      resolve(parsedData);
    });
  });
};

const write = (data) => {
  return new Promise((resolve, reject) => {
    const stringData = JSON.stringify(data);

    fs.writeFile("books.json", stringData, (err) => {
      if (err) return reject(err);

      resolve();
    });
  });
};

module.exports = {
  read,
  write,
};