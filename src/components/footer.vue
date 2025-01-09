<template>
    <div class="footer-bar">
        <div class="arrow-box" title="To top">
            <a href="#nav"><img class="up-arrow" src="../assets/icons8-back-arrow-50.png"></a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
    text-decoration: none;
}

.footer-bar {
    height: 100px;

    background-color: #14181896;

    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
}

.arrow-box {
    width: 100px;

    background-color: #b2c5b2;
    border-radius: 10px;
    padding: 4px 0 0 0;
    margin: 0px 30px 0px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.up-arrow {
    transform: rotate(90deg);
}

@media only screen and (max-width: 950px) {
    .footer-bar {
        justify-content: center;
    }
    .arrow-box {
        margin: 0;
    }
}
</style>