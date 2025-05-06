<script setup></script>

<template>

    <div class="sidebar">

        <h3>Sidebar</h3>
        <router-link to="/timetable">Timetable</router-link> <br>

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