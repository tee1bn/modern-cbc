<script setup>
import { ref } from 'vue';
import { 
  TrendingUp, 
  Flame,
  Eye,
  Layers,
  Ticket,
} from 'lucide-vue-next';

const props = defineProps({
    open: Boolean
})

const emit = defineEmits(['close'])

</script>
<template>
  <transition
     enter-active-class="transition ease-out duration-300"
     enter-from-class="opacity-0 translate-y-4"
     enter-to-class="opacity-100 translate-y-0"
     leave-active-class="transition ease-in duration-200"
     leave-from-class="opacity-100 translate-y-0"
     leave-to-class="opacity-0 translate-y-4"
  >
      <div
        v-if="props.open"
        class="fixed inset-0 bg-black/1 flex items-end justify-center z-50 pb-24"
        @click.self="emit('close')"
    >
        <div class="bg-white p-6 rounded-xl shadow-lg grid grid-cols-2 gap-4 w-80">
          <button class="btn flex flex-col items-center">
            <TrendingUp class="text-red-600 font-bold" /> 
            <span class="text-xs text-primary-light font-bold flex flex-row">Hot Prediction</span>
          </button>
          <button class="btn flex flex-col items-center">
            <Ticket class="text-primary-light font-bold"/>
            <span class="text-xs text-primary-light font-bold">Free Bet Codes</span>
          </button>
          <button class="btn flex flex-col items-center">
             <Eye class="text-primary-light font-bold"/>
            <span class="text-xs  text-primary-light font-bold">Bet Viewer</span>
          </button>
          <button class="btn flex flex-col items-center">
             <Layers class="text-primary-light font-bold"/>
            <span class="text-xs text-primary-light font-bold">Pools Bet Codes</span>
          </button>
        </div>
    </div>
  </transition>

</template>
