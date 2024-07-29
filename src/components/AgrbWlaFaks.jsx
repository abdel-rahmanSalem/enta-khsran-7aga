function AgrbWlaFaks({ isGrb, setIsGrb, setIsOpenVideo }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (isGrb.length < 4) return;
    setIsOpenVideo(true);
    setIsGrb("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <input
        dir="rtl"
        id="tgroba"
        type="text"
        placeholder="عاوز تجرب تعمل ايه...؟"
        value={isGrb}
        onChange={(e) => setIsGrb(e.target.value)}
        className="rounded-md border border-slate-200/5 bg-slate-950 p-3 text-gray-200 placeholder-gray-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
      />
      {isGrb.length > 3 && (
        <button
          type="submit"
          className="w-full rounded-md bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          أجرب ولا فاكس؟
        </button>
      )}
    </form>
  );
}

export default AgrbWlaFaks;
