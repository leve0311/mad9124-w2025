const EventEmitter = require("events");

class Notification extends EventEmitter {
  constructor(channelName) {
    super();
    this.channelName = channelName;
    this.on(this.channelName, (message) =>
      console.log(`[${channelName}] ${message}`)
    );
  }

  send(message) {
    this.emit(this.channelName, message);
  }
}

const myTwitchChat = new Notification("twicth");
const myYoutubeChat = new Notification("youtube");

myTwitchChat.send("Hello, world!");
myYoutubeChat.send("Hello, world!");

const allMyChats = [myTwitchChat, myYoutubeChat];

allMyChats.forEach((chat) => chat.send("Hello"));
allMyChats.forEach((chat) => chat.send("World"));
