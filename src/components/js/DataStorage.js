// Desc: 로컬 스토리지에 게임 데이터를 저장, 불러오기, 삭제하는 함수들을 정의한 파일
import axios  from 'axios';

export class LocalStorageRepository{

    constructor(){
        console.log('LocalStorageRepository constructor');
    }

    saveGameData(gameName, data) {
        console.log('saveGameData', gameName, data);
        let datas = this.loadGameData(gameName);
        if (Array.isArray(datas)) {
            datas.push(data);
        }else{
            datas = [];
            datas.push(data);
        }
        localStorage.setItem(gameName, JSON.stringify(datas)); // 데이터 저장
    }

    loadGameData(gameName) {
        return JSON.parse(localStorage.getItem(gameName)); // 데이터 불러오기
    }

    deleteGameData(gameName) {
        localStorage.removeItem(gameName); // 데이터 삭제
    }

    clearAllGameData() {
        localStorage.clear(); // 데이터 전체 삭제
    }
}

export class RedisExternalRepository {

    config = {};
    restClient ;

    constructor() {
        console.log('RedisExternalRepository constructor');
        this.config = {
            baseURL: '/api',
            timeout: 10000,
            auth: {
                username: 'robot',
                password: 'play',
            },
        };
        this.restClient = axios.create(this.config);
    }

    loadGameData(gameName, callback) {

        this.restClient.get('/score/redis/' + gameName, this.config).then(response => {
            let data = response.data;
            console.log('응답 데이터:', data);
            callback(gameName, JSON.parse(data[gameName]));
        }).catch(error => {
            console.error('오류 발생:', error);
        });
    }

    loadGameDataWithGameId(gameName) {
        return new Promise((resolve, reject) => {
            this.restClient.get('/score/redis/' + gameName, this.config).then(response => {
                let data = response.data;
                console.log('응답 데이터:', data);
                //callback(gameName, JSON.parse(data[gameName]));
                resolve(JSON.parse(data[gameName]))
            }).catch(error => {
                console.error('오류 발생:', error);
                reject(error);
            });
        });
    }

    saveGameData(gameName, data) {

        console.log('saveGameData', gameName, data);
        this.restClient.post('/score/redis/' + gameName, data, this.config).then(response => {
            console.log('redis:saveGameData 응답 데이터:', response.data);
        }).catch(error => {
            console.error('오류 발생:', error);
        });
    }
}