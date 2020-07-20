import 'dotenv/config'
import './database/config'
import Discord from 'discord.js'
import Jokes from './controllers/jokes'
import Morning from './controllers/goodMorning'

Morning.Create({message: "Meua migo, bom dia pra quem? Já lavou a louça?"})
const Bot = new Discord.Client()

/** Login on Discord with BOT Token */
Bot.login(process.env.BOT_USER_TOKEN)

Bot.once('ready', () => console.log(`Bot online: ${Bot.user.tag}!`))

Bot.on('message', msg => {   
    if (msg.content === '!bomdia') {
        return Morning.GetRandom(msg)
    }
    
    if (msg.content === '!piada') {
        return Jokes.GetRandom(msg)
    }
})
