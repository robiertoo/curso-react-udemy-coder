import Layout from "../components/Layout"

export default function Jsx() {
    const Titulo = () => <h1>JSX é um conceito Central</h1>
    const SubTitulo = () => <h2>{"muito legal".toUpperCase()}</h2>
    return (
        <Layout titulo="Entendendo o JSX">
            <Titulo />
            <SubTitulo />
        </Layout>
    )
}