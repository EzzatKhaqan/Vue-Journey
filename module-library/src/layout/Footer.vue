<script setup></script>

<template>
    <div class="footer">
        <h3>
            <span>Ezzat</span> 2025
        </h3>
    </div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.footer {
    width: calc(100% - 250px);
    position: absolute;
    right: 0;
    height: 50px;
    background-color: var(--e-white);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--e-border-color);
    border-radius: 5px;
}


.footer h3 span {
    color: var(--e-primary-green);
    transition: color 0.3s ease;
}

.footer h3 {
    color: var(--e-dark-navy);
    font-weight: 200;
    transition: color 0.3s ease;
}
</style>