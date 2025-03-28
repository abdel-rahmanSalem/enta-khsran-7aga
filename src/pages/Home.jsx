import { useState, useRef, useEffect } from "react";
import CloseVideo from "../components/CloseVideo";
import MaTgrbYaAkhy from "../components/MaTgrbYaAkhy";
import AgrbWlaFaks from "../components/AgrbWlaFaks";

function MainHome() {
  const [tgrobaTitle, setTgrobaTitle] = useState("");
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
    <div className="flex w-full flex-col items-center gap-8">
      <div
        className={`w-full max-w-lg rounded-lg border border-slate-200/5 bg-slate-900/20 shadow-lg ${isOpenVideo ? "px-6 py-7" : "px-8 py-6"}`}
      >
        <MaTgrbYaAkhy videoRef={videoRef} isOpenVideo={isOpenVideo} />
        {!isOpenVideo && (
          <AgrbWlaFaks
            tgrobaTitle={tgrobaTitle}
            setTgrobaTitle={setTgrobaTitle}
            setIsOpenVideo={setIsOpenVideo}
          />
        )}
      </div>
      {isOpenVideo && <CloseVideo setIsOpenVideo={setIsOpenVideo} />}
    </div>
  );
}

export default MainHome;
