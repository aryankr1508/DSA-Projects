class ChatHandler {
  constructor(chat_template, chat_list) {
    this.hashmap = new Map();
    this.linkedlist = null;
    this.chat_template = chat_template;
    this.chat_list = chat_list;
    let clock = new Date();
    this.hours = clock.getHours();
    this.minutes = clock.getMinutes();
  }

  getTime() {
    //Time stamp creation for chat_tmeplate
    this.mins += 1;
    if (this.min === 60) {
      this.hours += 1;
      this.mins = 0;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    return ("0" + this.hours).slice(-2) + ":" + ("0" + this.mins).slice(-2);
  }
  createNode(id) {
    //creating node element
  }
}
