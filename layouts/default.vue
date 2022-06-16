<template>
<div>
    <div class="s-navbar-container">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/categories">Categories</NuxtLink>
    </div>
    <main>
        <slot/>
    </main>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.s-navbar-container {
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #eaeaeb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.s-navbar-container a {
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}

.s-navbar-container a:hover {
  color: #333;
}
</style>
