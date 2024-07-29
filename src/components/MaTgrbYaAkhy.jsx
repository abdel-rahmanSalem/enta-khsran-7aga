function MaTgrbYaAkhy({ videoRef }) {
  return (
    <div>
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
  );
}

export default MaTgrbYaAkhy;
