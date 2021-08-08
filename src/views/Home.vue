<template>
    <div class="container">
        <div class="card mb-3" style="max-width: 600px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                        src="@/assets/myPic.jpg"
                        class="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Front End Developer</h5>
                        <p class="card-text">
                            ❝ I'm an innovative Front End Developer with +2
                            years of experience building and maintaining
                            responsive websites in the recruiting industry.
                            Proficient in HTML, CSS, JavaScript, jQuery and
                            Vue.js; likewise my familiarity with modern
                            libraries and frameworks. ❞
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}
.card {
    margin: 100px 0px;
    border: 1px blue solid;
}
img {
    border-radius: 30px;
}
.row {
    margin: 100px 0px;
}

h5 {
    font-family: monospace;
}
</style>
