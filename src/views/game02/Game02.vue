<script setup>
import PhaserGame2 from "./game/PhaserGame2.vue";
import {ref, toRaw} from "vue";
import {clearAllGameData, loadGameData} from "@/components/js/LocalGameData.js";

const phaserRef = ref()
let playerName = "";
let gameName = "firstGame";

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
    scene.addPlayerName(playerName);
}

const displayScoreList = () => {
    const scene = toRaw(phaserRef.value.scene);
    scene.displayScoreboard(gameName);
}

const removeAllGameData = () => {
    if(confirm('Do you want to remove all game data?')){
        clearAllGameData();
    }
}

let saveDatas = loadGameData('firstGame');
if(saveDatas){
    saveDatas.sort((a, b) => b.score - a.score);
    playerName = saveDatas[0].playerName;

}
</script>
<template>
    <div class="container">
        <div class="row">
            <!-- 왼쪽 열 -->
            <div class="col-12 col-md-8 order-md-1">
                <PhaserGame2 ref="phaserRef" @current-active-scene="currentScene" @game-over-scene="gameOverScene"/>
            </div>
            <!-- 오른쪽 열 -->
            <div class="col-12 col-md-4 order-md-2">
                <div class="input-form">
                    <input v-model="playerName" type="text" placeholder="put in Player Name" @keyup.enter="addPlayerName" />
                </div>
                <div>
                    <button class="button" @click="displayScoreList">Score List</button>
                </div>
                <div class="spritePosition">
                    Game Result : <pre>{{ saveDatas }}</pre>
                </div>
                <div>
                    <button class="button" @click="removeAllGameData">Clear All Game Data</button>
                </div>
                <div>
                    <button class="button" @click="addSprite">Add New Sprite</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.input-form {
    padding: 15px;
    width: 100%;
    background-color: #f67171;
}
#input-form input {
    padding: 10px;
    font-size: 20px;
    width: 100%;
}
</style>