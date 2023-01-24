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
            ]
        };

    },

    methods: {

        removeTask(index) {
            this.todos.splice(index, 1);
        }

    }

}).mount('#app');
