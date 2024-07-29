function CloseVideo({ setIsOpenVideo }) {
  return (
    <div className="fixed -bottom-32 left-1/2 -translate-x-1/2">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-xl text-gray-400 hover:bg-slate-700"
        onClick={() => setIsOpenVideo(false)}
      >
        X
      </button>
    </div>
  );
}

export default CloseVideo;
