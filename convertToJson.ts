import * as fs from 'fs';
import * as path from 'path';

const dirPath = path.join(__dirname, 'Lógica de Programação');

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Não foi possível ler a pasta: ', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) !== '.txt') return;

    console.log(`Transformando arquivo ${file} em JSON...`);

    const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');

    const key = path.basename(file, '.txt');

    let data: { [key: string]: string } = {};
    data[key] = content;

    fs.writeFile(`${key}.json`, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error(`Erro ao escrever o arquivo JSON ${key}.json: `, err);
      } else {
        console.log(`Arquivo JSON ${key}.json criado com sucesso!`);
      }
    });
  });
});
