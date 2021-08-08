<template>
    <div id="nav">
        <AppHeader></AppHeader>
    </div>
    <router-view />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
    name: "App",
    components: {
        AppHeader,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    // color: black;
}

#nav {
    padding: 0px;

    a {
        font-weight: bold;
        color: white;
        text-decoration: none;
        &:hover {
            color: yellow;
        }

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
