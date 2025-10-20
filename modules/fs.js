const { error } = require("console");
const fs = require("fs");
const path = require("path");
const patch = require("path");

//criar pasta

fs.mkdir(patch.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Deu erro", error);
  } else {
    console.log("Deu certo");
  }
});

// criar um arquivo

fs.writeFile(
  path.join(__dirname, "/teste", "index.txt"),
  "Hello Word, ",
  (error) => {
    if (error) {
      return console.log("Deu ruim", error);
    } else {
      console.log("Deu bom");
    }
  }
);

//adcionar a um arquivo

fs.appendFile(
  path.join(__dirname, "/teste", "index.txt"),
  "Coisa nova",
  (error) => {
    if (error) {
      return console.log("deu erro", error);
    } else {
      console.log("deu bom");

      //ler um arquivo

      fs.readFile(
        path.join(__dirname, "/teste", "index.txt"),
        "utf8",
        (error, data) => {
          if (error) {
            return console.log("error: ", error);
          } else {
            console.log("Deu bom 2: ", data);
          }
        }
      );
    }
  }
);
