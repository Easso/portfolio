<template>
    <div class="wrapper">
        <div class="post-card">
            <div class="post-title">
                <h1>Add New {{ selectOption }}</h1>
                <div>
                    <nav class="exit">
                        <router-link to="../">X</router-link> 
                    </nav>
                </div>
            </div>
            <div class="container-of-inputs">
                <div class="input-container">
                    <select v-model="selectOption" @change="clearFields()">
                        <option v-for="option in postOptions" :postType="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div v-if="selectOption=='Project'" class="input-class">
                    <div class="input-container">
                        <input type="text" placeholder="Title..." name="project_title" v-model="postProjectDataTemp.temp_title" ref="project_title">
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="Image..." name="project_image" v-model="postProjectDataTemp.temp_image" ref="project_image">
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="Link..." name="project_link1" v-model="postProjectDataTemp.temp_link1" ref="project_link1">
                    </div>
                    <div class="input-container" style="margin-bottom: 1.5rem;">
                        <input type="text" placeholder="Link..." name="project_link2" v-model="postProjectDataTemp.temp_link2" ref="project_link2">
                    </div>
                    <div class="input-container">
                        <textarea name="project_description" placeholder="Description..."  v-model="postProjectDataTemp.temp_about" ref="project_about"></textarea>
                    </div>
                    <div class="router"> 
                        <nav>
                            <router-link class="router" type="submit" @click="PostProject()" to="#">
                                Upload Project
                            </router-link> 
                        </nav>
                    </div>
                </div>
                <div v-if="selectOption=='Job'" class="input-class">
                    <div class="input-container">
                        <input type="text" placeholder="Title..." name="job_title" v-model="postJobDataTemp.temp_title" ref="job_title">
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="Company..." name="job_company" v-model="postJobDataTemp.temp_company" ref="job_company">
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="Start date..." name="job_startDate" v-model="postJobDataTemp.temp_startDate" ref="job_startDate">
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="End date..." name="job_endDate" v-model="postJobDataTemp.temp_endDate" ref="job_endDate">
                    </div>
                    <div class="input-container tasks-input" v-if="noTasks>0">
                        <input type="text" placeholder="Task..." name="job_task" v-model="postJobDataTemp.temp_task1">
                    </div>
                    <div class="input-container tasks-input" v-if="noTasks>1">
                        <input type="text" placeholder="Task..." name="job_task" v-model="postJobDataTemp.temp_task2">
                    </div>
                    <div class="input-container tasks-input" v-if="noTasks>2">
                        <input type="text" placeholder="Task..." name="job_task" v-model="postJobDataTemp.temp_task3">
                    </div>
                    <div class="input-container tasks-input" v-if="noTasks>3">
                        <input type="text" placeholder="Task..." name="job_task" v-model="postJobDataTemp.temp_task4">
                    </div>
                    <div class="input-container tasks-input" v-if="noTasks>4">
                        <input type="text" placeholder="Task..." name="job_task" v-model="postJobDataTemp.temp_task5">
                    </div>
                    <div class="input-container tasks-input" v-if="noTasks>5">
                        <input type="text" placeholder="Task..." name="job_task" v-model="postJobDataTemp.temp_task6">
                    </div>
                    <div class="input-container" style="margin-bottom: 1.5rem;">
                        <input type="text" placeholder="Location..." name="job_location" v-model="postJobDataTemp.temp_location" ref="job_location">
                    </div>
                    <div class="input-container">
                        <textarea name="job_description" placeholder="Description..." v-model="postJobDataTemp.temp_description" ref="job_description"></textarea>
                    </div>
                    <div class="control-buttons">
                        <button class="task-buttons" @click="addTask()" title="add task">+</button>
                        <div class="router"> 
                            <nav>
                                <router-link class="router" type="submit" @click="PostJob()" to="#">
                                    Upload Job
                                </router-link> 
                            </nav>
                        </div>
                        <button class="task-buttons" @click="removeTask()" title="remove task">-</button>
                    </div>
                </div>
                <div v-if="selectOption=='Class'" class="input-class">
                    <div class="input-container">
                        <input type="text" placeholder="Class name..." name="class_className" v-model="postClassDataTemp.temp_className" ref="class_className">
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="Class code..." name="class_classCode" v-model="postClassDataTemp.temp_classCode" ref="class_classCode">
                    </div>
                    <div class="input-container">
                        <input type="text" placeholder="Class link..." name="class_classLink" v-model="postClassDataTemp.temp_classLink" ref="class_classLink">
                    </div>
                    <div class="input-container" style="margin-bottom: 1.5rem;">
                        <input type="text" placeholder="Github link..." name="class_githubLink" v-model="postClassDataTemp.temp_githubLink" ref="class_githubLink">
                    </div>
                    <div class="input-container">
                        <textarea name="class_description" placeholder="Description..." v-model="postClassDataTemp.temp_description" ref="about"></textarea>
                    </div>
                    <div class="router"> 
                        <nav>
                            <router-link class="router" type="submit" @click="PostClass()" to="#">
                                Upload Class
                            </router-link> 
                        </nav>
                    </div>
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

            selectOption: "",
            noTasks: 1,
            postProjectData: {
                projectId: '',
                title: '',
                about: '',
                image: '',
                link1: '',
                link2: ''
            },
            postProjectDataTemp:{
                temp_title: '',
                temp_about: '',
                temp_image: '',
                temp_link1: '',
                temp_link2: ''
            },
            postClassData: {
                classID: '',
                className: '',
                description: '',
                classCode: '',
                classLink: '',
                githubLink: ''
            },
            postClassDataTemp:{
                temp_title: '',
                temp_about: '',
                temp_image: '',
                temp_link1: '',
                temp_link2: ''
            },
            postJobData: {
                workID: '',
                title: '',
                description: '',
                startDate: '',
                endDate: '',
                location: '',
                tasks: [],
                company: ''
            },
            postJobDataTemp:{
                temp_title: '',
                temp_description: '',
                temp_startDate: '',
                temp_endDate: '',
                temp_location: '',
                temp_task1: '',
                temp_task2: '',
                temp_task3: '',
                temp_task4: '',
                temp_task5: '',
                temp_task6: '',
                temp_company: ''
            },
            postOptions:([
                {text: 'Project', value: "project"},
                {text: 'Job', value: "job"},
                {text: 'Class', value: "class"}
            ])
        }
    },
    methods: {
        PostProject() {
                this.postProjectData.projectId = this.getPartitionKey();
                this.postProjectData.title =  this.postProjectDataTemp.temp_title;
                this.postProjectData.about = this.postProjectDataTemp.temp_about;
                this.postProjectData.image = this.postProjectDataTemp.temp_image;
                this.postProjectData.link1 = this.postProjectDataTemp.temp_link1;
                this.postProjectData.link2 = this.postProjectDataTemp.temp_link2;
                this.postProjectDataTemp.temp_title = '';
                this.postProjectDataTemp.temp_about = '';
                this.postProjectDataTemp.temp_image = '';
                this.postProjectDataTemp.temp_link1 = '';
                this.postProjectDataTemp.temp_link2 = '';
            axios.post('https://u2mvdypt0e.execute-api.us-east-2.amazonaws.com/production/postprojects', this.postProjectData).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            }) 
        },
        PostJob() {
            console.log(this.postJobDataTemp.temp_tasks)
                this.postJobData.workID = this.getPartitionKey();
                this.postJobData.company = this.postJobDataTemp.temp_company
                this.postJobData.title =  this.postJobDataTemp.temp_title;
                this.postJobData.description = this.postJobDataTemp.temp_description;
                this.postJobData.startDate = this.postJobDataTemp.temp_startDate;
                this.postJobData.endDate = this.postJobDataTemp.temp_endDate;
                this.postJobData.location = this.postJobDataTemp.temp_location;
                if (this.postJobDataTemp.temp_task1 != '') {
                    this.postJobData.tasks[0] = this.postJobDataTemp.temp_task1;
                } if (this.postJobDataTemp.temp_task2 != '') {
                    this.postJobData.tasks[1] = this.postJobDataTemp.temp_task2;
                } if (this.postJobDataTemp.temp_task3 != '') {
                    this.postJobData.tasks[2] = this.postJobDataTemp.temp_task3;
                } if (this.postJobDataTemp.temp_task4 != '') {  
                    this.postJobData.tasks[3] = this.postJobDataTemp.temp_task4;
                } if (this.postJobDataTemp.temp_task5 != '') {
                    this.postJobData.tasks[4] = this.postJobDataTemp.temp_task5;
                } if (this.postJobDataTemp.temp_task6 != '') {
                    this.postJobData.tasks[5] = this.postJobDataTemp.temp_task6;
                } 
                this.postJobData.company = '';
                this.postJobDataTemp.temp_title = '';
                this.postJobDataTemp.temp_description = '';
                this.postJobDataTemp.temp_startDate = '';
                this.postJobDataTemp.temp_endDate = '';
                this.postJobDataTemp.temp_location = '';
                this.postJobDataTemp.temp_task1 = '';
                this.postJobDataTemp.temp_task2 = '';
                this.postJobDataTemp.temp_task3 = '';
                this.postJobDataTemp.temp_task4 = '';
                this.postJobDataTemp.temp_task5 = '';
                this.postJobDataTemp.temp_task6 = '';
                this.postJobDataTemp.temp_company = '';
            axios.post('https://juuhsxsou8.execute-api.us-east-2.amazonaws.com/production/postjobs', this.postJobData).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            }) 
            this.noTasks = 1;
        },
        PostClass() {
                this.postClassData.classID = this.getPartitionKey();
                this.postClassData.className =  this.postClassDataTemp.temp_className;
                this.postClassData.description = this.postClassDataTemp.temp_description;
                this.postClassData.classCode = this.postClassDataTemp.temp_classCode;
                this.postClassData.classLink = this.postClassDataTemp.temp_classLink;
                this.postClassData.githubLink = this.postClassDataTemp.temp_githubLink;
                this.postClassDataTemp.temp_classCode = '';
                this.postClassDataTemp.temp_description = '';
                this.postClassDataTemp.temp_className = '';
                this.postClassDataTemp.temp_classLink = '';
                this.postClassDataTemp.temp_githubLink = '';
            axios.post('https://993ofk57b3.execute-api.us-east-2.amazonaws.com/production/postclass', this.postClassData).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            }) 
        },
        clearFields() {
            this.postClassDataTemp.temp_className = '';
            this.postClassDataTemp.temp_description = '';
            this.postClassDataTemp.temp_classCode = '';
            this.postClassDataTemp.temp_classLink = '';
            this.postClassDataTemp.temp_githubLink = '';
            this.postJobDataTemp.temp_title = '';
            this.postJobDataTemp.temp_company = '';
            this.postJobDataTemp.temp_description = '';
            this.postJobDataTemp.temp_startDate = '';
            this.postJobDataTemp.temp_endDate = '';
            this.postJobDataTemp.temp_location = '';
            this.postJobDataTemp.temp_tasks = '';
            this.postJobDataTemp.temp_company = '';
            this.postProjectDataTemp.temp_title = '';
            this.postProjectDataTemp.temp_about = '';
            this.postProjectDataTemp.temp_image = '';
            this.postProjectDataTemp.temp_link1 = '';
            this.postProjectDataTemp.temp_link2 = '';
        },
        addTask() {
            if (this.noTasks < 5) {
                this.noTasks = this.noTasks + 1;
            }
        },
        removeTask() {
            if (this.noTasks > 0) {
                this.noTasks = this.noTasks - 1;
            }
        },
        getPartitionKey() {
            var date = new Date();
            var year = String(date.getFullYear());
            console.log(year)
            var month = String(date.getMonth());
            console.log(month)
            var day = String(date.getDate());
            console.log(day)
            var hour = String(date.getHours());
            console.log(hour)
            var minutes = String(date.getMinutes());
            console.log(minutes)
            if (minutes < 10) {
                var key = String(10000000000-parseInt(100*(year + month + day + hour) + minutes));
            } else {
            var key = String(10000000000-parseInt(year + month + day + hour + minutes));
            }

            return key
        }
    }
}
</script>

