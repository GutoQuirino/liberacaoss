

const Section = () => {

    return (
        <div className="tela">
            <div className="janela">
                <h1>CHAVE CLIENTE</h1>
                <input type='text'placeholder="00000" maxLength={5}/>
                <button>GERAR</button>
                <p>NUMERO DE LIBERACAO</p>
                <h1></h1>
            </div>
        </div>

    )
}

export default Section;