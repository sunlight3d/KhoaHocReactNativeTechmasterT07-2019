
export class TaskA {
    constructor() {
        this.taskC = {}
    }
    async task1() {
        return new Promise((resolve, reject) => {
            console.log('Begin task1 ')
            setTimeout(() => {  
                console.log("finished task1")              
                resolve("finished task1")           
                this.taskC.doSomeTasks(this)
            }, 2000)
        })
    }
}