import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="darkviolet"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
            <Navegador texto="Navegação #02" destino="/cliente/sp/123" cor="blue" />
            <Navegador texto="Componente Com Estado" destino="/estado" cor="#008cff" />
            <Navegador texto="Integração com API" destino="/integracao" cor="orange" /> 
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#ff0026" /> 
            <Navegador texto="Conteúdo Dinâmico" destino="/dinamico" cor="#875a56" /> 
        </div>
    )
}
