<script setup lang="ts">

</script>

<template>
  <div class="w-full h-full ">
<!--    <Vue3Marquee duration="80">-->
<!--      <p v-for="item in 5"-->
<!--         class="mx-10 text-[100px] font-bold banner-text py-20"-->
<!--      >Front-End Pro Courses</p>-->
<!--    </Vue3Marquee>-->
<!--    <img src="/images/logo-blue.png" alt=""-->
<!--    class="w-[200px] h-[250px] object-cover m-auto"-->
<!--    >-->
<div class="relative h-[650px] max-md:h-[500px]">
  <video autoplay playsinline loop muted id="video-bg" class="h-[100%] object-cover w-full">
    <source src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" type="video/mp4" class="">
  </video>
  <p class="container text-4xl text-white font-bold absolute top-0 hero-title blend max-md:!text-[4em] max-md:mt-10 max-lg:!text-[7em] max-lg:mt-10 mt-10">Where Creativity<br />&amp; Strategy Meet</p>
</div>
  </div>

</template>

<style scoped>
::selection {
  background: $white;
  color: $black;
  mix-blend-mode: difference;
}
::-moz-selection {
  background: $white;
  color: $black;
}
.banner-text{
  text-shadow: 0px 0px 1px black;
  color: white;
}
.hero-title {
  font-size: 8vw;
  line-height: 1em;
}
.blend{
  mix-blend-mode: difference !important;
  z-index: 2;
}

</style>