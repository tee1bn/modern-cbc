<script setup>
import { 
    HomeIcon, 
    RefreshCcw, 
    PlusIcon, 
    FilePenLine,
    CircleUserRound,
    MenuSquareIcon,
} from 'lucide-vue-next';

defineEmits(['toggleMenu', 'toggleFullMenu'])

</script>

<template>
    <nav class="fixed bottom-0 left-0 w-full bg-white shadow-t flex justify-around p-2 lg:hidden">
        <button class="btn flex flex-col items-center">
            <HomeIcon class="text-primary-light"/>
            <span class="text-xs text-primary-light font-bold">Home</span>
        </button>
        <button class="btn flex flex-col items-center">
            <RefreshCcw  class="text-primary-light"/>
            <span class="text-xs text-primary-light font-bold">Convert</span>
        </button>

        <!-- center + button -->
        <button
          @click="$emit('toggleMenu')"
          class="btn bg-blue-500 text-white w-12 h-12 rounded-full -mt-6 flex items-center justify-center shadow-lg">

          <PlusIcon class="text-primary-light font-bold"/>

        </button>

        <button class="btn flex flex-col items-center">
            <FilePenLine class="text-primary-light"/>
            <span class="text-xs text-primary-light font-bold">Edit</span>
        </button>

        <button 
            @click="$emit('toggleFullMenu')"
            class="btn flex flex-col items-center">
            <MenuSquareIcon class="text-primary-light"/>
            <span class="text-xs text-primary-light font-bold">Menu</span>
        </button>
    </nav>
</template>
