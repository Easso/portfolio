<template>
    <div class="main-container">
        <div class="card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">
          <div class="header">
            <div class="company"><h2>{{ lambdaReturnData.Items[index].company }}</h2></div>
            <div class="position"><h3>{{ lambdaReturnData.Items[index].title }}</h3></div>
            <div class="information">
              <div class="dates">
                <div class="start"><strong>{{ lambdaReturnData.Items[index].startDate }} </strong></div>
                <div class="end"><strong>{{ lambdaReturnData.Items[index].endDate }}</strong></div>
              </div>
              <div class="location"><strong>{{ lambdaReturnData.Items[index].location }}</strong></div>
            </div>
          </div>
          <p class="jobDescription">{{ lambdaReturnData.Items[index].description }}</p>
          <div class="task-container">
            <div class="tasks" v-for="itemsT in lambdaReturnData.Items[index].tasks">
              <div class="task"><strong>{{ itemsT }}</strong></div> 
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
            lambdaReturnData: {}
        }
    },
    methods: {
        GetJobs() {
            axios.get('https://juuhsxsou8.execute-api.us-east-2.amazonaws.com/production/getjobs').then(response => {
                console.log(response);
                this.lambdaReturnData = response.data;
                this.lambdaReturnData.Items.sort((a, b) => b.workID - a.workID);
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.GetJobs();
    }
}
</script>

<style scoped>
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 10px 10px 10px
}

p {
  margin: 10px 0 0 0;
}

p:not(:last-child) {
  margin-bottom: 1.5em;
}

h2, h3 {
  margin: 0 0 5px 0;
}

.card {
  max-width: 300px;
  /* Remove fixed height */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 35px;
  margin: 10px 10px 10px 10px;

  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  /* Allow the card to grow as needed */
  overflow: hidden;
}

.header {
  max-width: 90%;
  color: #1b2727;
  margin: -10px 0 0 0;
}

.information{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: x-small;
  margin-bottom: 10px;
}

.dates {
  display: flex;
  flex-direction: row;
  color: #2c3e50;
}

.jobDescription {
  /* Add word wrapping and spacing for readability */
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 8px;
  border-radius: 5px;
}

.start:after {
  content: '\0020 \2013';
}

.end:before {
  content: '\2013 \0020'
}


.location {
  align-self: flex-end;
}

.task-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5px; /* Add spacing between tasks */
}
.tasks {
  font-size: small;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task {
  outline-style: solid;
  outline-width: 0.1rem;
  outline-color: #1b2727;
  padding: 8px;
  margin: 8px;
  border-radius: 5px;
}
@media only screen and (max-width: 950px) {
  .card {
    /* Allow cards to shrink/grow as needed on smaller screens */
    height: auto;
    padding: 20px;
  }
}

</style>