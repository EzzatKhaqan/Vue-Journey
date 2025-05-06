<script setup>
import { computed } from "vue";

const props = defineProps({
    data: Object,
    colspan: { type: Number, default: 1 }
});

const empty = computed(() => {
    if (props.data)
        return Object.keys(props.data).length > 0 ? false : true;
})

</script>
<template>

    <td :colspan="props.colspan">
        <div class="wrapper-data" :class="[empty ? 'deactive_border' : 'active_border']">
            <div class="data" v-if="!empty">
                <div class="location">
                    <span>{{ props.data.location }}</span>
                    <span>{{ props.data.location }}</span>
                </div>
                <div class="lecture">
                    {{ props.data.subject }}

                    <span class="credit"><b>credits</b> 4</span>
                </div>
                <div class="lecturer">{{ props.data.teacher }}</div>
            </div>
            <div class="empty_cell-wrapper" v-else>
                <div class="empty_cell">
                    +
                </div>
            </div>
        </div>
    </td>

</template>

<style scoped>
.wrapper-data {
    width: 150px;
    height: 100px;
    background-color: var(--e-surface-ground);
    margin: 5px;
    border-radius: 5px;
}

.active_border {
    border: 2px dashed var(--e-primary-green);
}

.deactive_border {
    border: 2px dashed var(--e-border-color);
}

.data {
    width: 100%;
    height: 100%;
}

.empty_cell-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.empty_cell {
    width: 35%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--e-surface-ground);
    text-align: center;
    border: 1px dashed var(--e-gray);
    color: var(--e-gray);
    border-radius: 5px;
    font-size: 28px;
}

.wrapper-data:hover {
    cursor: pointer;
}

.lecture {
    background-color: transparent;
    color: black;
    font-size: 16px;
    text-align: center;
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.credit {
    position: absolute;
    bottom: 0;
    right: 5px;
    font-size: 10px;
}

.lecturer {
    background-color: #ffa500;
    color: white;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    height: 20%;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 2px;
}

.location {
    display: flex;
    justify-content: space-between;
    background-color: #007bff;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 2px;
}
</style>