// here we use the createApp method from vue to create a vue app and soter it in a const called app(you can call it whatever you want)
// vue apps control parts of a website or full web asites
// to make the app dynamic objects are passed into the createapp method
const app = Vue.createApp({
    // set up data, functions or templetes
    data() {
        // displays dynamic data
        return{
            // object for conditional rendering
            showBooks: true,
            // array for list and class rendering
            books:[
                {title: 'The secret lives of baba segi\'s wives', author: 'Lola Shoneyin', img:'assets/images/1.png', isfav:true},
                {title: 'Americanah', author: 'Chimamanda Ngozi Adichie', img:'assets/images/2.png', isfav: false},
                {title: 'My sister the serial killer', author: 'Onyikan Braith Waite ', img:'assets/images/3.png', isfav: true},
            ]
        }
    },
    // define functions and events here 
    // to access data objects use this.the name eg this.title

    methods: {
        // function for conditional rendering
        toggleShowBooks(){
            // the exlamation mark allows the function to evaluate false if the the value of show books is true and vice versa
            this.showBooks = !this.showBooks
        },
        // function for class rendering
        undoFav(book){
            book.isfav = !book.isfav
        },

    }
})
// on app one has access to a method called mount that tells vue where in the DOM to mount an application
// selectors such as class selectors and id selectors are used with app.mount to specify where the vue app will be mounted
app.mount('#app')