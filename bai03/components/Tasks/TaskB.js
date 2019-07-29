
export class TaskB {
    constructor() {
        this.taskC = {}
    }

    async task2() {
        return new Promise((resolve, reject) => {
            console.log('Begin task2 ')
            setTimeout(() => {
                console.log("finished task2") 
                resolve("finished task2")
                this.taskC.doSomeTasks(this)
            }, 3000)
        })
    }
}