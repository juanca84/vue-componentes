<template>
    <div class="container">
        <app-header/>
        <ejemplo-post/>
        <app-footer/>
    </div>
</template>

<script>
import AppHeader from './components/Header'
import EjemploPost from './components/Posts'
import AppFooter from './components/Footer'
export default {
  name: 'App',
  components: {
    AppHeader,
    EjemploPost,
    AppFooter
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
</style>
