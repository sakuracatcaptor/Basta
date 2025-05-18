<template>
  <div>
    <h1> {{ formattedTime }}</h1>
    <button @click="startTimer" :disabled="isRunning">Iniciar</button>

    <p v-if="state.isOver"> Tiempo terminado  </p>

    <button @click="resetTimer()">Cualquier tecla usada</button>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onBeforeUnmount } from 'vue'

// Estado inicial
const state = reactive({
  seconds: 25,
  isOver: false
})

const isRunning = ref(false)
let interval = null

// Formatear el tiempo
const formattedTime = computed(() => {
  const minutes = Math.floor(state.seconds / 60).toString().padStart(2, '0')
  const secs = (state.seconds % 60).toString().padStart(2, '0')
  return `${minutes}:${secs}`
})

// Función para iniciar el timer
function startTimer() {
  if (state.seconds == 0) {
    state.seconds = 25;
  }

  if (isRunning.value) return

  isRunning.value = true

  interval = setInterval(() => {
    if (state.seconds > 0) {
      state.seconds--
    } else {
      clearInterval(interval)
      isRunning.value = false
      state.isOver = true
    }
  }, 1000)
}

function resetTimer () {
    state.seconds = 25;

    if (isRunning.value) return

  isRunning.value = true

  interval = setInterval(() => {
    if (state.seconds > 0) {
      state.seconds--
    } else {
      clearInterval(interval)
      isRunning.value = false
      state.isOver = true
    }
  }, 1000)
}

// Limpiar el interval si el componente se desmonta
onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>