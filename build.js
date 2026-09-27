const fs = require("fs");
fs.mkdirSync("public", { recursive: true });
fs.copyFileSync("index.html", "public/index.html");
fs.cpSync("assets", "public/assets", { recursive: true });
