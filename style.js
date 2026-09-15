document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // お問い合わせフォーム
    // ========================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            const name = document.getElementById("name").value.trim();
            const companyName = document.getElementById("companyName").value.trim();
            const email = document.getElementById("email").value.trim();
            const age = document.getElementById("age").value.trim();
            const message = document.getElementById("message").value.trim();

            if (
                name === "" ||
                companyName === "" ||
                email === "" ||
                age === "" ||
                message === ""
            ) {
                alert("未入力の項目があります。");
                event.preventDefault();
                return;
            }

            const result = confirm(
                "入力内容を確認してください。\n\n" +
                "お名前：" + name + "\n" +
                "会社名：" + companyName + "\n" +
                "メールアドレス：" + email + "\n" +
                "年齢：" + age + "\n" +
                "お問い合わせ内容：" + message
            );

            if (!result) {
                event.preventDefault();
            }

        });

    }


    // ========================================
    // 「押してみてね！」ボタン
    // ========================================

    const footer = document.querySelector("footer");
    const footerButton = document.getElementById("footerButton");

    const footerColors = [
        "blue",
        "red",
        "yellow",
        "gray"
    ];

    let currentIndex = 0;

    if (footer && footerButton) {

        footerButton.addEventListener("click", () => {

            footer.style.backgroundColor = footerColors[currentIndex];

            currentIndex =
                (currentIndex + 1) % footerColors.length;

        });

    }

});