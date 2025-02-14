// Desc: 로컬 스토리지에 게임 데이터를 저장, 불러오기, 삭제하는 함수들을 정의한 파일

export function saveGameData(gameName, data) {
    console.log('saveGameData', gameName, data);
    let datas = loadGameData(gameName);
    if (datas) {
        datas.push(data);
    }else{
        datas = [];
        datas.push(data);
    }
    localStorage.setItem(gameName, JSON.stringify(datas)); // 데이터 저장
}

export function loadGameData(gameName) {
    return JSON.parse(localStorage.getItem(gameName)); // 데이터 불러오기
}

export function deleteGameData(gameName) {
    localStorage.removeItem(gameName); // 데이터 삭제
}

export function clearAllGameData() {
    localStorage.clear(); // 데이터 전체 삭제
}