import React from "react";
import { createRoot } from "react-dom/client";

const Profile = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <img
          src="images/qingzheng_profile.png"
          alt="Qingzheng Wang"
          className="relative w-48 h-48 rounded-full object-cover border-2 border-white shadow-lg"
        />
      </div>
      
      <div>
        <h1 className="text-3xl font-sans font-bold text-gray-900">Qingzheng Wang</h1>
        <h2 className="text-xl font-sans text-gray-600 mt-1">王清正</h2>
      </div>

      <div className="flex flex-col space-y-3 text-sm text-gray-900 w-full">
        <a href="https://scholar.google.com/citations?user=Ihvv-tEAAAAJ&hl=en" target="_blank" className="flex items-center justify-center md:justify-start hover:text-blue-600 transition-colors group">
          <img src="images/Google_Scholar_logo.svg.png" className="w-5 h-5 mr-3 transition-opacity" alt="Scholar" />
          <span>Google Scholar</span>
        </a>
        <a href="mailto:qingzhengwang.app@gmail.com" className="flex items-center justify-center md:justify-start hover:text-blue-600 transition-colors group">
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" className="w-5 h-5 mr-3 transition-opacity" alt="Email" />
          <span>qingzhengwang.app@gmail.com</span>
        </a>
        <a href="https://github.com/Qingzheng-Wang" target="_blank" className="flex items-center justify-center md:justify-start hover:text-blue-600 transition-colors group">
          <img src="images/github-mark.png" className="w-5 h-5 mr-3 transition-opacity" alt="Github" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/qingzheng-wang-65627427a/" target="_blank" className="flex items-center justify-center md:justify-start hover:text-blue-600 transition-colors group">
          <img src="images/LinkedIn_icon.svg.png" className="w-5 h-5 mr-3 transition-opacity" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </div>
      
      <div className="pt-6 border-t border-gray-100 w-full hidden md:block">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Experiences</p>
        <div className="space-y-4">
           <div className="flex items-center space-x-3">
              <img src="images/cmu.png" className="w-8 h-auto" alt="CMU Logo" />
              <div className="text-xs text-gray-600">
                <div className="font-semibold">Carnegie Mellon University</div>
                <div>Master | 2024 - 2026</div>
              </div>
           </div>
           <div className="flex items-center space-x-3">
              <img src="images/whu.png" className="w-8 h-auto" alt="WHU Logo" />
              <div className="text-xs text-gray-600">
                <div className="font-semibold">Wuhan University</div>
                <div>Bachelor | 2020 - 2024</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          I am a Master's student at Carnegie Mellon University. 
          I do research on Speech Language Models.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Publications</h3>
        <div className="space-y-8">

          <Publication
            title="Bagpiper: Solving Open-Ended Audio Tasks via Rich Captions"
            authors={
              <>
                Jinchuan Tian*, Haoran Wang*, Bo-Hao Su*, Chien-yu Huang*, <strong className="text-gray-900">Qingzheng Wang</strong>*, Jiatong Shi, William Chen, Xun Gong, Siddhant Arora, Chin-Jou Li, Masao Someki, Takashi Maekaku, Yusuke Shinohara, Jin Sakuma, Chao-Han Huck Yang, Shinji Watanabe
              </>
            }
            venue="arXiv, 2026"
            links={[
              { text: "PDF", url: "https://arxiv.org/pdf/2602.05220" }
            ]}
          />
          
          <Publication
            title="CS-YODAS: A Mined Dataset of In-the-Wild Code-Switched Speech"
            authors={
              <>
                Brian Yan, <strong className="text-gray-900">Qingzheng Wang</strong>, Matthew Wiesner, Olga Iakovenko, Alexander Polok, Anuj Diwan, Injy Hamed, Shuichiro Shimizu, Thomas Hain, David Mortensen, Peter Viechnicki, Shinji Watanabe
              </>
            }
            venue="Submitted to LREC, 2026"
            links={[]}
          />

          <Publication
            title="Geolocation-Aware Robust Spoken Language Identification"
            authors={
              <>
                <strong className="text-gray-900">Qingzheng Wang</strong>, Hye-jin Shim, Jiancheng Sun, Shinji Watanabe
              </>
            }
            venue="Proc. IEEE ASRU, 2025"
            links={[
              { text: "PDF", url: "https://arxiv.org/pdf/2508.17148" }
            ]}
          />

          <Publication
            title="Improving Multilingual Speech Models on ML-SUPERB 2.0: Fine-tuning with Data Augmentation and LID-Aware CTC"
            authors={
              <>
                <strong className="text-gray-900">Qingzheng Wang</strong>*, Jiancheng Sun*, Yifan Peng, Shinji Watanabe (* Equal Contribution)
              </>
            }
            venue="Proc. Interspeech, 2025"
            links={[
              { text: "PDF", url: "https://www.isca-archive.org/interspeech_2025/wang25z_interspeech.pdf" }
            ]}
          />

        </div>
      </section>

      {/* Mobile only Education section */}
      <section className="md:hidden">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Experiences</h3>
        <div className="space-y-4">
           <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <img src="images/cmu.png" className="w-10 h-auto" alt="CMU Logo" />
              <div className="text-sm text-gray-700">
                <div className="font-semibold">Carnegie Mellon University</div>
                <div className="text-gray-500 text-xs">Master | 2024 - 2026</div>
              </div>
           </div>
           <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <img src="images/whu.png" className="w-10 h-auto" alt="WHU Logo" />
              <div className="text-sm text-gray-700">
                <div className="font-semibold">Wuhan University</div>
                <div className="text-gray-500 text-xs">Bachelor | 2020 - 2024</div>
              </div>
           </div>
        </div>
      </section>
      
      <section className="pt-12 text-xs text-gray-400 font-mono">
        <p>© {new Date().getFullYear()} Qingzheng Wang.</p>
      </section>
    </div>
  );
};

const Publication = ({ title, authors, venue, links }: { title: string, authors: React.ReactNode, venue: string, links: {text: string, url: string}[] }) => (
  <div>
    <h4 className="font-bold text-gray-900 text-lg leading-tight">
      {title}
    </h4>
    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
      {authors}
    </p>
    <div className="flex flex-wrap items-center gap-3 mt-2">
      <span className="italic text-sm text-gray-500 border-l-2 border-gray-200 pl-2">
        {venue}
      </span>
      {links.map((link, i) => (
        <React.Fragment key={i}>
          <span className="text-gray-300">|</span>
          <a 
            href={link.url} 
            target="_blank" 
            className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wide border border-blue-100 hover:border-blue-600 px-2 py-0.5 rounded transition-all bg-blue-50 hover:bg-white"
          >
            {link.text}
          </a>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEFAF1' }}>
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          <aside className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
             <div className="sticky top-12">
               <Profile />
             </div>
          </aside>
          
          <main className="w-full md:w-2/3 lg:w-3/4">
            <Content />
          </main>

        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
