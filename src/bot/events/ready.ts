import Event from '../struct/Event';

abstract class ReadyEvent extends Event {
  bot: any;
  constructor() {
    super({
      name: 'ready',
      once: true,
    });
  }

  async exec() {
    console.log(`✔️ Bot online | MS: ${this.client?.ws.ping}`);
    this.client.user?.setActivity(`!help | oneupgaming.eu`, {type: "WATCHING"})
  }
}

export default ReadyEvent;