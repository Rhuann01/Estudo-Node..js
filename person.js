class Person {
    constructor(Nome) {
        this.name = Nome;
    }
    
            sayMyname() {
                return `Your name is ${this.name}?`
            }
}

module.exports = {
    Person,
}