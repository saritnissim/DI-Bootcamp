class TodoList {
    constructor() {
        this.tasks = {}
        }
    addTask(item){
        this.tasks[item] = "incomplete"
        console.log(`Added: "${item}"`);
    }

    markComplete(item){
        this.tasks[item] = "Complete"
    }

    listAll(){
        return JSON.stringify(this.tasks)
    }

}


export default TodoList