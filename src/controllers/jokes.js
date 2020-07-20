import JokesModel from '../models/jokes'

export default {
    GetRandom: (msg) => {     
        JokesModel.countDocuments().exec(function (err, count) {
            var random = Math.floor(Math.random() * count)
        
            JokesModel.findOne().skip(random).then(result => {
                console.log('Piada encontrada:', result.toString())
                
                if (result.answer == null) msg.channel.send(result.joke)
                else msg.channel.send(`${result.joke} \nResposta (Clique para ver): ||${result.answer}||`)
                
                // if (result.answer != null) {
                //     msg.channel.send(`${result.joke} - _Digite !res para ver a resposta_`)
                //     
                //     const collector = new Discord.MessageCollector(
                //         msg.channel, m => m.author.id === msg.author.id, { time: 10000 })
                //     
                //     console.log(collector)
                //     collector.on('collect', msg => {
                //         if (msg.content == "!res") {
                //             msg.channel.send(result.answer)
                //         }
                //     })
                // } else {
                //     msg.channel.send(result.joke)
                // }
            }).catch(err => {
                console.error(err)
                msg.channel.send('Houve um erro e a piada não pode ser encontrada :(')
            })
        })
    },
    GetOne: (jokeId) => {
        if (!jokeId) {
            console.error("Precisa passar um ID")
        }

        JokesModel.findOne({ _id: jokeId }).then(data => {
            console.log('Piada de ID', jokeId, 'encontrada: ', data)
            return data
        }).catch(err => {
            console.error('Erro ao procurar pela piada de ID', jokeId)
        })
    },
    Create: (joke) => {
        JokesModel.insertMany(joke).then(data => {
            console.log('Piada criada:', data)
        }).catch(err => {
            console.error('Falha ao criar piada:', err)
        })
    }
}