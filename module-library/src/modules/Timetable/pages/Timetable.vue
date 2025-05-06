<script setup>
import { ref } from 'vue';
import TimetableDataTable from '../components/TimetableDataTable.vue';
import TimetableData from "../components/TimetableData.vue";
const weekday = ref(["sat", "sun", "mon", "tue", "wed", "thu"]);
const timetable = ref(
    [
        {
            weekday: 0,
            data: [
                { slot: 1, data: {} },
                { slot: 2, data: {} },
                { slot: 3, data: {} },
                { slot: 4, data: {} },
                { slot: 5, data: {} },
                { slot: 6, data: {} }
            ]
        },
        {
            weekday: 1,
            data: [
                { slot: 1, data: {} },
                { slot: 2, data: {} },
                { slot: 3, data: {} },
                { slot: 4, data: {} },
                { slot: 5, data: {} },
                { slot: 6, data: {} }
            ]
        },
        {
            weekday: 2,
            data: [
                { slot: 1, data: {} },
                { slot: 2, data: {} },
                { slot: 3, data: {} },
                { slot: 4, data: {} },
                { slot: 5, data: {} },
                { slot: 6, data: {} }
            ]
        },
        {
            weekday: 3,
            data: [
                { slot: 1, data: {} },
                { slot: 2, data: {} },
                { slot: 3, data: {} },
                { slot: 4, data: {} },
                { slot: 5, data: {} },
                { slot: 6, data: {} }
            ]
        },
        {
            weekday: 4,
            data: [
                { slot: 1, data: {} },
                { slot: 2, data: {} },
                { slot: 3, data: {} },
                { slot: 4, data: {} },
                { slot: 5, data: {} },
                { slot: 6, data: {} }]

        },
        {
            weekday: 5,
            data: [
                { slot: 1, data: {} },
                { slot: 2, data: {} },
                { slot: 3, data: {} },
                { slot: 4, data: {} },
                { slot: 5, data: {} },
                { slot: 6, data: {} }
            ]
        },
    ]
);

function handleFun(weekday, slot) {
    timetable.value[weekday].data.
        find(s => s.slot == slot.slot).data = { location: 123, teacher: "ABC", subject: " تحلیل ساختمان" };
}

</script>
<template>
    <TimetableDataTable :data="timetable" :weekday="weekday">
        <template #body="{ day }">
            <TimetableData v-for="(slot, slotIndex) in day.data" :key="slotIndex" :data="slot.data"
                @click="handleFun(day.weekday, slot)" />
        </template>
    </TimetableDataTable>
</template>
