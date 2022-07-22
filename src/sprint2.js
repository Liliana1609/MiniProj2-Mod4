import express from "express"
import caminho from "./controller/controller.js"

const app = express();
const port = 3000;

app.use(express.json());

caminho(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})



