import { useState, useRef, useEffect } from "react";
import CloseVideo from "../components/CloseVideo";
import MaTgrbYaAkhy from "../components/MaTgrbYaAkhy";
import AgrbWlaFaks from "../components/AgrbWlaFaks";

function MainHome() {
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
    <div className="fixed left-1/2 flex w-full -translate-x-1/2 justify-center px-6">
      <div
        className={`w-full max-w-lg rounded-lg border border-slate-200/5 bg-slate-900 shadow-lg ${isOpenVideo ? "px-6 py-7" : "px-8 py-6"} shadow-md`}
      >
        <MaTgrbYaAkhy videoRef={videoRef} isOpenVideo={isOpenVideo} />
        {!isOpenVideo && (
          <AgrbWlaFaks
            isGrb={isGrb}
            setIsGrb={setIsGrb}
            setIsOpenVideo={setIsOpenVideo}
          />
        )}
      </div>
      {isOpenVideo && <CloseVideo setIsOpenVideo={setIsOpenVideo} />}
    </div>
  );
}

export default MainHome;
