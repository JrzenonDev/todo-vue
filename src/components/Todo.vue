<template>
  <div class="title flex-centered">
    <div class="title-icon">
      <i class="icon icon-time"></i>
    </div>
    <div class="tile-content">
      <div class="tile-subtitle">
        {{ todo.description }}
      </div>
    </div>
    <div class="tile-action">
      <button class="btn btn-link">Concluído</button>
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
