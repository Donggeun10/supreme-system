import {EventBus} from '../EventBus';
import {Scene} from 'phaser';
import {config} from "@/views/game02/game/main.js";
import {RedisExternalRepository} from "@/components/js/DataStorage.js";

export class ScoreBoard extends Scene {
    constructor() {
        super({key: 'ScoreBoard'});

    }

    redisRepo = new RedisExternalRepository();
    gameId = config.gameId;
    playGround = {x: 400, y: 300};
    scoreData = [];

    style = {
        fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        stroke: '#000000', strokeThickness: 8,
        align: 'center'
    };

    preload() {
        //this.redisRepo.loadGameData(this.gameId, this.setScoreboard);
        this.redisRepo.loadGameDataWithGameId(this.gameId).then(data => {
            this.scoreData = data;
            this.displayScoreboard();
        });
    }

    create() {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(this.playGround.x, this.playGround.y, 'background').setAlpha(0.5);

        this.add.text(this.playGround.x, this.playGround.y, 'Make something fun!\nand share it with us', this.style).setOrigin(0.5).setDepth(100);

        EventBus.emit('current-scene-ready', this);
    }

    // 스코어 목록을 화면에 표시
    displayScoreboard() {
        console.log('displayScoreboard', this.gameId, this.scoreData);
        let scores = this.scoreData || [];
        scores.sort((a, b) => b.score - a.score); // 점수 내림차순 정렬

        let yPosition = 100;
        const titleStyle = {...this.style};
        titleStyle.fontSize = 28;
        this.add.text(400, yPosition, `index. playerName stage score playTime`, titleStyle).setOrigin(0.5);
        yPosition += 40;

        scores.forEach((entry, index) => {
            this.add.text(400, yPosition, `${index + 1}. ${entry.playerName} ${entry.stage} ${entry.score} ${entry.playTime} `,
                          this.style).setOrigin(0.5);
            yPosition += 40;
        });

    }

    changeScene() {
        this.scene.start('GameScene');
    }
}

export default ScoreBoard;
