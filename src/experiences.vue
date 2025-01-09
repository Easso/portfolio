<template>
    <div :class="open ? 'experiences open' : 'experiences'" @click="$emit('toggleOpen', index)">
        <div class="title">{{ experiences.title }}</div>
        <div class="cards">
            <Professional v-if="index==0"/>
            <Academic v-if="index==1"/>
        </div>
    </div>
</template>

<script>
import ProjectCard from './components/ProjectsCard.vue';
import Professional from './components/Professional.vue';
import Academic from './components/Academic.vue';
export default {
    name: 'EXPERIENCE',
    props:['experiences', 'index', 'open'],
    components: {
    ProjectCard,
    Professional,
    Academic
}
}
</script>

<style scoped>
.title {
    font-weight: 900;
    font-size:x-large;
}

.cards{
    margin-top: -20px;
}

@media only screen and (max-width: 950px) {
    
}

</style>