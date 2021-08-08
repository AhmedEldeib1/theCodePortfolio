<template>
    <div class="header">
        <div class="container">
            <nav>
                <router-link to="/" tag="li"><a href="">Home</a></router-link>
            </nav>
            |
            <nav>
                <router-link to="/education" tag="li"
                    ><a href="">Education</a></router-link
                >
            </nav>
            |
            <div>
                <h1>Ahmed Eldeib</h1>
            </div>
            |
            <nav>
                <router-link to="/about" tag="li"
                    ><a href="">About</a></router-link
                >
            </nav>
            |
            <nav>
                <router-link to="/cv" tag="li"
                    ><a href="">My CV</a></router-link
                >
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
};
</script>

<style scoped>
.header .container {
    display: flex;
    background: grey;
    justify-content: space-around;
    align-items: center;
}

.bg {
    background-color: darkkhaki;
}
h1 {
    font-family: monospace;
    color: beige;
}
</style>
