<script setup>
import StonesGame from "./game/PhaserStonesGame.vue";
import {ref, toRaw} from "vue";
import {config} from "@/views/game04/game/main.js";

const phaserRef = ref();
const gameId = config.gameId;

// Event emitted from the PhaserGame component
const currentScene = (scene) => {
    print('Game is ready to play', scene)
}

const gameOverScene = (scene) => {
    print('Game Over', scene)
}

const print = (phase, data) => {
    console.log(phase, data)
}

const createScreenShot = () => {
    const scene = toRaw(phaserRef.value.scene);
    scene.captureAndAsk();
}

</script>
<template>
    <div class="container">
        <div class="row">
            <!-- 왼쪽 열 -->
            <div class="col-12 col-md-8 order-md-1">
                <StonesGame ref="phaserRef" @current-active-scene="currentScene" @game-over-scene="gameOverScene"/>
            </div>
            <!-- 오른쪽 열 -->
            <div class="col-12 col-md-4 order-md-2">
                <div>
                    <button class="button" @click="createScreenShot">ScreenShot</button>
                </div>
            </div>
        </div>
    </div>
</template>
