const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});


client.on('message', msg => {
  if (msg.content === 'شكرا') {
    msg.reply('**``آإلعفو قـ♥̨̥̬لبـ♥̨̥̬ي``**');
  }
});



client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('** ٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointed:**');
  }
});


client.on('message', msg => {
  if (msg.content === 'هاى') {
    msg.reply('** ٌهايات منور :disappointed:**');
  }
});



client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**وّلّلّّكّكّممّّ نۨــۏڕٺ ۛ ּيۧ مۭــڗ ۛ ּ، ۛ ּمۭــنۨ ۖ ڙمۭــٰا̍نۨ ̨؏ــڼۨــک ۗ :rose::wave:**');
  }
});


client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('**يلبى الى ينقط كمل يا حلو **');
  }
});


client.on('message', msg => {
  if (msg.content === 'رابط') {
    msg.reply('**➤``https://discord.gg/pm6Tk8z`` **');
  }
});


client.on('message', msg => {
  if (msg.content === '..') {
    msg.reply('**لسا بدك تنقط كمل خلينا نشوف نقطك**');
  }
});



client.on('message', msg => {
  if (msg.content === '...') {
    msg.reply('**ما اجمل نقطك كمل كمان  **');
  }
});



client.on('message', msg => {
  if (msg.content === '....') {
    msg.reply('**خلاص ما بكمل كمل لوحدك **');
  }
});



client.on('message', msg => {
  if (msg.content === '.....') {
    msg.reply('**انت حمار لسا  بتسمع كلامى :joy: **');
  }
});


client.on('message', msg => {
  if (msg.content === '......') {
    msg.reply('**خلاص يا ابن الحلال وقف **');
  }
});


client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**ۆعـلُـيَـگـم آلُـسـلُآم ۆرحٍـمةّ آلُلُہ ۆبْرگآتٌہ ، منْۆر. :rose: **');
  }
});
 


var prefix = "~";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('message', message => {
    var prefix = "~";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ArsNaL`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.on("message", function(message) {

  const bannedwords = [
    "احا",
    "كسمك",
    "زبي",
    "كس",
    "شرموط",
    "قحبه"

  ];

  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply("**لا تسب يا توتو**");
  };
});

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "cmd");
    logChannel.send(`${member} Invited by: <@${inviter.id}>`);
  });
});

client.on("message", message => {
              var args = message.content.substring(prefix.length).split("~");
              if (message.content.startsWith(prefix + "مسح")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });

client.on('message', message => {
  var prefix = "~";
  const guild = message.guild;

  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} Banned From The Server By : <@${message.author.id}> ! :airplane: **  `)
  
guild.owner.send(`سيرفر : ${guild.name}
**تم تبنيد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`)

}
});

client.on('message' , message => {
    var prefix = "~";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
       .setFooter('Requested by '+message.author.username, message.author.avatarURL)
        message.channel.sendEmbed(embed)
    }
  });

client.on('message', message => {
  var prefix = "~";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers :x:**');
   const guild = message.guild;
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**__Mention__ A Member To Kick !**");
  if (!message.guild.member(user).kickable) return message.reply("**Can't Kick A Higher Role Than Me !**");
  message.channel.send(`**:white_check_mark: ${user.tag} Kicked Form The Server By : <@${message.author.id}> ! :airplane:** `)
  guild.owner.send(`سيرفر : ${guild.name}
**تم طرد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`).then(()=>{
message.guild.member(user).kick();
  })
}
});

 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
}); 

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` •●𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝕊𝔼ℝ𝕍𝔼ℝ 𝕊𝔸𝕍𝔼"●• ${member} `) 
}).catch(console.error)
})

   client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('468811298000601088').roles.find('name', 'DISCOO').edit({color: 'RANDOM'})
    },5000);
  

})

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`اهلاً و سهلاً :raised_hand::skin-tone-1: :smiley:` , `welcome :raised_hand::skin-tone-1: :smiley:`)
    .setDescription(`منور السيرفر يا حلو :blush:` , `welcome to the server :blush:`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('==== 𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝕊𝔼ℝ𝕍𝔼ℝ 𝕊𝔸𝕍𝔼 ====', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

var channel =member.guild.channels.find('name', 'cmd')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
    .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

var channel =member.guild.channels.find('name', 'cmd')
if (!channel) return;
channel.send({embed : embed});
})

   client.on('message', message => {
 if (message.content.startsWith("ولكم")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا لانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝕊𝔼ℝ𝕍𝔼ℝ 𝕄𝔸ℝ𝕂𝔼𝕋***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
