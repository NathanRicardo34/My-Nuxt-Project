<script lang='ts' setup>
const counter = useCounter()
</script>
<template>
<div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
</div>
</template>
<style lang='scss' scoped>

</style>