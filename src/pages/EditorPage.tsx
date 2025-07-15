import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import '../styles/editorPage.css';
import { Button } from '../stories/atoms/Button';

const dummyCode = `#include <stdio.h>

int main() {
  int x;
  double y;
  printf("整数型のデータを入力してください ==> ");
  scanf("%d", &x);
  printf("実数型のデータを入力してください ==> ");
  scanf("%lf", &y);
  printf("\\n=======================\\n");
  printf("変数x: %d\\n", x);
  printf("変数y: %.2f\\n", y);
  printf("=======================\\n");
  return 0;
}`;

export const EditorPage: React.FC = () => {
  const { stepId } = useParams<{ stepId: string }>();
  const [code, setCode] = useState(dummyCode);

  return (
    <div className="editor-page">
      <div className="editor-header">
        <h1 className="project-title">BMI計算システム</h1>
        <span className="step-tag">STEP {stepId}</span>
        <span className="step-title">xxxxxを作ってみよう！！</span>
      </div>

      <div className="editor-layout">
        {/* 左サイドバー */}
        <aside className="sidebar-left">
          <ul className="file-list">
            <li>📁 components</li>
            <li>📄 next-env.d.ts</li>
            <li>📄 next.config.js</li>
            <li>📄 package.json</li>
            <li>📄 tsconfig.json</li>
          </ul>
        </aside>

        {/* メインエリア */}
        <main className="editor-main">
          <Editor
            height="500px"
            defaultLanguage="c"
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
          />
          <div className="terminal">
            <code>Linux環境情報...（ダミー）</code>
          </div>
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
              onClick={() => console.log('image')}
              size="medium"
              color="blue"
              variant="solid"
            />
            <div className="step-test-btn">
              {[1, 2, 3, 4].map((i) => (
                <Button
                  key={i}
                  label={`テスト${i}を実行`}
                  onClick={() => console.log(`テスト${i}`)}
                  size="small"
                  color="blue"
                />
              ))}
            </div>
          </div>

          <div className="exit-btn">
            <Button
              label="終了"
              onClick={() => console.log('image')}
              size="medium"
              color="red"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};
