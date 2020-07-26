class App {
    constructor() {
        this.repositories = [];

        this.formEll = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEll.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();
        
        this.repositories.push({
            name: "rocketseat.com.br",
            description: "Here is a description",
            avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
            html_url: "https://github.com/Rocketseat/nlw-01-booster"
        });

        console.log(this.repositories);
    }
}

new App();