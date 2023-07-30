import './Formulario.css'
import {CampoTexto, CampoImagem} from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao';
import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    
    

    const aoSalvar = (evento) => {
        console.log({nome, cargo, imagem, time})
        evento.preventDefault()
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                 obrigatorio={true} 
                 label='Nome' 
                 placeholder='Digite seu nome' 
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}
                 />
                <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite seu cargo' 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                 />
                
                {/* <CampoTexto 
                label='Imagem' 
                placeholder='Informe o endereço da imagem' 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                 /> */}
                <CampoImagem 
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                label={'Time'}
                obrigatorio={true} 
                itens={props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;