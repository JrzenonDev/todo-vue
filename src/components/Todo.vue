<template>
  <div class="title flex-centered">
    <div class="title-icon">
      <i class="icon icon-time"></i>
    </div>
    <div class="tile-content">
      <div class="tile-subtitle">
        {{ todo.description }}
      </div>
      <div>{{ todo.checked }}</div>
    </div>
    <div class="tile-action">
      <button @click="$emit('toggle', todo)" class="btn btn-link">
        <span v-if="todo.checked">Desmarcar</span>
        <span v-else>Concluído</span>
      </button>
      <button class="btn btn-link">
        <span class="text-error">Remover</span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
