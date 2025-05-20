<script setup>
import { ref } from 'vue';
import { Menu } from '../components/index.js';

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

        <Menu :model="model" />
    </div>

</template>

<style>
.sidebar {
    position: fixed;
    width: 250px;
    height: 100%;
    background: var(--e-white);
    border: 1px solid var(--e-border-color);
    margin: 0px 10px 10px 0px;
    padding: 10px;
    overflow: auto;
}
</style>