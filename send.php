<?php

// POST以外からアクセスされた場合はお問い合わせフォームへ戻す
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.php');
    exit;
}

// POSTデータを受け取る
$name = $_POST['name'] ?? '';
$companyName = $_POST['companyName'] ?? '';
$email = $_POST['email'] ?? '';
$age = $_POST['age'] ?? '';
$message = $_POST['message'] ?? '';

// 未入力チェック
if (
    $name === '' ||
    $companyName === '' ||
    $email === '' ||
    $age === '' ||
    $message === ''
) {
    header('Location: contact.php');
    exit;
}

// メール送信
$to = 'example@example.com';
$subject = 'お問い合わせフォームからのお問い合わせ';

$body = "お名前：{$name}\n";
$body .= "会社名：{$companyName}\n";
$body .= "メールアドレス：{$email}\n";
$body .= "年齢：{$age}\n";
$body .= "お問い合わせ内容：\n{$message}\n";

mb_send_mail($to, $subject, $body);

?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>お問い合わせフォーム・送信完了画面</title>
</head>

<body>

<h1>お問い合わせフォーム・送信完了画面</h1>

<?php
echo "お問い合わせが送信されました。ありがとうございます!";
?>

<br><br>

<a href="contact.php">お問い合わせフォームに戻る</a>

</body>
</html>