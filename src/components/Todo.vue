<template>
  <div class="tile" :class="{checked: todo.checked}">
    <div class="tile-icon">
      <i class="icon" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>
    </div>
    <div class="tile-content">
      <p class="tile-subtitle">{{ todo.description }}</p>
      <p class="tile-actions">
        <button @click="$emit('toggle', todo)" class="btn btn-link">
          <span v-if="todo.checked">Desmarcar</span>
          <span v-else>Concluído</span>
        </button>
        <button @click="$emit('remove', todo)" class="btn btn-link">
          <span class="text-error">Remover</span>
        </button>
      </p>
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

<style scoped>
  .checked {
    text-decoration: line-through;
    color: lightgray;
  }

  .tile {
    box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
  }
</style>
