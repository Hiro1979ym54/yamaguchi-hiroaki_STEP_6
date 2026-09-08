<?php

// POSTで送信されていない場合はcontact.phpへ戻る
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.php');
    exit;
}

// データを受け取る
$name = $_POST['name'] ?? '';
$companyName = $_POST['companyName'] ?? '';
$email = $_POST['email'] ?? '';
$age = $_POST['age'] ?? '';
$message = $_POST['message'] ?? '';

/*
 * メール送信
 */

// 送信先メールアドレス
$to = "test@gamail.com";

// 件名
$subject = "お問い合わせフォーム";

// 本文
$body = "お名前：{$name}\n";
$body .= "会社名：{$companyName}\n";
$body .= "メールアドレス：{$email}\n";
$body .= "年齢：{$age}\n";
$body .= "お問い合わせ内容：{$message}\n";

// メールヘッダー
$headers = "From: {$email}";

// メール送信
$result = mb_send_mail($to, $subject, $body, $headers);

?>

<!DOCTYPE html>
<html lang="ja">

<!--完了画面-->
<head>
    <meta charset="UTF-8">
    <title>お問い合わせフォーム・送信完了画面</title>
</head>

<body>

    <h1>お問い合わせフォーム・送信完了画面</h1>

    <?php

    if ($result) {
        echo "お問い合わせが送信されました。ありがとうございます！";
    } else {
        echo "メールの送信に失敗しました。";
    }

    ?>

    <br><br>

    <a href="contact.php">お問い合わせフォームに戻る</a>

</body>

</html>