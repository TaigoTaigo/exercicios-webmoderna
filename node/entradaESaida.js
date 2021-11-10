const os = require('os');

const { prependListener } = require("process")

const anon = process.argv.indexOf('-a') !== -1
//console.log(anon)

if(anon) {
    process.stdout.write('Fala Anon!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(`${os.EOL}`, '')

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}