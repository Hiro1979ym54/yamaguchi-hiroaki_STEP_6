<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>お問い合わせフォーム</title>

    <style>
        table {
            border: 3px solid black;
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid black;
            padding: 5px;
        }

        input[type="text"] {
            width: 40em;
        }

        textarea {
            width: 40em;
            height: 10em;
        }
    </style>

    <!-- JavaScriptを読み込む -->
    <script src="style.js"></script>
</head>

<body>

<header>
    <h2>お問い合わせフォーム</h2>
</header>

<aside>
    <ul>
        <li><a href="#">トップページ</a></li>
        <li><a href="#">人気投稿</a></li>
        <li><a href="#">エンジニアおすすめ商品</a></li>
        <li><a href="#">エンジニアおすすめ記事</a></li>
        <li><a href="#">投稿ページ</a></li>
    </ul>
</aside>

<form method="POST" action="confirm.php" id="contactForm">

    <table>
        <tr>
            <th>お名前</th>
            <td>
                <input type="text" name="name" id="name" required>
            </td>
        </tr>

        <tr>
            <th>会社名</th>
            <td>
                <input type="text" name="companyName" id="companyName" required>
            </td>
        </tr>

        <tr>
            <th>メールアドレス</th>
            <td>
                <input type="text" name="email" id="email" required>
            </td>
        </tr>

        <tr>
            <th>年齢</th>
            <td>
                <input type="text" name="age" id="age" required>
            </td>
        </tr>

        <tr>
            <th>お問い合わせ内容</th>
            <td>
                <textarea name="message" id="message" required></textarea>
            </td>
        </tr>
    </table>

    <input type="submit" value="送信">

</form>

<footer>
    <button type="button" id="footerButton">押してみてね!</button>
</footer>

</body>
</html>