<style scoped>

nav a{ 
    text-decoration: none;
    font-weight: bold;
    color: #b2c5b2;
    background-color: #3c5148;
    padding: 5px 20px;
    border-radius: 5px;
    transition: all 0.2s;
    outline-style: solid;
    outline-width: 2px;
}

.router nav a {
    margin: 10px;
}

nav a:hover {
    background-color: #b2c5b2;
    color: #3c5148;
    transition: all 0.2s;
    outline-style: solid;
    outline-width: 2px;
    outline-color: #3c5148;
}
.post-card {
    background-color: #3c5148;
    padding-top: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
}

.wrapper {
    display: flex;
    justify-content: center;
}
.exit {
    justify-self: flex-end;
}

.post-card h1 {
    color: #b2c5b2;
    padding-left: 30%;
    padding-right: 15%;
}

.post-title {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-of-inputs {
    padding-top: 0.5rem;
    background-color: #b2c5b2;
    padding-bottom: 1.5rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
}

.input-container, .plus-tab {
    margin-bottom: 0.5rem;
}

.input-container .plus-tab {
    margin-bottom: 0rem;
}
.control-buttons{
    display: flex;
    justify-content: center;
    align-items: center;
}

.task-buttons{
    background-color: #3c5148;
    color:#b2c5b2;
    outline: none;
    border-radius: 5px;
}
.task-buttons:hover {
    background-color: #b2c5b2;
    color: #3c5148;
}

select {
    width: 25%;
    border-radius: 4px;
    border-style: none;
    height: 15px;
    outline: none;
}

input {
    width: 50%;
    border-radius: 4px;
    border-style: none;
    padding: 5px 2px 5px 2px;
    height: 15px;
    outline: none;
}

textarea {
    width: 50%;
    height: 60px;
    border-radius: 4px;
    border-style: none;
    margin: -0.85rem 0 0.5rem 0;
}


@media only screen and (max-width: 950px) {
    
    .wrapper{
        width: auto;
    }
    .post-card {
        width: 100%;
        padding: 0;
        margin: 0;
        border-radius: 0;
    }

    .container-of-inputs {
        border-radius: 0;
    }

    nav a {
        outline-style: none;
    }
}

</style>