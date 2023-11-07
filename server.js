const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("-p")) {
     message.channel.send("musica");
   }
 
 });
 
 client.login("ODUzMDg0NDgwNTE2NTIxOTg2.YMQO1Q.su_43l-1yMy48LZudnMXz_2LCOU");