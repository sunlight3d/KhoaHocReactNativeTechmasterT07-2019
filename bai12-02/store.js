import { observable } from "mobx";

class Person {
    @observable name = ""
    @observable age = 18
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const person = new Person("Hoang", 20)
export default {
    person
}