export default defineNuxtRouteMiddleware((to, from) => {
    console.log('global middle')
    console.log(to)
    console.log(from)
})