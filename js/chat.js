class User {
    constructor(name = 'Пользователь', position = 'пользователь') {
    this.name = name;
    this.position = position;
    }
}

class Chat {
    constructor(user = new User()) {
        this.chat = null;
        this.user = user;
        this.render();
    }
    render() {
        this.chat = document.createElement('div');
        this.chat.classList.add('chat-widget');
        this.chat.innerHTML = '<button class="chat-widget__close"><img src="" alt=""></button><div class="chat-widget__header"><div class="chat-widget__avatar"><img src="" alt=""></div><div class="chat-widget__user"><div class="chat-widget__user-name"></div><div class="chat-widget__user-position">Консультант</div></div></div>';
        document.body.appendChild(this.chat);
    }
}

const consultant = new User()
new Chat();
