const { createApp } = Vue;

createApp({

    data() {

        return {

            todos: [{
                text : 'fare i compiti',
                done : true
                },
                {
                text : 'fare il bucato',
                done : false
                },
                {
                text : 'dare da mangiare al cane',
                done : true
                },
                {
                text : 'stendere i panni',
                done : false
                }
            ],
            newTask : ''
        };

    },

    methods: {

        removeTask(index) {

            this.todos.splice(index, 1);

        },
        addNewTask() {

            if(this.newTask != '') {
            this.todos.push({text:this.newTask, done:false});
            this.newTask = '';
            }

        },
        changeTaskStatus(index) {
            if (this.todos[index].done == true) {
                this.todos[index].done = false
            }
            else {
                this.todos[index].done = true
            }
        }


    }

}).mount('#app');
