<template>
  <div class="flex flex-col min-h-screen">
   <LayoutHeader/>
    <div class="flex-grow bg-gray-50">
      <slot></slot>
    </div>
    <LayoutFooter/>
  </div>
</template>