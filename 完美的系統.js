// JavaScript：這裡負責邏輯
function changeMood() {
    const moods = [
        { msg: "Cal 一次就過！", color: "#2ecc71" }, // 綠色
        { msg: "Bug 正在路上...", color: "#e74c3c" }, // 紅色
        { msg: "今晚又要熬夜了？", color: "#3498db" }, // 藍色
        { msg: "編譯器愛你！", color: "#9b59b6" },   // 紫色
        { msg: "咖啡因不足...", color: "#f39c12" },   // 橘色
        { msg: "運算思維有夠無聊!", color: "#eba0c8" }, // pink
        { msg: "川普好偉大!", color: "#555555" }, // gray
        { msg: "Cal 100分過", color: "#f7ff81" }, // 鵝黃色
        { msg: "全科歐趴!", color: "#bcff9b" } // 嫩綠色
    ];

    // 隨機選一個心情
    const randomIndex = Math.floor(Math.random() * moods.length);
    const selected = moods[randomIndex];

    // 透過 DOM 修改內容
    document.getElementById('message').innerText = selected.msg;
    document.body.style.backgroundColor = selected.color;
}