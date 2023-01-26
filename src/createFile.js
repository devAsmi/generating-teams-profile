const fs = require("fs");
const { join } = require("path");

function createHTMLFile(data) {
  const fileName = "output.html";
  const fullPath = join(process.cwd(), "dist", fileName);
  fs.writeFileSync(fullPath, data);
}

module.exports = createHTMLFile;
