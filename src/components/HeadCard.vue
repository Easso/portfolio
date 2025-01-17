<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-one">
                <div class="profile">
                    <img src="../assets/PFP.jpg" alt="">
                    <h3>Easson Weisshaar</h3>
                    <p>Electrical Engineering Student</p>
                </div>
                <div class="uni-logo">
                    <img src="../assets/UniLogoWhite.png">
                </div>
                <div class="social-links">
                    <div class="accounts">
                    <a href="https://github.com/Easso" target="_blank">
                        <img href="https://github.com/Easso" src="../assets/github-mark.svg" alt="" target="_blank"> 
                        <h2>GitHub</h2>
                    </a>
                    </div>
                    <div class="accounts">
                    <a href="https://www.linkedin.com/in/easson" target="_blank">
                        <img href="https://www.linkedin.com/in/easson" src="../assets/iconmonstr-linkedin-3.svg" alt="" target="_blank">
                        <h2>LinkedIn</h2>
                    </a>
                    </div>  
                </div>
            </div>
            <div class="container-two">
                <div class="about-me">
                    <h1 class="right-title">About Me</h1>
                    <p>
                        I am a fourth-year electrical engineering co-op student enrolled at the University of Waterloo. 
                        My professional interests centers on hardware design, embedded development and electronic work. 
                        My overarching objective is to integrate my enthusiasm for hockey with my technical expertise, 
                        this may involve initiatives such as establishing a sports-oriented data science club at the university, 
                        or creating physical hockey training tools. I'm also pretty cool.
                    </p>
                </div>
                <div class="skills">
                    <h1 class="right-title">Skills</h1>
                    <div class="logos">
                        <img src="../assets/cpp_logo.svg" alt="">
                        <img src="../assets/vue_logo.svg" alt="">
                        <img src="../assets/html-5-svgrepo-com.svg" alt="">
                        <img src="../assets/javascript-svgrepo-com.svg" alt="">
                        <img src="../assets/css-3-svgrepo-com.svg" alt="">
                        <img src="../assets/python-seeklogo.com.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
}

.main-container {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    background-color:#3c5148;
    border-radius: 25px;
    box-shadow: rgba(0,0,0,0.75) 0px 3px 18px;
    width: 60%;
    margin-bottom: 2.5rem;
    transition: 0.5s;
}

.main-container:hover {
    box-shadow: rgba(0,0,0,15) 0px 30px 26px;
    transition: 0.5s;
}
.container-one{
    background-color: #b2c5b2;
    padding:2.5%;
    width:40%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
    color: #3c5148;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container-one h3 {
    color: #1b2727;
}

.profile {
    margin-bottom: -10px;
}
.profile img{
    height: 8rem;
    border-radius: 40%;
}
.accounts {
    padding-inline: 1.4rem;
}
.accounts a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 10px;
}
.social-links {
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
}
.social-links img {
    height: 2.5rem;
}

.uni-logo img {
    height: 110px;
    border-radius: 100px;
    margin-bottom: 2px;
}
.right-title{
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
    font-family:serif;
    color: #b2c5b2;
}
.container-two{
    padding:2.5%;
    border-radius: 25px;
    background-color: #3c5148;
    margin: 2.5%;
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: space-evenly;
}
.about-me{
    text-align: left;
    color: #b2c5b2;
}
.title{
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
    font-family:serif;
    color: #1b2727;
}
.logos {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center;      
}
.logos img {
    height: 3.2rem;
    margin-inline: 2px;
    transition: 0.1s;
}
.logos img:hover {
    scale: 1.2;
    transition: 0.1s;
    padding-left: 0.4%;
    padding-right: 0.4%;
}
.button-container{
    margin-top: 5%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.projects-button{
    background-color:#6b8e4e;
    margin: 5px;
    padding: 1.2%;
    border-radius: 15px;
}
.projects-button a{
    text-decoration: none;
    color: #2c3e50;
    color: #d5dddf;
}
@media only screen and (max-width: 950px) {

    p {
        margin: 0px;
    }
    .main-container{
        width: auto;

        margin: 0;

        flex-direction: column;

        border-radius: 0;
    }
    .container-one {
        width: auto;

        border-radius: 0;
    }

    .container-two{
        width: auto;

        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-radius: 0;
    }

    .accounts{
        display: flex;
        padding-inline: 0.5rem;
    }
}
</style>