<script lang='ts' setup>
const nuxt = useNuxtApp()

console.log(nuxt)

</script>
<template>
<div>
    event id: {{ $route.params.id }}
</div>
</template>
<style lang='scss' scoped>

</style>