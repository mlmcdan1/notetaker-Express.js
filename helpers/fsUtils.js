const fs = require("fs");
const util = require("util");

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
      console.info(`\nData added to ${file}`);
    }
  });
};

const deleteFromFile = (contentId, file) => {
  readFromFile(file)
    .then((data) => JSON.parse(data))
    .then((dataObj) => {
      const filteredData = dataObj.filter((item) => item.id !== contentId);
      writeToFile(file, filteredData);
      console.info(`\nItem ${contentId} has been deleted from ${file}`);
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend, deleteFromFile };