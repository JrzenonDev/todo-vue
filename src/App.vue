<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <img class="img-logo img-responsive" alt="Vue logo" src="./assets/logo.png">
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input
            type="text"
            class="form-input"
            placeholder="Novo Todo"
            v-model="todo.description"
          >
          <button class="btn btn-primary input-groupt-btn">Adicionar</button>
        </div>
          {{ todos }}
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      todos: [],
      todo: {
        checked: false
      }
    }
  },
  methods: {
    addTodo (todo) {
      console.log(this.todo)
      todo.id = Date.now()
      this.todos.push(todo)
    }
  }
}
</script>

<style scoped>
  .img-logo {
    width: 200px;
    margin: 0 auto;
  }
</style>
