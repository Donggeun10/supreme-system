<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { EventBus } from './EventBus';
import StartGame from './main';

// Save the current scene instance
const scene = ref();
//const game = ref();
let gameInstance = null
const containerId = 'game-container'
const emit = defineEmits(['current-active-scene']);

onMounted(() => {

    gameInstance = StartGame(containerId);

    EventBus.on('current-scene-ready', (currentScene) => {

        emit('current-active-scene', currentScene);

        scene.value = currentScene;

    });

});

onUnmounted(() => {

    if (gameInstance)
    {
        gameInstance.destroy(true);
        gameInstance = null;
    }
    
});

defineExpose({ scene, gameInstance });
</script>

<template>
    <div :id="containerId"></div>
</template>