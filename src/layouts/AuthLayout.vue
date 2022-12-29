<script setup>
</script>

<template>
  <div class="shadow" grid lg:grid-cols-2 layout my-6 rounded-4>
    <div flex flex-col items-center justify-center>
      <router-view />
    </div>

    <div bg-blue-50 hidden lg:flex rounded-r-4>
      <img src="../assets/images/custom-illustration-1.svg" alt="illustration" >
    </div>
  </div>
</template>

<style>
.shadow {
  --un-shadow: var(--un-shadow-inset) 0px -10px 54px -5px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
  --un-shadow-opacity: 1;
  --un-shadow-color: rgba(212, 212, 216, var(--un-shadow-opacity));
}
</style>
