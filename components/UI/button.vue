<script setup lang="ts">
interface Props{
  text?: string
  type?: string
  textClass?: string
  disabled?: boolean
  loading?: boolean
  variant?: 'white'| 'dark'| 'blue'| 'gray'
  size?: 'sm'| 'md'| 'lg'
  wrapperClass?: string,
}
withDefaults(defineProps<Props>(), {
  text: 'Button',
  type: 'button',
  disabled: false,
  loading: false,
  variant: 'dark',
  size: 'lg',
  textClass: '',
})
const sizes = {
  sm: 'px-4 py-2 rounded-md text-xs',
  md: 'px-5 py-[10px] rounded-lg text-sm',
  lg: 'px-6 py-3 rounded-lg text-base'
}
const variants = {
  white: 'bg-white text-black hover:bg-black hover:text-white',
  dark: 'bg-black text-white hover:text-black hover:bg-white',
  blue: 'bg-blue-100 text-white hover:bg-white hover:text-blue-300',
  gray: 'text-black bg-gray-200'
}
</script>

<template>
  <button class="active:scale-95 flex justify-center items-center gap-1 transition-all"
  :class="[sizes[size],variants[variant],wrapperClass]" v-bind="{disabled, type}"
  >
    <slot name="prefix"></slot>
    <span>{{text}}</span>
    <slot name="suffix"></slot>
  </button>
</template>

<style scoped>

</style>