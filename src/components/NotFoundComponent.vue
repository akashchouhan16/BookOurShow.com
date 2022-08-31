<template>
    <div class="non-found-container">
        <div class="main-container">
            <router-link to="/"><img src="@/assets/404-not-found.webp" alt="NOT FOUND :("></router-link>
        </div>
    </div>
    
</template>

<script src="./scripts/NotFoundComponent"></script>

<style scoped>

.non-found-container{
    background-color: whitesmoke;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}
.main-container{
    margin: 1em;
    padding: 1em;
    border-radius: 1em;
    background-color: white;
}
.main-container img {
    max-width: 80vw;
    border-radius: 1em;
}
.main-container:hover{
    cursor: pointer;

}
</style>