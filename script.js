// biblioteca e códigos de terceiros
const formatador = (data) => {
    return {
      dia: {
        numerico: dayjs(data).format('DD'),
        semana: {
          curto: dayjs(data).format('ddd'),
          longo: dayjs(data).format('dddd'),
        }
      },
      mes: dayjs(data).format('MMMM'),
      hora: dayjs(data).format('HH:mm')
    }
  }
  
  // criação de um objeto
  const atividade = {
    nome: 'Almoço',
    data: new Date('2024-07-08 10:00'),
  }
  
  // lista, array, vetor[]
  let atividades = [
    atividade,
    {
      nome: 'Academia em grupo',
      data: new Date('2024-07-09 10:00'),
      finalizada: false
    },
    {
      nome: 'Gaming',
      data: new Date('2024-07-09 10:00'),
      finalizada: false
    }
  ]
  
  // arrow function
  const criarItemDeAtividade = (atividade) => {
    // let (variáveis que mudam)
    let input = '<input type="checkbox"';
    if (atividade.finalizada) {
      input = input + ' checked';
    }
    input = input + '>';
  
    const formatar = formatador(atividade.data);
  
    return `
      <div>
        ${input}
        <span>${atividade.nome}</span>
        <time>
          ${formatar.dia.semana.longo}, 
          dia ${formatar.dia.numerico} 
          de ${formatar.mes}
          às ${formatar.hora}h
        </time>
      </div>
    `;
  }
  
  const atualizarListaDeAtividades = () => {
    const section = document.querySelector('section');
    // verificar se a lista está vazia 
    if (atividades.length == 0) {
      section.innerHTML = "<p>Nenhuma atividade cadastrada.</p>";
      return;
    }

    for (let atividade of atividades) {
      section.innerHTML = section.innerHTML + criarItemDeAtividade(atividade);
    }
  }
  
  atualizarListaDeAtividades();
  

  salvarAtividade = (event) =>{
    event.preventDefault()
  }

  criarDiasSelecao = () =>{
    const dias = [
        "2024-07-28",
        "2024-07-29",
        "2024-08-01",
        "2024-08-02",
        "2024-08-03",

    ]
    let diasSelecao = ''
    for(let dia of dias){
        const formatar = formatador(dia)
        const diaFormatado = 
        `${formatar.dia.numerico} de
        ${formatar.mes}`

        diasSelecao = diasSelecao + 
        `<option value="${dias}">${diaFormatado}</option>
        `
    }
    document.querySelector('select[name="dia"]')
    .innerHTML =  diasSelecao
  }
  criarDiasSelecao()

  criarHorasSelecao = () =>{
    let horasDisponiveis = ''
    for(let i = 6; i < 23; i++){

    }

    document.querySelector('select[name="hora"]')
    .innerHTML = horasDisponiveis
  }
  //criarHorasSelecao()