<template>
  <div flex items-center justify-center space-x-2>
    <img src="@/assets/images/Vector.png" alt="logo" w-11>
    <h3 mt-1 font-bold text-purple-700>LOGO</h3>
  </div>

  <h1 text-3xl mt-3 mb1>Sign in to TNC</h1>

  <div flex justify-center space-x-2 text-xs>
    <h3 text-gray-500 tracking-wide>Not registered?</h3>
    <router-link to="register" text-blue-800>Sign Up</router-link>
  </div>
</template>
