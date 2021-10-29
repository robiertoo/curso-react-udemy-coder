import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
export default function Integracao (props) {

    const [cliente, setCliente] = useState({})
    const [codigo, setCodigo] = useState(1);

    async function obterCliente() {
        let resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        let dados = await resp.json();
        setCliente(dados)
    }
    
    const handleChange = (e) => setCodigo(e.target.value)

    return(
        <Layout>
            <div>
                <input type="number" value={codigo} 
                    onChange={handleChange} />
                <button onClick={obterCliente}>
                    Obter Cliente
                </button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}