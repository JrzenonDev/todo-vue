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
          <button
            class="btn btn-primary input-groupt-btn"
          >
            Adicionar
          </button>
        </div>
        <div class="todo-list">
          <Todo class="tile flex-centered" v-for="t in todos" :key="t.id" @toggle="toggleTodo" :todo="t" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  },
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
    },
    toggleTodo (todo) {
      const index = this.todos.findIndex(item => item.id === todo.id)
      if (index > -1) {
        const checked = !this.todos[index].checked
        this.$set(this.todos, index, { ...this.todos[index], checked })
      }
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
