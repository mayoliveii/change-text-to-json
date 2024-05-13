"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var dirPath = path.join(__dirname, 'Lógica de Programação');
fs.readdir(dirPath, function (err, files) {
    if (err) {
        console.error('Não foi possível ler a pasta: ', err);
        return;
    }
    files.forEach(function (file) {
        if (path.extname(file) !== '.txt')
            return;
        console.log("Transformando arquivo ".concat(file, " em JSON..."));
        var content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
        var key = path.basename(file, '.txt');
        var data = {};
        data[key] = content;
        fs.writeFile("".concat(key, ".json"), JSON.stringify(data, null, 2), function (err) {
            if (err) {
                console.error("Erro ao escrever o arquivo JSON ".concat(key, ".json: "), err);
            }
            else {
                console.log("Arquivo JSON ".concat(key, ".json criado com sucesso!"));
            }
        });
    });
});
