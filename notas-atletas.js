// Implementando a função que mostra o resultado
function mostraResultado(atletas) {
    let resultado = [];
    for (let i = 0; i < atletas.length; i++) {
        let soma = atletas[i].notas.reduce((a,b) => a + b);
        let max = Math.max(...atletas[i].notas);
        let min = Math.min(...atletas[i].notas);
        let ord = atletas[i].notas.sort((a,b) => a - b)
        resultado.push({
            atleta:  atletas[i].nome,
            notas: atletas[i].notas,
            media: ((soma - max - min) / (atletas[i].notas.length - 2)).toFixed(2)
        });
    }
    return resultado;
}


//objeto
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

console.log(mostraResultado(atletas));