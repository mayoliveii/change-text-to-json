# Transformação de Arquivos TXT em JSON

Este projeto realiza a leitura de arquivos `.txt` de um diretório específico e os transforma em arquivos `.json`.

## Descrição

O script lê todos os arquivos `.txt` no diretório `Lógica de Programação`, converte o conteúdo de cada arquivo para o formato JSON e salva o resultado em um novo arquivo `.json`.

## Pré-requisitos

- Node.js instalado
- NPM ou Yarn

## Instalação

1. Clone o repositório:

```
git clone https://github.com/mayoliveii/change-text-to-json.git
```

2. Instale as dependências:

```
npm install
```

ou

```
yarn install
```

## Uso

1. Coloque seus arquivos `.txt` no diretório `Lógica de Programação`.
2. Execute o script:

```
node convertToJson.js
```

## Estrutura do Projeto

```
seu-repositorio/
│
├── Lógica de Programação/  # Diretório onde os arquivos .txt devem ser colocados
│   ├── exemplo1.txt
│   ├── exemplo2.txt
│   └── ...
│
├── seu-script.js
├── package.json
└── README.md
```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch com a sua feature: `git checkout -b my-feature`
3. Faça commit das suas alterações: `git commit -m 'Add my feature'`
4. Faça push para a branch: `git push origin my-feature`
5. Abra um Pull Request.
