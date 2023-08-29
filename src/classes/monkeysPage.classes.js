class Human {
    constructor(name) {
        this.name = name;
    }
}

export class Trainer extends Human {
    constructor(name, ordersList, monkey) {
        super(name);
        this.ordersList = ordersList;
        this.monkey = monkey;
    }
    order(randomIndex) {
        const randomOrder = this.ordersList[randomIndex];
        return `${this.name} dis à ${this.monkey.name}: '${randomOrder.order}'`;
    }
}

export class Monkey {
    constructor(trainer, name, tricksList) {
        this.trainer = trainer;
        this.name = name;
        this.tricksList = tricksList;
    }
    obey(randomIndex) {
        const action = this.tricksList[randomIndex].order;
        const actionArray = action.split(" ");
        const firstWord = actionArray[0];
        const lowerArray = firstWord.toLowerCase().split("");
        if (lowerArray[lowerArray.length - 1] === "s") {
            lowerArray.pop();
            lowerArray.push("t");
        }
        actionArray.splice(0, 1, lowerArray.join(""));

        const answer = actionArray.join(" ");

        return `${this.name} s'éxécute suite à l'ordre de ${this.trainer} et il ${answer}`;
    }
}

export class Spectator extends Human {
    constructor(name) {
        super(name);
    }
    reacts(orderType, monkeyName) {
        if (orderType === "music") {
            return `${this.name} siffle pour encourager ${monkeyName}`;
        } else {
            return `${this.name} applaudit devant les performances de ${monkeyName}`;
        }
    }
}
