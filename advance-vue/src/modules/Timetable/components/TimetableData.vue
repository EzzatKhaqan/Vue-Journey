<script setup>
const props = defineProps({
    empty_cell: Boolean
});
</script>
<template>

    <td>
        <div class="wrapper-data" :class="[props.empty_cell ? 'deactive_border' : 'active_border']">
            <div v-if="!props.empty_cell">
                <div class="room">124</div>
                <div class="lecture">Java</div>
                <div class="lecturer">Dr. Pete</div>
            </div>
            <div class="emplty_cell" v-else>
                <i class="pi pi-add">+</i>
            </div>
        </div>
    </td>

</template>

<style scoped>
.wrapper-data {
    width: calc(150px - 5);
    height: 100px;
    background-color: #f1f5f9;
    margin: 5px;
    padding: 2px;
    border-radius: 5px;
}

.active_border {
    border: 2px dashed var(--e-primary-green);
}

.deactive_border {
    border: 2px dashed var(--e-border-color);
}

.emplty_cell {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 30px;
}

.wrapper-data:hover {
    cursor: pointer;
}

.lecture {
    background-color: transparent;
    color: black;
    font-size: 30px;
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lecturer {
    background-color: #ffa500;
    color: white;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    height: 20%;
}

.room {
    background-color: #007bff;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    width: 50%;
    height: 20%;
}
</style>