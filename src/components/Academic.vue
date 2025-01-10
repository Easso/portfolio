<template>
    <div class="main-container">
      <div class="card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">
        <div class="titles">
          <h2>{{ lambdaReturnData.Items[index].classCode }}</h2>
          <h4>{{ lambdaReturnData.Items[index].className }}</h4>
        </div>
        <p>{{ lambdaReturnData.Items[index].description }}</p>
        <div class="links">
          <a class="link" :href="lambdaReturnData.Items[index].classLink" target="_blank" title="Link to class">
            <img src="../assets/link-alt-1-svgrepo-com.svg" :href="lambdaReturnData.Items[index].classLink">
          </a>
          <a v-if="lambdaReturnData.Items[index].githubLink != ''" class="link" :href="lambdaReturnData.Items[index].githubLink" target="_blank" title="Link to projects">
            <img src="../assets/github-mark.svg" alt="">
          </a>
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
        GetProjects() {
            axios.get('https://993ofk57b3.execute-api.us-east-2.amazonaws.com/production/getclass').then(response => {
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
.main-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 10px 10px 10px
}

p {
  margin: 0;
}

p:not(:last-child) {
  margin-bottom: 1.5em;
}

.card {
  max-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 500px;
  height: 300px;
  padding: 35px;
  margin: 10px 10px 10px 10px;

  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

}

.link img {
  height: 1.5rem;
  padding: 0 2px 0 2px
}

.links {
  align-self: flex-end;
}

@media only screen and (max-width: 950px) {
  .card {
  max-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 500px;
  padding: 35px;
  margin: 10px 10px 10px 10px;

  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

}
}
</style>