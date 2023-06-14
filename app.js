class Human {
    constructor (name,surname) {
        this.name = name;
        this.surname = surname;
        this.speed = 0;
        this.state = undefined;
    }

    run (speed) {
        this.speed = speed;
        alert(`${this.name} is speed to ${this.speed}`)
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} is stopped`)
    }

    changeState(state) {
        this.state = state;
        alert(`State changed to ${this.state}`)
    }
}

const obj = new Human('Gevorg','Mirzoyan');
console.log(obj)
obj.run(20)
obj.stop()
obj.changeState('Pending')