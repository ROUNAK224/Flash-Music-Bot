exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'Help',
            description: `
            f,play <songName> - Play a song from youtube
            f,pause - pause music
            f,resume - resume music
            f,np - Get now playing song's info
            f,skip - Skip to next song
            f,stop - Stop playing music
            f,volume <value> - adjust volume of the music
            f,queue - to see the full song queue
            `,
            color: 'RED'
        }
    })
}
