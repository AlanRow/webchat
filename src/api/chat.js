const WS_URL = process.env.VUE_APP_WEBSOCKET_URL;

export default class ChatInstance {
  #user = null;
  #receiver = null;
  #ws = null;

  constructor(user, receiver) {
    this.#user = user;
    this.#receiver = receiver;
    this.#ws = new WebSocket(WS_URL);
  }

  get messageMeta() {
    return {
      from: this.#user,
      to: this.#receiver,
    };
  }

  sendMessage(message) {
    if (this.#ws.readyState === 0) {
      this.#ws.addEventListener("open", this.sendMessage.bind(this, message));
      return;
    }

    const data = {
      ...this.messageMeta,
      text: message,
    };
    this.#ws.send(JSON.stringify(data));
  }

  async subscribeOnMessageReceived(handler) {
    this.#ws.addEventListener("message", (event) => {
      handler(event.data.message);
    });
  }
}
