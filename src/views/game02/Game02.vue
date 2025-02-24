<script setup>
import PhaserGame2 from "./game/PhaserGame2.vue";
import {ref, toRaw} from "vue";
import {LocalStorageRepository, RedisExternalRepository} from "@/components/js/DataStorage.js";

const phaserRef = ref();
const gameName = "firstGame";
const repository = new LocalStorageRepository();
const redisRepo = new RedisExternalRepository();

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
        repository.clearAllGameData();
    }
}

let playerName  = ref("");
let saveDatas = ref("");

redisRepo.loadGameData(gameName, findPlayerName);

function findPlayerName(gameName, datas){

    saveDatas = datas;

    if(Array.isArray(saveDatas)){
        saveDatas.sort((a, b) => b.timestamp - a.timestamp);
        playerName.value = saveDatas[0].playerName;
    } else if(saveDatas){
        playerName.value = saveDatas.playerName;
    }
    console.log('playerName', gameName, playerName, saveDatas);

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