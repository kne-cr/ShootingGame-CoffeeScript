# CoffeeSctiptでシューティングゲーム

## 遊び方
### ゲーム画面
[http://shootinggame.webcrow.jp/](http://shootinggame.webcrow.jp/)

### 動作環境
Google Chromeのみ確認  
確認時バージョン 49.0.2623.110 (64-bit)

### 操作方法
ゲーム画面に記載

## 開発
### 環境
#### 準備
- node
- npm

をインストールしておいてください。  
このリポジトリのルート（package.jsonがあるパス）で`$ npm install`を実行すると、必要なパッケージをインストールします。

#### 開始
~~~bash
$ gulp
~~~

#### 終了
~~~
command + c
~~~

### 設計
#### ファイル
##### coffee
`$ gulp`内で全ての.coffeeを結合・圧縮してindex.jsに出力します。  
新しく.coffeeファイルを作成した場合はgulp.coffeeファイルを修正してください。  
依存関係はここで解決するため、依存されるファイルは先に記載します。  

##### image
即時関数で画像をプリロードします。  
先読みしたい画像がある場合は、index.coffeeのimagesに追加してください。

#### フォルダ
##### ability
Mixinで拡張するmoduleを配置します。

##### enemy
EnemyまたはEnemyをextendした、敵のクラスを配置します。

##### extention
組み込みクラスの拡張を配置します。

#### 依存関係
##### index
- **index**
  - use **Command**
  - use **ContextAblity**
    - use **Actor**
    - use **Bullet**
  - use **Player**
    - extend **Actor**
    - have **Command**
    - use **playerBullets**
      - extend **Bullets**
      - aggregate **PlayerBullet**
        - extend **Actor**
        - use **Enemy**
  - use **Enemies**
    - aggregate **Enemy**
      - extend **Actor**
    - have **Pancake**
      - have **PancakeBullets**
        - extend **Bullets**
        - aggregate **PancakeBullet**
          - extend **Enemy**
      - extend **Enemy**
      - have **Angle**
      - use **HorizontallyReboundAbility**

##### 弾リスト
- **Bullets**
  - aggregate **Actor**

##### 物体
- **Actor**
  - have **Position**

##### 拡張
- **Number**
- **Math**

##### 設定ファイル
- **Setting**

敵クラスは省略