<template>
    <!--https://www.base64-image.de/-->
    <!--<div class="main-container">
        <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
            <h2>{{ projectData.ProjectsArray[index].Title }}</h2>
            <img :src="projectData.ProjectsArray[index].Image" alt="">
            <p>{{ projectData.ProjectsArray[index].About }}</p>
            <div class="links">
                <a :href="projectData.ProjectsArray[index].Link1" target="_blank"><img src="" alt=""></a>
                <a :href="projectData.ProjectsArray[index].Link2" target="_blank"><img src="" alt=""></a>
            </div>
        </div>
    </div>
    -->
    <h2 class="section-title">Projects I have done</h2>
    <div class="main-container">
        <div class="project-card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">
            <h2>{{ lambdaReturnData.Items[index].title }}</h2>
            <img :src="lambdaReturnData.Items[index].image" alt="">
            <p>{{ lambdaReturnData.Items[index].about }}</p>
            <div class="links">
                <a :href="lambdaReturnData.Items[index].link1" target="_blank"><img src="" alt=""></a>
                <a :href="lambdaReturnData.Items[index].link2" target="_blank"><img src="" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import jsonData from "/projects.json"
export default {
    data() {
        return {
            projectData: jsonData,
            lambdaReturnData: {}
        }
    },
    methods: {
        GetProjects() {
            axios.get('https://u2mvdypt0e.execute-api.us-east-2.amazonaws.com/production/getprojects').then(response => {
                console.log(response);
                this.lambdaReturnData = response.data;
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.GetProjects();
    }
}
</script>

<style scoped>

.section-title{
    color: #b2c5b2;
}
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
    color: #3c5148;
}
.project-card {
    margin: 10px;
    padding: 10px;
    flex-wrap: 0 0 40%;
    background-color:#b2c5b2;
    border-radius: 25px;
    box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
    width: 30%;
    height: 360px;
}
.project-card img{
    height: 10rem;
    border-radius: 5px;
}
.links{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
.links img{
    height: 1.5rem;
    margin: 5px;
}

@media only screen and (max-width: 950px) {
    .project-card {
        width: 75%;
    }
}
</style>