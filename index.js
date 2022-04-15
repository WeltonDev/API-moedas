const http = require("http");
const listaDeMoedas = require("./moedas.json");

const server = http.createServer((req, res)=>{
    const resposta = JSON.stringify(listaDeMoedas);

    res.setHeader("Content-Type","application/json");
    res.setHeader("Access-Control-Allow-Origin","*");


    res.write(resposta);
    res.end();
});

server.listen(3000, ()=>{ console.log(`Servidor rodadando na porta 3000 ...`)})