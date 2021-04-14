let http = require('http');

let fs = require('fs');
const { default: axios } = require('axios');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
    response => {
        fs.writeFile('./result/posts.json', JSON.stringify(response.data), function(err){
            if(err)
            return console.log(err)
            return res.end("we've written posts.json")

        })

    }
)
})

server.listen(3000, 'localhost')


