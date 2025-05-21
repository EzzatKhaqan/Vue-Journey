<script setup>
import { computed, ref } from 'vue';
import { Menu } from '../components/index.js';
import { useLayout } from './composables/layout.js';

const { toggleSidebar } = useLayout();
const model = ref([

    {
        label: 'Home',
        items: [
            {
                label: 'Home',
                icon: 'pi pi-home',
                to: '/',
            },
        ],
    },
    {
        label: 'UI Components',
        items: [
            {
                label: 'Timetable ',
                to: '/timetable',
                icon: 'pi pi-table',
            },
        ],
    },
]);

</script>

<template>

    <div class="sidebar">
        <div class="sidebar-toggle-btn" @click="toggleSidebar">
            <i class="pi pi-angle-double-left"></i>
        </div>
        <div class="sidebar-content">
            <Menu :model="model" />
        </div>
    </div>

</template>

<style></style>