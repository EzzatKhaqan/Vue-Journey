const app = Vue.createApp({
    
    template:"",
    
    data(){
        return{
            users: [
                {name: 'A', url: 'images/1-old.jpg'},
                {name: 'B', url: 'images/1.jpg'},
                {name: 'C', url: 'images/2.fpg'},
                {name: 'D', url: 'images/3.jpg'},
                {name: 'E', url: 'images/4.jpg'},
                {name: 'F', url: 'images/5.jpg'},
                {name: 'G', url: 'images/6.jpg'}
            ],
            url:"",
            folder:"images/",
            counter:this.count(3)
        }
    },
    methods:{
       handleEvent(e){
        console.log(e);
       }
    }
});

app.mount("#app");
