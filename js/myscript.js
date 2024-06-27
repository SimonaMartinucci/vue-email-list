const { createApp } = Vue;

createApp({
    data() {
        return {
            myEmails: [],
        }
    },

    mounted() {
        // ciclo per creare 10 indirizzi email
        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risposta) => {
                const result = risposta.data.response;
                // pusho email in array vuoto
                this.myEmails.push(result);
            })
        }
    }
}).mount('#app');