import Whats from "./Whats";
import {useState} from "react"

const Section = () => {

    let d = new Date();
    let ano = d.getFullYear();
    let mes = d.getMonth();
    let dia = d.getDate();
    let somaAno = (ano - 1900)*365;
    let bisexto = (ano - 1900)/4;
    let somaMes = (mes)*30; 
    let result =(somaAno + somaMes + dia + bisexto)+ 3;
    let codDia = result.toFixed(0);

    const [chave,setChave] = useState()
    const [numlib, setNumlib] = useState()

    const getChave = (e) => {
        setChave(`0${e.target.value}`)
    }
    const gerar = () => {
        let resultado = parseInt(codDia) +30;
        let codigos = '0'+resultado.toString();
        let cod1 = codigos.slice(0,3);//codigo de variaçao parte 1
        let cod2 = codigos.slice(3);//codigo de variaçao parte 2
        let chCliente1 =chave.substr(0,3) ;
        let chCliente2 =chave.substr(3,3) ;
        let numRenovacao = '000'+cod2+chCliente1+cod1+chCliente2+'000';
        setNumlib(numRenovacao)
    }
    const limpa = (e) => {
        e.target.value = ''
        setNumlib('')
        console.log(codDia)
    }

    return (
        <div className="tela">
            <div className="janela">
                <h1>CHAVE CLIENTE</h1>
                <input type='tel' placeholder="00000" maxLength={5} onChange={getChave} onClick={limpa}/>
                <button onClick={gerar}>GERAR</button>
                <p>NUMERO DE LIBERACAO</p>
                <h1>{numlib}</h1>
            </div>
            <Whats/>
        </div>

    )
}

export default Section;