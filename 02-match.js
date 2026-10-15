const texto = "Eu tenho 2 cachorros e 3 gatos."; 
const resultado = texto.match(/cachorros/);
console.log(resultado); 

const post = "Hoje o dia está lindo! #sol #verao #praia";
const hashtags = post.match(/sol/); // procura palavras que começam com #

console.log(hashtags);

const post2 = "Fala com o @joao e a @maria!";
const mencoes = post2.match(/com/);

console.log(mencoes);