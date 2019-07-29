import {TaskA} from './TaskA'
import {TaskB} from './TaskB'

export class TaskC {
    constructor() {
        this.counter = 0
    }
    async task3() {
        return new Promise((resolve, reject) => {
            console.log('Begin task3 ')
            setTimeout(() => {
                resolve("finished task3")
            }, 4000)
        })
    }
    async doSomeTasks(task) {
        if((task instanceof TaskA) || (task instanceof TaskB)) {
            this.counter++            
        }
        if(this.counter == 2) {
            let result3 = await this.task3()
            console.log(result3)
         }
    }
}