<script setup>
const tab = ref(1)
const currentTab = (tabNum) => (tab.value = tabNum)
</script>

<template>
  <div w-full text-center px23>
    <div flex items-center justify-center space-x-2>
      <img src="@/assets/images/Vector.png" alt="logo" w-11>
      <h3 mt-1 font-bold text-purple-700>LOGO</h3>
    </div>

    <h1 text-3xl mt-3 mb1>Sign up to TNC</h1>

    <div flex justify-center space-x-2 text-xs>
      <h3 text-gray-500 tracking-wide>Already have an account?</h3>
      <router-link to="login" text-blue-800>Sign in</router-link>
    </div>

    <div class="bg-gray-200/50 flex items-center justify-between mt4 text-sm w-full p1 rounded-2">
      <button @click="currentTab(1)" :class="tab === 1 ? 'bg-blue-700 text-white' : 'text-gray-400'"
        class="w-full py-3 rounded-2 font-bold">PERSON</button>
      <button @click="currentTab(2)" :class="tab === 2 ? 'bg-blue-700 text-white' : 'text-gray-400'" class="w-full rounded-2
      font-bold py-3 text-gray-400">COMPANY</button>
    </div>

    <div v-if="tab === 1">PERSON</div>

    <div v-if="tab === 2">COMPANY</div>
  </div>
</template>
