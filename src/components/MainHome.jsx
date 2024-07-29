import { useState, useRef, useEffect } from "react";
import CloseVideo from "./CloseVideo";
import MaTgrbYaAkhy from "./MaTgrbYaAkhy";
import AgrbWlaFaks from "./AgrbWlaFaks";

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
        className={`w-full max-w-3xl rounded-lg bg-slate-800 ${isOpenVideo ? "px-6 py-7" : "px-8 py-6"} shadow-md`}
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
