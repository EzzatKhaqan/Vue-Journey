<script setup>
const props = defineProps({
    item: {
        type: Object
    },
    root: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <li :class="props.root ? 'root-menuitem' : ''">
        <!-- if item is root -->
        <div class="menuitem-root-text" v-if="props.root">{{ props.item.label }}</div>
        <a v-if="props.item.items && !root">
            <i class="pi menuitem-icon" :class="props.item.icon"></i>
            <div class="menuitem-text">{{ props.item.label }}</div>
            <i v-if="props.item.items" class="pi pi-angle-down layout-submenu-toggler"></i>
        </a>
        <router-link v-if="props.item.to" :to="props.item.to">
            <i class="pi menuitem-icon" :class="props.item.icon"></i>
            <div class="menuitem-text">{{ props.item.label }}</div>
        </router-link>
        <ul class="submenu" v-if="props.item.items">
            <MenuItem v-for="(submenuItem, index) in props.item.items" :item="submenuItem" :root="false" :key="index" />
        </ul>
    </li>
</template>


<style>
.layout-menu li {
    list-style-type: none;
}

.layout-menu .root-menuitem>a {
    display: none;
}

.menuitem-root-text {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 10px 0;
    color: var(--e-text-color);
    user-select: none;
}

.submenu li>a {
    position: relative;
    display: flex;
    padding: 10px 5px;
    text-decoration: none;
    color: var(--e-text-color);
    padding-left: 10px;
    cursor: pointer;
}

.submenu li {
    border-radius: 4px;
    transition: all 0.3s ease;
}

.menuitem-icon {
    font-size: 14px;
    margin-right: 10px;
}

.menuitem-text {
    font-size: 14px;
}

.layout-submenu-toggler {
    margin-left: auto;
}

.submenu li:hover {
    background-color: var(--e-surface-ground);
}
</style>