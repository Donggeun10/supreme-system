<script setup>
import PhaserGame2 from "./game/PhaserGame2.vue";
import {ref, toRaw} from "vue";
import {loadGameData} from "@/components/js/LocalGameData.js";

const phaserRef = ref()

// Event emitted from the PhaserGame component
const currentScene = (scene) => {
    print('Game is ready to play', scene)
}

const gameOverScene = (scene) => {
    print('Game Over', scene)
}

function print(phase, data){
    console.log(phase, data)
}

const addPlayerName = () => {
    const scene = toRaw(phaserRef.value.scene);
    scene.addPlayerName(document.getElementsByName('playName')[0].value);
}

let saveData = loadGameData('firstGame');
</script>
<template>
    <PhaserGame2 ref="phaserRef" @current-active-scene="currentScene" @game-over-scene="gameOverScene"/>
</template>
<style>
.app_display {
    display: flex;
    justify-content: center;
    align-items: center;
}
.input-form {
    padding: 15px;
    background-color: #f67171;
}
#input-form input {
    padding: 10px;
    font-size: 20px;
    width: 400px;
}
</style>