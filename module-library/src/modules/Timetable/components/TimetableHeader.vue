<script>
</script>
<template>

    <th></th>
    <td v-for="i in 6" :key="i">
        <div>{{ i }}</div>
        <div class="time">09:00 - 09:45</div>
    </td>
</template>

<style>
.timetable-wrapper table tr:first-child th,
.timetable-wrapper table tr:first-child td {
    text-align: center;
    height: 30px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    background-color: white;
}

.timetable-wrapper table tr:first-child th {
    min-width: 30px;
}

.timetable-wrapper table tr:first-child td {
    height: 40px;
    padding: 5px;
}

.time {
    margin-top: 10px;
    font-size: 8px;
}
</style>