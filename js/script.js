const {createApp} = Vue;
const app = createApp({
    data() {
        return {
            item: "",
            items: []
        }
    },
    methods: {
        addItem: function() {
            this.items.push(this.item)
        },
        removeTodo: function(clickedIndex) {
    
            this.items.splice(clickedIndex, 1)
        }
    }

}).mount("#app");