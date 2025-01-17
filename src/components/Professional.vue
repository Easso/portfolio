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
          <ul class="tasks">
            <li v-for="itemsT in lambdaReturnData.Items[index].tasks" :key="itemsT" class="task">
              {{ itemsT }}
            </li>
          </ul>
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
  height: 700px; /* Fixed height for regular screens */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space out content evenly */
  align-items: center;

  padding: 35px;
  margin: 10px 10px 10px 10px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  overflow: hidden; /* Prevent layout breaking */
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
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 8px;
  border-radius: 5px;

  flex-grow: 1; /* Let the description take up flexible space */
  display: flex;
  align-items: flex-start; /* Align description to the top */
  justify-content: flex-start;
  overflow: hidden; /* Prevent overflow for larger screens */
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
  width: 100%;
  margin-top: 10px;
}

.tasks {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

.task {
  margin-bottom: 5px;
  font-size: small;
  color: #1b2727;
}
@media only screen and (max-width: 950px) {
  .card {
    height: auto; /* Allow auto height for smaller screens */
    padding: 20px;
  }

  .jobDescription {
    height: auto; /* Let description content expand naturally */
    overflow: visible; /* Show full description on smaller screens */
    flex-grow: unset;
  }

  .task-container {
    max-height: none; /* Remove height restriction for tasks */
  }
}

</style>