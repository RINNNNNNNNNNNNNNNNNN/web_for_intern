import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black text-zinc-900 dark:text-zinc-100 pb-20">
      
      {/* メインコンテナ（幅を少し広げて読みやすくしています） */}
      <main className="flex w-full max-w-4xl flex-col gap-16 pt-24 px-8 sm:px-16">
        
        {/* --- 1. ヘッダー＆自己紹介セクション --- */}
        <section className="flex flex-col gap-6 text-center sm:text-left">
          <h1 className="text-5xl font-bold tracking-tight">
            Kawabata's Portfolio
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Undergraduate Student at Tokyo University of Science, majoring in Applied Mathematics.<br />
            Passionate about competitive programming, algorithm development, and advanced statistical theory.
          </p>
          
          {/* リンクボタン */}
          <div className="flex flex-col gap-4 mt-2 sm:flex-row w-full sm:w-auto">
            <a
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-black px-8 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              href="https://atcoder.jp/users/rin1202"
              target="_blank"
              rel="noopener noreferrer"
            >
              AtCoder Profile
            </a>
            <a
              className="flex h-12 items-center justify-center rounded-full border border-solid border-zinc-300 px-8 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              href="https://github.com/RINNNNNNNNNNNNNNNNNN/web_for_intern"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* --- 2. 何を学んでいるか (What I am Learning) --- */}
        <section className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">What I am Learning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 学び 1: アルゴリズムと競プロ */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl font-medium">Algorithms & Competitive Programming</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Actively participating in AtCoder using C++. Focusing on optimizing time complexity and implementing advanced data structures and dynamic programming.
              </p>
            </div>

            {/* 学び 2: 応用数学と統計学 */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl font-medium">Advanced Statistics & Applied Math</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Studying multivariable analysis, information theory, and maximum likelihood estimation. Currently preparing for the Statistics Certification (Grade Pre-1).
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. このサイトについて (About This Site) --- */}
        <section className="flex flex-col gap-6 mb-16">
          <h2 className="text-3xl font-semibold">About This Site</h2>
          
          <div className="flex flex-col gap-4 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
              This portfolio was built to showcase my technical skills and document my learning journey.
            </p>
            
            <div>
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>Next.js (App Router) / React</li>
                <li>Tailwind CSS for styling</li>
                <li>TypeScript</li>
                <li>Deployed on Vercel</li>
              </ul>
            </div>

            <div className="mt-2">
              <h4 className="font-semibold mb-2">References & Resources:</h4>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>Next.js Official Documentation</li>
                <li>Tailwind CSS Documentation</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}