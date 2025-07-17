import React, { useState } from 'react';
import { AsgmtForm } from '../../../stories/admin/organisms/AsgmtForm';
import type { FormInput } from '../../../stories/admin/organisms/AsgmtForm';
import { GenerateAsgmt } from '../../../stories/admin/organisms/GenerateAsgmt';
import { AdminHeader } from '../../../stories/admin/organisms/AdminHeader';
import '../../../styles/asgmtCreatePage.css';

export const CreatePage: React.FC = () => {
  const [input, setInput] = useState<FormInput | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (formData: FormInput) => {
    setLoading(true);
    setResult(null);
    setInput(formData);

    // API呼び出しを行う箇所をいったんコメントアウト

    // const prompt = `
    // 以下の情報を元に課題を作成してください。
    // - テーマ: ${formData.theme}
    // - 技術スタック: ${formData.techStack}
    // - 概要: ${formData.overview}
    // - 難易度など: ${formData.extra}

    // 出力フォーマット：
    // ■ 問題の概要：
    // ■ 条件：
    // ■ 使用リスト：
    // ■ サンプルコード：
    // `;

    // try {

    // 	const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    // 	console.log(apiKey)

    //   const res = await fetch("https://api.openai.com/v1/chat/completions", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //     body: JSON.stringify({
    //       model: "gpt-3.5-turbo",
    //       messages: [{ role: "user", content: prompt }],
    //       temperature: 0.7,
    //     }),
    //   });

    //   const data = await res.json();
    //   setResult(data.choices?.[0]?.message?.content ?? "生成失敗");
    // } catch (err) {
    //   setResult("エラーが発生しました。");
    // } finally {
    //   setLoading(false);
    // }

    // 疑似出力
    setTimeout(() => {
      const mockResult = `
			■ 問題の概要：

			${formData.theme} をテーマに、${formData.techStack} を使ってアプリを開発します。
			このアプリは ${formData.overview} を目的とし、学習効果を高めるために構成されます。

			■ 条件：

			- ${formData.techStack} を用いること
			- コンポーネント分割を行うこと
			- 最低限のUIデザインを整えること

			■ 使用リスト：

			- ${formData.techStack}
			- Vite / React / TypeScript
			- GitHubで管理

			■ サンプルコード：

			\`\`\`tsx
			import React from 'react';

			export const SampleComponent = () => {
			  return <div>${formData.theme} に関するコンポーネント</div>;
			}
			\`\`\`

			`;

      setResult(mockResult);
      setLoading(false);
    }, 1000); // 1秒待って生成風に見せる
  };

  const handleRegenerate = () => {
    if (input) handleGenerate(input);
  };

  const handleSave = () => {
    if (input && result) {
      console.log('保存内容：', { ...input, result });
      alert('（仮）課題を保存しました！（コンソールに出力）');
      // TODO: 実際はローカルストレージやDB保存など
    }
  };

  return (
    <div className="createPage">
      <AdminHeader />
      <div className="content" style={{ padding: 20 }}>
        <h2>AI課題作成フォーム</h2>
        <AsgmtForm onSubmit={handleGenerate} loading={loading} />
        {result && (
          <GenerateAsgmt
            result={result}
            onRegenerate={handleRegenerate}
            onSave={handleSave}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};
