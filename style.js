// ========================================
// 前の課題のJavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const textInput = document.getElementById("textInput");
    const showBtn = document.getElementById("showBtn");
    const addBtn = document.getElementById("addBtn");
    const bgBtn = document.getElementById("bgBtn");
    const displayArea = document.getElementById("displayArea");
    const count = document.getElementById("count");
    const tbody = document.querySelector("#dataTable tbody");

    let bgIndex = 0;

    // ========================================
    // 前の課題：背景色
    // ========================================

    const colors = [
        "blue",
        "red",
        "yellow",
        "gray"
    ];

    // 前の課題の要素が存在する場合だけ実行
    if (
        textInput &&
        showBtn &&
        addBtn &&
        bgBtn &&
        displayArea &&
        count &&
        tbody
    ) {

        function updateCount() {
            count.textContent = tbody.rows.length;

            if (tbody.rows.length >= 3) {
                showBtn.style.display = "none";
            } else {
                showBtn.style.display = "inline-block";
            }
        }


        showBtn.addEventListener("click", () => {

            const text = textInput.value.trim();

            if (text === "") {
                alert("入力値が空です。");
                return;
            }

            displayArea.textContent = text;

            displayArea.classList.toggle("highlight");
        });


        // 背景色変更
        bgBtn.addEventListener("click", () => {

            document.body.style.backgroundColor = colors[bgIndex];

            bgIndex++;

            if (bgIndex >= colors.length) {
                bgIndex = 0;
            }

        });


        addBtn.addEventListener("click", () => {

            const text = textInput.value.trim();

            if (text === "") {
                alert("入力値が空です。");
                return;
            }

            const row = tbody.insertRow();

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.textContent = text;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "削除";

            deleteBtn.addEventListener("click", () => {
                row.remove();
                updateCount();
            });

            cell2.appendChild(deleteBtn);

            while (tbody.rows.length > 3) {
                tbody.deleteRow(0);
            }

            updateCount();

            textInput.value = "";

            for (let i = 1; i <= 5; i++) {
                console.log(i);
            }

        });

    }


    // ========================================
    // 今回の課題
    // お問い合わせフォームの未入力チェック
    // ========================================

    const contactForm = document.querySelector("form");

    const nameInput = document.getElementById("name");
    const companyNameInput = document.getElementById("companyName");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const messageInput = document.getElementById("message");


    // お問い合わせフォームが存在する場合
    if (
        contactForm &&
        nameInput &&
        companyNameInput &&
        emailInput &&
        ageInput &&
        messageInput
    ) {

        contactForm.addEventListener("submit", (event) => {

            // 各項目の値を取得
            const name = nameInput.value.trim();
            const companyName = companyNameInput.value.trim();
            const email = emailInput.value.trim();
            const age = ageInput.value.trim();
            const message = messageInput.value.trim();


            // ========================================
            // 未入力チェック
            // ========================================

            if (
                name === "" ||
                companyName === "" ||
                email === "" ||
                age === "" ||
                message === ""
            ) {

                // 送信をキャンセル
                event.preventDefault();

                // エラー表示
                alert("必須項目が未入力です。入力内容をご確認ください。");

                return;
            }


            // ========================================
            // 確認アラート
            // ========================================

            const result = confirm(
                "以下の内容で送信しますか？\n\n" +
                "お名前：" + name + "\n" +
                "会社名：" + companyName + "\n" +
                "メールアドレス：" + email + "\n" +
                "年齢：" + age + "\n" +
                "お問い合わせ内容：" + message
            );


            // キャンセルされた場合
            if (!result) {
                event.preventDefault();
            }

        });

    }

// 「押してみてね！」ボタン

const footer = document.querySelector("footer");

if (footer) {

    const footerButton = footer.querySelector("button");

    const colors = [
        "blue",
        "red",
        "yellow",
        "gray"
    ];

    let currentIndex = 0;

    if (footerButton) {

        footerButton.addEventListener("click", () => {

            footer.style.backgroundColor = colors[currentIndex];

            currentIndex = (currentIndex + 1) % colors.length;

        });

    }

}

});