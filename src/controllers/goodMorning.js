import GoodMorningModel from '../models/goodMorning'

export default {
    GetRandom: (msg) => {
        GoodMorningModel.countDocuments().exec(function (err, count) {
            var random = Math.floor(Math.random() * count)

            GoodMorningModel.findOne().skip(random).then(result => {
                console.log('Mensagem de bom dia encontrada:', result.toString())

                msg.channel.send(result.message)
            }).catch(err => {
                console.error(err)
                msg.channel.send('Houve um erro e a mensagem de bom dia não pode ser encontrada :(')
            })
        })
    },
    Create: (message) => {
        if (!message) {
            console.err('Precisa passar uma mensagem para criar o novo Bom Dia.')
            return
        }

        GoodMorningModel.insertMany(message).then(data => {
            console.log('Mensagem de bom dia criada:', data)
        }).catch(err => {
            console.error('Falha ao criar mensagem de bom dia:', err)
        })
    }
}
