<script setup lang="ts">
const props = defineProps<{id?: string}>();
</script>

<template>
    <div class="overlay">
        <div class="window">
            <div class="property" v-if="!props.id">
                <span class="key">ルームID</span>
                <input type="text">
            </div>
            <div class="property">
                <span class="key">パスワード</span>
                <input type="text">
            </div>
            <button>参加</button>
        </div>
    </div>
</template>

<style>
.overlay{
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>