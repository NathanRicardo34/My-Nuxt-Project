<script lang='ts' setup>
// import { storeToRefs } from 'pinia';
// import { useCounterStore } from '~/stores/myStore';
// const counterStore = useCounterStore()
// const { count } = storeToRefs(counterStore)
definePageMeta({
    middleware: ["login"]
})
// const response = $fetch('/api/hello')
// console.log(response)
// const { sayHello } = useUtils()
// const { $sayHello } = useNuxtApp()
// $sayHello('nathan')
// sayHello()
// const counter = useState('counter', () => Math.round(Math.random() * 1000))
// const counter = ref(0)
// const counter = useCounter()
</script>
<template>
    <div class="Main">
        <!-- <div>
            Counter: {{ counter }}
            <button @click="counter++">+</button>
            <button @click="counter--">-</button>
        </div>
        <div>
            <Counter />
        </div> -->
        <!-- <ContentDoc /> -->
        <!-- <Alert /> -->
        <!-- <ProfileHeaderAvatar /> -->
        <!-- <img src="@/assets/1.jpg"/> -->
    </div>
</template>
<style lang='scss' scoped>

</style>