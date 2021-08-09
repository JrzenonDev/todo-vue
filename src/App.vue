<template>
  <div class id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link class="btn btn-link" to="/">Home</router-link>
          <router-link class="btn btn-link" to="/kanban">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Todo Vue JS">
        </section>
        <section class="navbar-section">
          <a href="https://github.com/JrzenonDev/" class="btn btn-link" target="_blank">GitHub</a>
        </section>
      </header>
      <router-view class="pt-2" />
    </div>
  </div>
</template>
