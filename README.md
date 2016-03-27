# shooting game
## クラス
### 依存関係ツリー

#### index
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

#### 弾リスト
- **Bullets**
  - aggregate **Actor**

#### 緑マカロン
- **GreenMacaron**
  - extend **Enemy**
  - use **HorizontallyReboundAbility**

#### 物体
- **Actor**
  - have **Position**

### ライブラリ
- **Number**
- **Math**

### 設定ファイル
- **Setting**