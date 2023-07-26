import './Formulario.css'
import CampoTexto from '../CampoTexto/';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão' 
    ]

    const submissao = (evento) => {
        evento.preventDefault()
       console.log("Foi Submetido")
    }

    return (
        <section className='formulario'>
            <form onSubmit={submissao}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
                <ListaSuspensa obrigatorio={true} itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;