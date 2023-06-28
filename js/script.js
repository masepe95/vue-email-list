console.log('JS OK', Vue) 

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


const { createApp } = Vue;
 
const app = createApp({
    data() {
      return {
        emails: [],
        items: 10,
      }
    },
    computed: {
      isLoading(){
        return this.emails.length !== this.items;
      }
    },

    mounted() {
        
      for(let i = 0; i < this.items; i++){
        axios.get(endpoint).then(res => {
          const newMail = res.data.response
          this.emails.push(newMail)
        })
        
      }
    }
  })
  app.mount("#root");
