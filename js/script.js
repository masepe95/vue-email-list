console.log('JS OK', Vue) 

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


const { createApp } = Vue;
 
const app = createApp({
    data() {
      return {
        emails: [],
        items: 10,
        isLoading: false
      }
    },

    mounted() {
        this.isLoading = true;
      for(let i = 0; i < this.items; i++){
        axios.get(endpoint).then(res => {
          const newMail = res.data.response
          this.emails.push(newMail)
        })
        this.isLoading = false;
      }
    }
  })
  app.mount("#root");
