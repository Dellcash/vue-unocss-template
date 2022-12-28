<template>
  <div>
    <div flex items-center justify-center space-x-2>
      <img src="@/assets/images/Vector.png" alt="logo" w-11>
      <h3 mt-1 font-bold text-purple-700>LOGO</h3>
    </div>

    <h1 text-3xl mt-3 mb1>Sign up to TNC</h1>

    <div flex justify-center space-x-2 text-xs>
      <h3 text-gray-500>Already have an account?</h3>
      <router-link to="login" text-blue-800>Sign in</router-link>
    </div>
  </div>
</template>
