<template>
  <div class="container-board">
    <div class="columns">
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Todo</div>
          </div>
          <div class="panel-body">
            <Todo
              v-for="(todo, index) in uncheckeds"
              :key="index"
              :todo="todo"
            />
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Done</div>
          </div>
          <div class="panel-body">
            {{ checkeds }}
          </div>
          <div class="panel-footer">
            <!-- buttons or inputs -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Todo from '@/components/Todo.vue'

export default {
  components: { Todo },
  name: 'Kanban',
  computed: {
    ...mapGetters(['uncheckeds', 'checkeds'])
  }
}
</script>

<style scoped>
.container-board {
  height: calc(100vh - 200px);
  padding: 10px;
}

.columns {
  height: 100%;
}

.columns .column .panel {
  height: 100%;
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
}
</style>
