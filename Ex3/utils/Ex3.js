const http = require('http');
const server = http.createServer((req, res) => {
    const url = new
    URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    if (path.startsWith('/saudação')){
        const name = path.replace('/saudação/', '');
    } else {
        res.end('Rota não encontrada');
    }
});
server.listen(2109, () => {
    console.log('Servidor rodando na porta 2109');
});