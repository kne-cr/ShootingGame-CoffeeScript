# shooting game
## クラス
### 依存関係ツリー

#### index
- **index**
  - use **command**
  - use **context_ablity**
    - use **actor**
    - use **bullet**
  - use **player**
    - extend **actor**
    - have **command**
    - use **bullets**
      - aggregate **bullet**
        - extend **actor**
  - use **enemies**
    - aggregate **macaron**
      - extend **actor**

#### 物体
- **actor**
  - have **position**

### ライブラリ
- **number**
- **math**

### 設定ファイル
- **setting**