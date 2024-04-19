const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if (idade + contribuicao >= 85) {
    if (idade + contribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    console.log(`${nome}, você ainda não tem o tempo de contribuição necessário!`)
}