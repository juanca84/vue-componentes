<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Título</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{post.id}}</td>
            <td>{{post.titulo}}</td>
            <td>{{post.body}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'EjemploPost',
  data () {
    return {
      posts: [
        { id: 1, titulo: 'post 1', body: 'cualquier datos' },
        { id: 2, titulo: 'post 2', body: 'cualquier datos' },
        { id: 3, titulo: 'post 3', body: 'cualquier datos' },
        { id: 4, titulo: 'post 4', body: 'cualquier datos' }
      ]
    }
  }
}
</script>

<style scoped>
  .center {
    text-align: center;
  }
</style>
