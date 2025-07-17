import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {useParams} from 'react-router-dom'
import Editor from '@monaco-editor/react';
import './editorPage.css';
import { Button } from '../stories/atoms/Button';

const initialFiles = {
  'App.js': `// タスク配列に editing フラグを追加
const todos = [
  { task: "買い物をする", deadline: "2024-07-12", done: false, editing: false },
  { task: "勉強をする", deadline: "2024-04-13", done: false, editing: false },
  { task: "運動をする", deadline: "2024-04-13", done: true, editing: false },
  { task: "部屋の片付け", deadline: "", done: true, editing: false }
];

// タスク一覧を表示（インライン編集対応）
function renderTodos() {
  const tbody = document.getElementById('todo-body');
  tbody.innerHTML = '';

  todos.forEach((todo, index) => {
    const tr = document.createElement('tr');

    // タスク名のセル（編集モードなら input 表示）
    const tdTask = document.createElement('td');
    if (todo.editing) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = todo.task;
      input.id = \`edit-task-\${index}\`;
      tdTask.appendChild(input);
    } else {
      tdTask.textContent = todo.task;
    }

    // 期限のセル（編集モードなら input 表示）
    const tdDeadline = document.createElement('td');
    if (todo.editing) {
      const input = document.createElement('input');
      input.type = 'date';
      input.value = todo.deadline;
      input.id = \`edit-deadline-\${index}\`;
      tdDeadline.appendChild(input);
    } else {
      tdDeadline.textContent = todo.deadline || '—';
    }

    // 状態（完了 or 未完了）
    const tdStatus = document.createElement('td');
    const statusSpan = document.createElement('span');
    statusSpan.className = \`status \${todo.done ? 'done' : 'undone'}\`;
    statusSpan.textContent = todo.done ? '完了' : '未完了';
    tdStatus.appendChild(statusSpan);

    // 操作ボタン
    const tdActions = document.createElement('td');

    // 編集 or 保存 ボタン
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-edit';
    if (todo.editing) {
      editBtn.textContent = '保存';
      editBtn.onclick = () => saveTodo(index);
    } else {
      editBtn.textContent = '編集';
      editBtn.onclick = () => {
        todos[index].editing = true;
        renderTodos();
      };
    }

    // 削除ボタン
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = '削除';
    deleteBtn.onclick = () => deleteTodo(index);

    tdActions.appendChild(editBtn);
    tdActions.appendChild(deleteBtn);

    tr.appendChild(tdTask);
    tr.appendChild(tdDeadline);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);
  });
}

// 保存処理：入力欄の値を更新して編集終了
function saveTodo(index) {
  const newTask = document.getElementById(\`edit-task-\${index}\`).value.trim();
  const newDeadline = document.getElementById(\`edit-deadline-\${index}\`).value;

  if (!newTask) {
    alert("タスク名を入力してください");
    return;
  }

  todos[index].task = newTask;
  todos[index].deadline = newDeadline;
  todos[index].editing = false;
  renderTodos();
}

// タスクを追加する処理
function addTodo() {
  const taskInput = document.getElementById('todo-input');
  const deadlineInput = document.getElementById('deadline-input');
  const task = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (!task) {
    alert('タスク名を入力してください');
    return;
  }

  todos.push({ task, deadline, done: false, editing: false });
  taskInput.value = '';
  deadlineInput.value = '';
  renderTodos();
}

// タスクを削除する処理
function deleteTodo(index) {
  if (confirm("本当に削除しますか？")) {
    todos.splice(index, 1);
    renderTodos();
  }
}

// 初期化処理：ページ読み込み時にイベントを設定
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-btn').addEventListener('click', addTodo);
  renderTodos();
});


`,

  'index.html': `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>ToDoリスト</title>

  <!-- 外部のCSSファイルを読み込む -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- ページのタイトル -->
  <h2>ToDoリスト</h2>

  <!-- タスクの入力フォーム -->
  <div class="task-form">
    <!-- タスク名を入力するテキストボックス -->
    <input type="text" id="todo-input" placeholder="タスク名を入力" />

    <!-- 締切日を入力する日付ボックス -->
    <input type="date" id="deadline-input" />

    <!-- タスクを追加するボタン -->
    <button id="add-btn">追加</button>
  </div>

  <!-- タスク一覧を表示するテーブル -->
  <table class="todo-table">
    <thead>
      <tr>
        <th>Todo</th>
        <th>期限</th>
        <th>状態</th>
        <th>操作</th>
      </tr>
    </thead>
    <!-- タスク一覧の本体（ここにJavaScriptで行が追加される） -->
    <tbody id="todo-body"></tbody>
  </table>

  <!-- 外部のJavaScriptファイルを読み込む -->
  <script src="App.js"></script>
</body>
</html>
`,

  'style.css': `/* 全体の背景やフォントなど基本的なスタイルを設定 */
body {
  font-family: sans-serif;  /* フォントを設定 */
  background-color: #f7f7f7; /* 背景色を淡いグレーに */
  padding: 2rem;            /* ページの余白 */
}

/* 見出しのスタイル */
h2 {
  text-align: left;
  margin-bottom: 1rem;
}

/* タスク追加フォームの配置 */
.task-form {
  display: flex;
  gap: 10px;               /* 各要素の間にスペース */
  margin-bottom: 1rem;
}

/* 入力フィールドの基本スタイル */
#todo-input,
#deadline-input,
input[type="text"],
input[type="date"] {
  padding: 8px;
  font-size: 1rem;
}

/* すべてのボタンの共通スタイル */
button {
  padding: 8px 12px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* 追加ボタンの色 */
#add-btn {
  background-color: #8bc34a; /* 緑系 */
  color: white;
}

/* タスクリストのテーブルスタイル */
.todo-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* テーブルのセルスタイル */
.todo-table th,
.todo-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  text-align: center;
}

/* 完了／未完了の表示に使うステータスラベル */
.status {
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
}

/* 完了ステータスの色 */
.status.done {
  background-color: #8bc34a;
}

/* 未完了ステータスの色 */
.status.undone {
  background-color: #2196f3;
}

/* 編集ボタンの色 */
.btn-edit {
  background-color: #ff9800;
  color: white;
  margin-right: 6px;
}

/* 削除ボタンの色 */
.btn-delete {
  background-color: #f44336;
  color: white;
}

`,
};

