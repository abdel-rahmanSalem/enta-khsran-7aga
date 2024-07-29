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
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          className="fixed left-6 top-6 fill-slate-400"
        >
          <path d="M 17 5 C 14.250484 5 12 7.2504839 12 10 L 12 12 L 10 12 C 7.2504839 12 5 14.250484 5 17 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 33 45 C 35.749516 45 38 42.749516 38 40 L 38 38 L 40 38 C 42.749516 38 45 35.749516 45 33 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 17 5 z M 17 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 33 C 43 34.668484 41.668484 36 40 36 L 38 36 L 36 36 L 17 36 C 15.331516 36 14 34.668484 14 33 L 14 23 C 14 21.883334 14.883334 21 16 21 L 19 21 L 19 27 C 19 29.197334 20.802666 31 23 31 L 29 31 L 31 31 L 34 31 C 36.197334 31 38 29.197334 38 27 L 38 17 C 38 14.250484 35.749516 12 33 12 L 14 12 L 14 10 C 14 8.3315161 15.331516 7 17 7 z M 10 14 L 12 14 L 14 14 L 33 14 C 34.668484 14 36 15.331516 36 17 L 36 27 C 36 28.116666 35.116666 29 34 29 L 31 29 L 31 23 C 31 20.802666 29.197334 19 27 19 L 21 19 L 19 19 L 16 19 C 13.802666 19 12 20.802666 12 23 L 12 33 C 12 35.749516 14.250484 38 17 38 L 36 38 L 36 40 C 36 41.668484 34.668484 43 33 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 17 C 7 15.331516 8.3315161 14 10 14 z M 21 21 L 27 21 C 28.116666 21 29 21.883334 29 23 L 29 29 L 23 29 C 21.883334 29 21 28.116666 21 27 L 21 21 z"></path>{" "}
        </svg>
      </span>
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
                placeholder="عاوز تجرب تعمل ايه...؟"
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
