const readline = require('readline');

let niveis = [
  { limite: 1000, nome: "Ferro" },
  { limite: 2000, nome: "Bronze" },
  { limite: 5000, nome: "Prata" },
  { limite: 7000, nome: "Ouro" },
  { limite: 8000, nome: "Platina" },
  { limite: 9000, nome: "Ascendente" },
  { limite: 10000, nome: "Imortal" },
  { limite: Infinity, nome: "Radiante" }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu nome: ", (nome) => {
  if (!nome.trim()) {
    console.log("Nome inválido.");
    rl.close();
    return;
  }
  rl.question("Digite a quantidade de experiência (XP): ", (xpStr) => {
    let xp = Number(xpStr);
    if (isNaN(xp) || xp < 0) {
      console.log("XP inválido. Digite um número positivo.");
      rl.close();
      return;
    }
    let nivel = niveis.find(n => xp <= n.limite).nome;
    console.log(`O heroi ${nome} é de ranque ${nivel}`);

    rl.close();
  });
});
