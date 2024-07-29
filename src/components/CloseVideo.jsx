function CloseVideo({ setIsOpenVideo }) {
  return (
    <div className="fixed -bottom-24 left-1/2 -translate-x-1/2">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-xl text-slate-500 hover:bg-slate-700"
        onClick={() => setIsOpenVideo(false)}
      >
        X
      </button>
    </div>
  );
}

export default CloseVideo;