export const EditorPage: React.FC = () => {
  type FileName = 'App.js' | 'index.html' | 'style.css';
  const [selectedFile, setSelectedFile] = useState<FileName>('App.js');
  const [fileContents, setFileContents] =
    useState<Record<FileName, string>>(initialFiles);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  // const { stepId } = useParams<{ stepId: string }>();
  const [showOutput, setShowOutput] = useState(false);
  const navigate = useNavigate();

  const handleFileClick = (fileName: string) => {
    setSelectedFile(fileName as FileName);
  };

  const handleCodeChange = (value: string | undefined) => {
    if (!value) return;
    setFileContents((prev) => ({
      ...prev,
      [selectedFile]: value,
    }));
  };

  const handleRunTest = () => {
    const html = fileContents['index.html'];
    const css = `<style>${fileContents['style.css']}</style>`;
    const js = `<script>
    ${fileContents['App.js']}
    window.onload();
  </script>`;

    const fullHtml = html
      .replace('<link rel="stylesheet" href="style.css" />', css)
      .replace('<script src="App.js"></script>', js);

    const iframe = iframeRef.current;
    if (iframe) {
      const doc = iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(fullHtml);
        doc.close();
      }
    }

    localStorage.setItem('previewHtml', fileContents['index.html']);
    localStorage.setItem('previewCss', fileContents['style.css']);
    localStorage.setItem('previewJs', fileContents['App.js']);

    setShowOutput(true);
  };

  return (
    <div className="editor-page">
      <div className="editor-header">
        <h1 className="project-title">ToDoアプリを作ってみよう</h1>
        <span className="step-tag">タスク</span>
        <span className="step-title">JavaScriptでタスク管理を作ろう！</span>
      </div>

      <div className="editor-layout">
        {/* 左サイドバー */}
        <aside className="sidebar-left">
          <ul
            className="file-list"
            style={{ textAlign: 'left', paddingLeft: '20px' }}>
            <li>📁 src</li>
            {Object.keys(fileContents).map((file) => (
              <li
                key={file}
                onClick={() => handleFileClick(file)}
                style={{
                  cursor: 'pointer',
                  fontWeight: selectedFile === file ? 'bold' : 'normal',
                  color: selectedFile === file ? '#2196f3' : 'inherit',
                }}>
                📄 {file}
              </li>
            ))}
          </ul>
        </aside>

        {/* メインエリア */}
        <main className="editor-main">
          <div
            style={{
              padding: '0.5rem',
              backgroundColor: '#333',
              color: '#fff',
              textAlign: 'left',
            }}>
            {selectedFile}
          </div>
          <Editor
            height="500px"
            language={
              selectedFile.endsWith('.css')
                ? 'css'
                : selectedFile.endsWith('.html')
                  ? 'html'
                  : 'javascript'
            }
            value={fileContents[selectedFile]}
            onChange={handleCodeChange}
            theme="vs-dark"
          />
        </main>

        {/* 右サイドバー */}
        <aside className="sidebar-right">
          <div className="hints">
            <Button
              label="ヒントを見る"
              onClick={() => console.log('hint')}
              size="medium"
              color="green"
            />
            <Button
              label="完成イメージ"
              onClick={() => console.log('image')}
              size="medium"
              color="green"
            />
          </div>

          <div className="testRun">
            <Button
              label="テストを全て実行"
              onClick={handleRunTest}
              size="medium"
              color="blue"
              variant="solid"
            />
          </div>

          <div className="exit-btn">
            <Button
              label="終了"
              onClick={() => navigate('/complete')}
              size="medium"
              color="red"
            />
          </div>
        </aside>
      </div>

      <div className="preview-area">
        {showOutput ? (
          <iframe
            title="preview"
            ref={iframeRef}
            style={{
              width: '100%',
              height: '400px',
              border: '1px solid #ccc',
              background: 'white',
              marginTop: '1rem',
              borderRadius: '8px',
            }}
          />
        ) : (
          <div
            style={{ padding: '1rem', background: '#eee', marginTop: '1rem' }}>
            実行結果がここに表示されます...
          </div>
        )}
      </div>
    </div>
  );
};
