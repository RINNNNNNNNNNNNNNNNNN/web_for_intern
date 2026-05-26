import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-12 py-32 px-8 bg-white dark:bg-black sm:items-start sm:px-16">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {/* 名前やタイトル */}
          <h1 className="max-w-md text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Ryotaro Kawabata
          </h1>
          
          {/* 自己紹介文 */}
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            東京理科大学 応用数学科。<br />
            C++を用いた競技プログラミングやアルゴリズム実装、統計学について学んでいます。
          </p>
        </div>

        {/* リンクボタンのエリア */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full sm:w-auto">
          
          {/* AtCoderへのリンク（★ここのhrefを書き換えてください） */}
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-8 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            href="ここにAtCoderのURLを貼り付けてください"
            target="_blank"
            rel="noopener noreferrer"
          >
            AtCoder Profile
          </a>

          {/* GitHubなど、その他のリンク（不要なら <a ... >〜</a> ごと消してOKです） */}
          <a
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>
      </main>
    </div>
  );
}