const express = require("express");//expressモジュール
const cors = require("cors");//corsモジュールの読み込み

const app = express();
const PORT = 3000; //サーバーのポート番号を指定している

app.use(cors()); //すべてのオリジンからリクエストを受け取れるように設定。
app.use(express.json()); //リクエストのjsonデータを自動で解析してreq.bodyに入れているミドルウェア

let orders = []; //メモリ上でデータを保存。サーバーを再起動すると消えちゃう。

app.post("/order",(req,res) => {
    const order = req.body; //リクエストデータを格納
    orders.push(order);     //orderの中身を配列ordersに格納
    console.log("注文を受け付け：",order); //きちんと動いているかの確認
    res.json({message})
})

app.listen(PORT,() => {console.log(`サーバー起動したで`);});