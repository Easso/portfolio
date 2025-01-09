<template>
    <div class="main-container">
        <div class="contact-me-container">
            <h2>Get in touch with me</h2>
            <div class="container-of-inputs">
                <div class="input-package">
                    <div class="input-label"><p>What is your <strong>name</strong>?</p></div>
                    <input class="input-field" type="text" v-model="emailData.name" placeholder="Name...">
                </div>
                <div class="input-package">
                    <div class="input-label"><p>What is your <strong>e-mail</strong>?</p></div>
                    <input class="input-field" type="text" v-model="emailData.email" placeholder="E-mail...">
                </div>
                <div class="input-package">
                    <div class="input-label"><p>What is your <strong>message</strong>?</p></div>
                    <textarea class="input-field field-3" type="text" v-model="emailData.bodyText" placeholder="Message..."></textarea>
                </div>
                <div class="input-package">
                    <button @click="SendEmail()"><h3>Send Message</h3></button>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            emailData: {
                name: "",
                email: "",
                bodyText: ""
            },
            tempEmailData: {
                name: "",
                email: "",
                bodyText: ""
            }
        }
    },
    methods: {
        SendEmail() {
            this.tempEmailData.name = this.emailData.name
            this.tempEmailData.email = this.emailData.email
            this.tempEmailData.bodyText = this.emailData.bodyText
            this.emailData.name = ''
            this.emailData.email = ''
            this.emailData.bodyText = ''
            axios.post("https://m48mqqew21.execute-api.us-east-2.amazonaws.com/production/sendemail", this.tempEmailData).then(
                response => {
                    console.log(response)
                    alert("Email sent. Thank you for contacting me!")
                }
            ).catch(err => {
                console.log(err)
                alert("Message Failure")
            })
        }
    },
};

</script>

<style scoped>

h3 {
    margin: 0;
}
button {
    width: 100%;
    height: 2rem;

    border: #b2c5b2;
    border-style: solid;
    border-width: 2px;
    color: #b2c5b2;

    background-color: #3c5148;
    border-radius: 10px;
    padding: 2px;
    margin: 1rem 0 0 0;

    align-self: center;

    transition: all .25s ease;
}

button:hover {
    background-color: #b2c5b2;
    color: #3c5148;
    border: #3c5148;
    border-style: solid;
    border-width: 2px;

    transition: all .25s ease;
}

.main-container{
    color: #3c5148;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
}
.contact-me-container {
    width: 55%;
    background-color: #b2c5b2;
    border-radius: 10px;
    
    min-height: 500px;
    max-height: 500px;
}

.container-of-inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input-package {
    width: 75%;

    margin: 10px 0;
}

.input-label {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.input-label p {
    margin: 0 0 4px 0;
}

.input-field {
    height: 1.5rem;
    width: 100%;
    
    border-radius: 4px;
    
    padding: 0 5px;

    outline: none;
    border: none;
    transition: all 0.1s ease;

}

.input-field:focus{
    border: #6b8e4e;
    border-style: solid;

    transition: all 0.1s ease;
}

.field-3 {
    height: 10rem;
}

@media only screen and (max-width: 950px) {
    .contact-me-container {
        width: 100%;
        border-radius: 0;
    }
}
</style>