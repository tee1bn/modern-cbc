<script setup>
import { ref } from 'vue';
import BottomNavigation from './BottomNavigation.vue';
import ExpandableMenu from './ExpandableMenu.vue';
import SideNavigationBar from './SideNavigationBar.vue';

const isMenuOpen = ref(false)
const isFullMenuOpen = ref(false)

function toggleFullMenu() {
    isFullMenuOpen.value = !isFullMenuOpen.value
    console.log(isFullMenuOpen.value);
    
}

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>

    <BottomNavigation @toggleMenu="toggleMenu"/>

    <ExpandableMenu :open="isMenuOpen" @close="toggleMenu"/>

    <SideNavigationBar @toggleFullMenu="toggleFullMenu" :open-full-menu="isFullMenuOpen" @close="toggleFullMenu"/>

    <main>
        <slot />
    </main>
</template>