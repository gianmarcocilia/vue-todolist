const {createApp} = Vue;
const app = createApp({
    data() {
        return {
            item: {
                text: "",
                done: false
            },
            items: []
        }
    },
    methods: {
        addItem: function() {
            this.items.push({...this.item})
            this.item.text = "";
        },
        removeTodo: function(clickedIndex) {
    
            this.items.splice(clickedIndex, 1)
        },
        checkTodo: function(clickedIndex) {
            console.log(this.item.done);
            this.items[clickedIndex].done = !this.items[clickedIndex].done;
        }
    }

}).mount("#app");