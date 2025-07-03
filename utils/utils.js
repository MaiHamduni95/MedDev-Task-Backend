const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'treatments.json');

function readData() {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };
