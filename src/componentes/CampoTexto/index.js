import './CampoTexto.css';
import './CampoImagem.css';


export const CampoTexto = (props) => {

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )

}

export const CampoImagem = (props) => {

    return (
        <div className='campo-imagem'>
          <label htmlFor="imagem">Imagem</label>
          <input
            type="file"
            id="imagem"
            accept="image/*"
            onChange={evento => props.aoAlterado(evento.target.files[0])}
          />
        </div>
    )
}

