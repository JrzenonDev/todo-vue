<template>
  <div class="container grid-xs py-2">
    <form @submit.prevent="addTodo(todo)">
      <div class="input-group">
        <input type="text" v-model="todo.description" class="form-input" placeholder="Novo todo">
        <button class="btn btn-primary input-group-btn" :class="{ loading }">Adicionar</button>
      </div>
    </form>
    <div class="todo-list">
      <todo v-for="t in todos" :key="t.id" @toggle="toggleTodo" @remove="removeTodo" :todo="t"/>
    </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Todo
  },
  data () {
    return {
      todo: {
        checked: false
      }
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),
    async addTodo (todo) {
      await this.$store.dispatch('addTodo', todo)
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
