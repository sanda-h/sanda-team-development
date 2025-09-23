<script>
    let items = "" //入力した商品を一時的に格納する
    let message = "" //サーバーからのメッセージをここに入れる

    //非同期関数、注文内容をサーバーに送る関数
    async function sendOrder(){
        const res = await fetch("http://localhost:3000/order",{method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({items:items.split(","),time:new Date().toLocaleTimeString()})})
        const data = await res.json(); //resの中身をJsonに変換する
        message = data.message;//dataのmessage部分を取り出す
    }
</script>





<h1>
    レジ画面
</h1>
<input bind:value={items} placeholder="商品をカンマ区切りで入力する"><!--bind:value={items}入力内容を変数itemsに格納、placeholderまだ入力してないなら表示する-->
<button on:click={sendOrder}><!--クリックした後に実行する関数を指定している-->
    注文送信   
</button>
<p>
    {message}
</p>