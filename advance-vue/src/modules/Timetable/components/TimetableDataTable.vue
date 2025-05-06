<script setup>
import TimetableData from './TimetableData.vue';
import TimetableCaption from './TimetableCaption.vue';
</script>

<template>
    <div class="timetable-wrapper">
        <TimetableCaption />
        <table>
            <tr>
                <th></th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>
            <tr>
                <th>sat</th>
                <TimetableData :empty_cell="true" />
                <TimetableData />
                <TimetableData />
                <TimetableData />
                <TimetableData />
                <TimetableData />
            </tr>
        </table>
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


.timetable-wrapper table {
    border-collapse: collapse;
}

.timetable-wrapper table tr:first-child {
    border: 1px solid black;
}

.timetable-wrapper table tr:first-child th,
.timetable-wrapper table tr:first-child td {
    text-align: center;
    height: 30px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    background-color: white;
}

.timetable-wrapper table tr th {
    width: 20px;
    height: 60px;
    border: 2px solid #e2e8f0;
    border-radius: 5px;
    font-size: 10px;
}

.timetable-wrapper table tr td {
    width: 150px;
    height: 100px;
    background-color: #ffff;
}
</style>