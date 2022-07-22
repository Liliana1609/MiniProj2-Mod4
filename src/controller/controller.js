import Dicas from "../modelo.js";
const caminho = (app) => {
    app.get('/tips', (req, res) => {
        const dica = new Dicas()
        res.json({
            "Dica": dica.coletar()
        });
    });
    app.post('/create', (req, res) =>{
        const body = req.body
        const dica = new Dicas(body.Dica)
        dica.inserir(dica)
        res.json({
            "Aviso": "inserida com sucesso", 
            "Dica" : dica
        });
    });

};

export default caminho