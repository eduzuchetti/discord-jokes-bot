import 'dotenv/config'
import './database/config'
import Discord from 'discord.js'
import Jokes from './controllers/jokes'
import Morning from './controllers/goodMorning'

/** Login on Discord with BOT Token */
const Bot = new Discord.Client()

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
