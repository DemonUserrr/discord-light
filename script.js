const checks = document.querySelectorAll(".check");

const progressText = document.getElementById("progressText");

const progressBar = document.getElementById("progressBar");


function updateProgress() {

    const completed =
        document.querySelectorAll(".check:checked").length;

    const total = checks.length;


    // 進捗の数字を変更
    progressText.textContent =
        `${completed} / ${total} 完了`;


    // パーセント計算
    const percentage =
        (completed / total) * 100;


    // 進捗バーを変更
    progressBar.style.width =
        percentage + "%";


    // 全部終わった場合
    if (completed === total) {

        progressText.textContent =
            "🎉 すべての設定を確認しました！";

    }

}


// チェックボックスが押されたら実行
checks.forEach(function(check) {

    check.addEventListener("change", updateProgress);

});


// 最初の状態を設定
updateProgress();