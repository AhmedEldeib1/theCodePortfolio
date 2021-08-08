<template>

    <div class="container">
        <h1>Where you can find me?</h1>
        <div class="about">
            <a href="https://www.linkedin.com/in/ahmed-eldeib/" target="_blank">
                <i class="fab fa-linkedin fa-10x"></i>
            </a>
            <a href="https://github.com/AhmedEldeib1" target="_blank">
                <i class="fab fa-github fa-10x"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "about",
};
</script>

<style scoped>
h1{
    font-family: monospace;
}
.about{
    display: flex;
    justify-content: space-around;
    margin: 200px 0;
}
</style>