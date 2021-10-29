export default function handler(req, res) {
    const {codigo} = req.query
    res.status(200).json({
        id: codigo,
        nome: `Maria - ${codigo}`,
        email: `marimariam${codigo}@gmail.comgee`
    })
}