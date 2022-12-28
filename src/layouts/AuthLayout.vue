<script setup>
</script>

<template>
  <main grid lg:grid-cols-2 h-screen layout>
    <div border my-5 flex flex-col items-center justify-center>
      <router-view />
    </div>

    <div my-5 bg-blue-50 hidden lg:flex>
      <img src="../assets/images/custom-illustration-1.svg" alt="illustration">
    </div>
  </main>
</template>
