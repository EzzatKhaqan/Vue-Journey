<script setup>
import TimetableCaption from './TimetableCaption.vue';
import TimetableHeader from './TimetableHeader.vue';
const props = defineProps({
    data: Object,
    weekday: Array
});

</script>

<template>
    <div class="timetable-wrapper">
        <TimetableCaption />
        <div class="timetable-datatable">
            <table>
                <tr>
                    <TimetableHeader />
                </tr>
                <tr v-for="(day, dayIndex) in props.data" :key="dayIndex">
                    <th>{{ props.weekday[day.weekday] }}</th>
                    <slot name="body" :day="day" />
                </tr>
            </table>
        </div>
    </div>
</template>

<style>
.timetable-wrapper {
    padding: 35px;
    background: var(--e-white);
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.timetable-datatable {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.timetable-wrapper table {
    border-collapse: collapse;
}

.timetable-wrapper table tr:first-child {
    border: 1px solid black;
}

.timetable-wrapper table tr th {
    min-width: 30px;
    padding: 5px;
    border: 2px solid #e2e8f0;
    font-size: 14px;
    font-weight: 300;
}

.timetable-wrapper table tr td {
    width: 150px;
    height: 100px;
    background-color: #ffff;
}
</style>