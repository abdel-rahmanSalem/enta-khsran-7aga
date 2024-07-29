function MaTgrbYaAkhy({ videoRef, isOpenVideo }) {
  return (
    <div
      className={`transition-opacity duration-500 ${isOpenVideo ? "opacity-100" : "hidden opacity-0"}`}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="rounded-md shadow-lg"
      >
        <source src="/againNagainNagain.MP4" type="video/mp4" />
        استخدم متصفح تاني:)
      </video>
    </div>
  );
}

export default MaTgrbYaAkhy;
