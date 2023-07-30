import './Rodape.css';

const Rodape = () => {
    return (
        <div className='rodape'>
            <div className='redes-sociais'>
                <img src="/imagens/facebook.svg" alt="Facebook"/>
                <img src="/imagens/instagram.svg" alt="Instagram"/>
                <img src="/imagens/twitter.svg" alt="Twitter"/>
            </div>
            <div><img src="/imagens/Logo.svg" alt="Organo Logo"/></div>
            <p>Desenvolvido por Alura.</p>
        </div>
    )
}

export default Rodape;