<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>お問い合わせフォーム</title>
</head>

<body>

<h1>お問い合わせフォーム</h1>

<ul>
    <li><a href="#">トップページ</a></li>
    <li><a href="#">人気投稿</a></li>
    <li><a href="#">エンジニアおすすめ商品</a></li>
    <li><a href="#">エンジニアおすすめ記事</a></li>
    <li><a href="#">投稿ページ</a></li>
</ul>

<form method="POST" action="">

    <table border="2">
        <tr>
            <th>お名前</th>
            <td><input type="text" name="name"></td>
        </tr>

        <tr>
            <th>会社名</th>
            <td><input type="text" name="company"></td>
        </tr>

        <tr>
            <th>メールアドレス</th>
            <td><input type="text" name="email"></td>
        </tr>

        <tr>
            <th>年齢</th>
            <td><input type="text" name="age"></td>
        </tr>

        <tr>
            <th>お問い合わせ内容</th>
            <td>
                <textarea name="message" rows="7" cols="40"
                    placeholder="お問い合わせ内容"></textarea>
            </td>
        </tr>
    </table>

    <input type="submit" value="送信">

</form>

<p>横のボタンを押すとfooterの背景色が変わります。</p>

<button type="button" onclick="changeColor()">押してみてね！</button>

<footer id="footer">
    <p>footer</p>
</footer>

<script>
function changeColor() {
    document.getElementById("footer").style.backgroundColor = "lightblue";
}
</script>

</body>
</html>