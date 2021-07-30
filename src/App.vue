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
        <div class="todo-list">
          <div class="tile flex-centered" v-for="t in todos" :key="t.key">
            <div class="tile-icon">
              <i class="icon icon-time centered"></i>
            </div>
            <div class="tile-content">
              <div class="tile-subtitle">
                {{ t.description }}
              </div>
            </div>
            <div class="tile-action">
              <button class="btn btn-link">Concluído</button>
              <button class="btn btn-link">
                <span class="text-error">Remover</span>
              </button>
            </div>
          </div>
        </div>
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
      this.todo = { checked: false }
    }
  }
}
</script>

<style scoped>
  .img-logo {
    width: 200px;
    margin: 0 auto;
  }
  .todo-list {
    padding-top: 2rem;
  }
</style>
