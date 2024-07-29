import { useState, useRef, useEffect } from "react";

function App() {
  const [isGrb, setIsGrb] = useState("");
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpenVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpenVideo]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900 text-gray-200">
      <div className="flex flex-col items-center p-4">
        <div
          className={`flex flex-col items-center gap-4 rounded-lg bg-slate-800 ${isOpenVideo ? "px-6 py-7" : "px-8 py-6"} shadow-md`}
        >
          <div
            className={`transition-opacity duration-500 ${isOpenVideo ? "opacity-100" : "hidden opacity-0"}`}
          >
            <video
              ref={videoRef}
              width="270"
              autoPlay
              playsInline
              className="rounded-md shadow-lg"
            >
              <source src="/againNagainNagain.MP4" type="video/mp4" />
              استخدم متصفح تاني:)
            </video>
          </div>
          {!isOpenVideo && (
            <>
              <input
                id="tgroba"
                type="text"
                placeholder="عاوز تجرب ايه...؟"
                value={isGrb}
                onChange={(e) => setIsGrb(e.target.value)}
                className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {isGrb.length > 3 && (
                <button
                  className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                  onClick={() => setIsOpenVideo(true)}
                >
                  أجرب ولا فاكس؟
                </button>
              )}
            </>
          )}
        </div>
      </div>
      {isOpenVideo && (
        <div className="fixed bottom-20">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-xl text-gray-400 hover:bg-slate-700"
            onClick={() => setIsOpenVideo(false)}
          >
            <span>X</span>
          </button>
        </div>
      )}
      <span
        dir="rtl"
        lang="en"
        className="fixed bottom-6 left-6 text-sm text-slate-400"
      >
        BY{" "}
        <a
          href="https://x.com/_Abdo_Salem"
          rel="noopener noreferrer"
          target="_blank"
          className="underline underline-offset-1"
        >
          MEGZ
        </a>
        .
      </span>
    </div>
  );
}

export default App;
