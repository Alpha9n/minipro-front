# みにぷろ - フロントエンド環境

## 構築方法

### 1. Bunのインストール

このプロジェクトではNode.jsは使用しません
BunはNode.jsの代替として使用されます。
https://bun.sh/

#### Windowsの場合

PowerShellを管理者権限で実行し、以下のコマンドを入力してください。

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

#### macOS / Linuxの場合

ターミナルを開いて、以下のコマンドを入力してください。

```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. プロジェクトのクローン

これより以下のコマンドは、プロジェクトを保存したいディレクトリで実行してください。
**VSCodeを使用して画面下のターミナルで実行することを推奨します。**

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. 依存関係のインストール

```bash
bun install
```

### 3. 開発サーバーの起動

```bash
bun dev
```

### 4. ビルド

```bash
bun build
```

### 5. テストの実行

```bash
bun test
```
