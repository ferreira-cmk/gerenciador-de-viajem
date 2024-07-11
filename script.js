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
    let input = `
    <input onchange="concluirAtividade(event)"
    value="${atividade.data}"
    type="checkbox"
    `


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
    
    const dadosFormulario = new FormData (event, target)
    //pegando dados do formulario
    const nome = dadosFormulario.get('atividades')
    const dia = dadosFormulario.get('dia')
    const hora = dadosFormulario.get('hora')
    const data =  `${dia} ${hora}`
    //objeto
    const atividade = {
        nome: nome,
        data: data,
        finalizada: false
      }
      //atividade nova mais a antiga
      const atividadeExiste = atividades.find((atividade) =>{
        return atividade.data = novaAtividade.data
      }) 
      if(atividadeExiste){
        return alert('Dia/Hora não disponivel')
      }
      atividades = [novaAtividade,...atividades]
      atualizarListaDeAtividades()
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
        const diaFormatado =`
        ${formatar.dia.numerico} de
        ${formatar.mes}
        `

        diasSelecao +=  
        `<option value="${dia}">${diaFormatado}</option>
        `
    }
    document.querySelector('select[name="dia"]')
    .innerHTML =  diasSelecao
  }
  criarDiasSelecao()

  criarHorasSelecao = () =>{
    let horasDisponiveis = ''
    //horario das atividades 
    for(let i = 6; i < 23; i++){
      const hora = String(i).padStart(2, "0")
        horasDisponiveis +=`
        <option value="${hora}:00">${hora}:00</option>`
        horasDisponiveis +=`
        <option value="${hora}:30">${hora}:30</option>`
    }
    document.querySelector('select[name="hora"]')
    .innerHTML = horasDisponiveis
  }
criarHorasSelecao()

const concluirAtividade = (event) =>{
  const input = event.target
  const dataDesteInput = input.value

  const atividade = atividades.find((atividade)=>{
    return atividade.data = dataDesteInput
  })
  if(!atividade){
    return
  }
  atividade.finalizada = !atividade.finalizada
}