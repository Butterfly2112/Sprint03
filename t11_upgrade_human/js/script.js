class Human {
    constructor(firstName, lastName, gender, age, calories) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;

        this.updateInfo();
        setInterval(() => this.reduceCalories(), 60000);

        setTimeout(() => {
            if (this.calories < 500) {
                this.showMessage("I'm still hungry");
            }
        }, 5000);
    }

    reduceCalories() {
        this.calories -= 200;
        this.updateInfo();
        if (this.calories < 500) this.showMessage("I'm still hungry");
    }


    sleepFor() {
        const seconds = prompt("Enter sleep time in seconds:");
        if (seconds && !isNaN(seconds)) {
            document.getElementById("message").innerText = `I’m sleeping for ${seconds} seconds...`;
    
            const characterImg = document.getElementById("character-img");
            characterImg.classList.remove("sleeping", "awake");
            
            characterImg.classList.add("sleeping");
            setTimeout(() => {
                document.getElementById("message").innerText = "I’m awake now!";
                characterImg.classList.remove("sleeping");
                characterImg.classList.add("awake");
            }, seconds * 1000);
        } else {
            document.getElementById("message").innerText = "Invalid input! Please enter a valid number.";
        }
    }

    feed() {
        if (this.calories > 500) {
            this.showMessage("I'm not hungry");
        } else {
            this.showMessage("Nom nom nom...");
            document.getElementById("character-img").classList.add("eating");
            setTimeout(() => {
                this.calories += 200;
                this.updateInfo();
                this.showMessage(this.calories < 500 ? "I'm still hungry" : "I'm not hungry");
                document.getElementById("character-img").classList.remove("eating");
            }, 10000);
        }
    }

    showMessage(msg) {
        document.getElementById("message").innerText = msg;
    }

    updateInfo() {
        document.getElementById("name").innerText = `${this.firstName} ${this.lastName}`;
        document.getElementById("gender").innerText = this.gender;
        document.getElementById("age").innerText = this.age;
        document.getElementById("calories").innerText = this.calories;
    }
}

class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories);
    }

    fly() {
        this.showMessage("I'm flying!");
    
        const characterImage = document.getElementById("character-img");
        characterImage.classList.add("flying");
    
        setTimeout(() => {
            characterImage.classList.remove("flying");
        }, 10000);
    
        setTimeout(() => {
            document.getElementById("message").innerText = "";
        }, 10000);
    }

    fightWithEvil() {
        this.showMessage("Khhhh-chh... Bang-g-g-g... Evil is defeated!");
        document.getElementById("character-img").classList.add("shaking");
        setTimeout(() => {
            document.getElementById("character-img").classList.remove("shaking");
        }, 3000);
    }
    

    updateInfo() {
        document.getElementById("name").innerText = `Superhero: ${this.firstName} ${this.lastName}`;
        super.updateInfo();

        document.getElementById("actions").innerHTML = `
            <button id="fly-btn">Fly</button>
            <button id="fight-btn">Fight</button>
        `;

        document.getElementById("fly-btn").addEventListener("click", () => this.fly());
        document.getElementById("fight-btn").addEventListener("click", () => this.fightWithEvil());
    }
}

let human = new Human("Marinette", "Dupain-Cheng", "Female", 15, 400);

document.getElementById("sleep-btn").addEventListener("click", () => human.sleepFor(5));
document.getElementById("feed-btn").addEventListener("click", () => human.feed());

document.getElementById("transform").addEventListener("click", () => {
    if (human.calories > 500) {
        document.getElementById("character-img").src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37ef285a-dd7e-4dd0-929c-0da25870903b/dabp3z2-9b730015-c971-482d-8dd0-7a32cd9d56e8.png/v1/fill/w_500,h_699/miraculous_ladybug___clipart_by_queenancana_dabp3z2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk5IiwicGF0aCI6IlwvZlwvMzdlZjI4NWEtZGQ3ZS00ZGQwLTkyOWMtMGRhMjU4NzA5MDNiXC9kYWJwM3oyLTliNzMwMDE1LWM5NzEtNDgyZC04ZGQwLTdhMzJjZDlkNTZlOC5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ldOtGmFOe80g0iNKqGNBXMj9u12_jBHP-DNjyYzz7m0";
        hero = new Superhero(human.firstName, human.lastName, human.gender, human.age, human.calories);
    } else {
        document.getElementById("message").innerText = "Not enough calories to transform!";
    }
});
