# pattern-language-editor-client

パターンランゲージを記述/表示するための Web クライアントです。

## 開発環境構築

### NODE.JS/npm のインストール

NODE.JS バージョン 18 系の LTS を使っています。[ここ](https://nodejs.org/ja/download/)から OS にあったインストーラを選択しインストールしてください。  
Linux を使っている場合は、[nodesource](https://github.com/nodesource/distributions/blob/master/README.md)をみてインストールするのをお勧めします。

### NODE モジュールのインストール

このプロジェクトのルート(package.json があるディレクトリ)で以下のコマンドを実行してください。  
実行タイミングはだいたい、`git clone` した後、`git pull` したときに package.json に更新があったときぐらいです。

```
node install
```

実行すると`high severity vulnerabilities`みたいなメッセージが出てきますが、いったん無視します。

### VSCode とエクステンションのインストール

開発は [VSCode](https://azure.microsoft.com/ja-jp/products/visual-studio-code) を推奨しています。(コードフォーマッターをコミット前にもれなくなってもらえるなら別のエディタでも OK)  
VSCode をインストールして、以下の Lint ツールとコードフォーマッタのエクステンションをインストールしてください。設定はすでに`.vscode/settings.json`に入れてあります。

- ESLint (Microsoft が提供)
- Prettier - Code formatter (Prettier が提供)

以上で環境構築は終わりです。お疲れさまでした 🍣
