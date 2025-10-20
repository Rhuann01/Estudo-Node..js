const patch = require("path");

// Ele vai pegar apenas o nome do arquivo

console.log(patch.basename(__filename));

// diretorio atual

console.log(patch, patch.dirname(__filename));

//extenção do arquivo

console.log(patch.extname(__filename));

//Criar um objeto path, com todas as infos

console.log(patch.parse(__filename));

// juntar caminhos

console.log(path.join(__dirname, "teste", "teste"));
