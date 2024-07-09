//criação de um objeto
const atividade = {
    nome: 'almoço',
    data: new Date ('2024-07-08 10:00'),
}
//lista, array, vetor[]
const atividades = [
    atividade,
    {
        nome:'Academia em grupo',
        data: new Date ('2024-07-09 10:00'),
        finalizada: false
    },
    {
        nome:'Gaming sesion',
        data: new Date ('2024-07-09 10:00'),
        finalizada: false
    }
]

//arrow funcion
const criarItemDeAtividade = (atividade) => {
    //let (variaveis que muda)
    let input = '<input type="checkbox">'
    if (atividade.finalizada){
        input = input + 'checked'
    }
    input = input + '>'

    return `
    <div>
        <input type="checkbox">
        <span>${atividade.nome}</span>
        <time>${atividade.data}</time>
    </div>
    `;
}
const section = document.querySelector('section');

//laços de repetição
for(let atividade of atividades){
    //section vazia e adicionando a função em loop
    section.innerHTML = section.innerHTML + criarItemDeAtividade(atividade);
}



