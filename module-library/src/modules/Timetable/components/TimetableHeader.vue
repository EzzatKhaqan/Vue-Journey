<script>
</script>
<template>

    <th></th>
    <td v-for="i in 6" :key="i">
        <div>{{ i }}</div>
        <div class="e-time">09:00 - 09:45</div>
    </td>
</template>

<style>
.e-timetable-wrapper table tr:first-child th,
.e-timetable-wrapper table tr:first-child td {
    text-align: center;
    height: 30px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    background-color: white;
}

.e-timetable-wrapper table tr:first-child th {
    min-width: 30px;
}

.e-timetable-wrapper table tr:first-child td {
    height: 40px;
    padding: 5px;
}

.e-time {
    margin-top: 10px;
    font-size: 8px;
}
</style>