<template>
  <div class="w-full h-[100px] bg-black max-md:pt-2">
    <div class="xl:container w-full h-full flex justify-between items-center">
      <NuxtLink to="/"><img src="/images/logo.png" alt="" class="w-[120px] h-full object-cover cursor-pointer"></NuxtLink>
      <div class="flex items-center max-md:hidden">
        <ul class="flex items-center mr-4">
          <li v-for="(index, idx) of navMenu" :id="idx" class="text-white mx-2 text-md cursor-pointer hover:text-gray-400 transition-all active:scale-95">{{index}}</li>
        </ul>
        <UIButton text="Позвонить" variant="white"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const navMenu = ['Курсы','Бесплатный урок', 'Контакты']
</script>