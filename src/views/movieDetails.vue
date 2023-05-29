<template>
    <div class="movie-details">
        <h1>This is a page for {{ title }}</h1>
    </div>
</template>

<script>
export default {
    //receive the prop
    props: ["title"]
}
</script>