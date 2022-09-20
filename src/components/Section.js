import Whats from "./Whats";
import {useState} from "react"

const Section = () => {

    const [chave,setChave] = useState()
    const [numlib, setNumlib] = useState()

    const getChave = (e) => {
        setChave(e.target.value)
    }
    const gerar = () => {
        setNumlib(`000${chave}000`)
    }
    const limpa = (e) => {
        e.target.value = ''
        setNumlib('')
    }

    return (
        <div className="tela">
            <div className="janela">
                <h1>CHAVE CLIENTE</h1>
                <input type='text'placeholder="00000" maxLength={5} onChange={getChave} onClick={limpa}/>
                <button onClick={gerar}>GERAR</button>
                <p>NUMERO DE LIBERACAO</p>
                <h1>{numlib}</h1>
            </div>
            <Whats/>
        </div>

    )
}

export default Section;