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
        }
    }

}).mount("#app");