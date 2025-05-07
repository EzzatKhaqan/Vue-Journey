<script setup>
import TimetableDataTable from '../components/TimetableDataTable.vue';
import TimetableData from "../components/TimetableData.vue";
import { onBeforeMount, ref } from 'vue';

const data = ref(
    [
        [
            {
                weekday: "sat",
                slots: [
                    { slot: 1, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 2, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 3, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 4, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 5, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 6, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                ],
            },
            {
                weekday: "sun",
                slots: [
                    { slot: 1, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 2, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 4, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 6, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                ],
            },
            {
                weekday: "wed",
                slots: [
                    { slot: 1, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 2, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 3, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                    { slot: 4, data: { teacher: "ABC", subject_name: "abc", location: "aa", room: 124 } },
                ],
            }
        ],
    ]
);

</script>
<template>
    <TimetableDataTable :data="data">
        <template #body="{ day }">
            <TimetableData v-for="(slot, slotIndex) in day.slots" :key="slotIndex" :data="slot.data" />
        </template>
    </TimetableDataTable>
</template>
