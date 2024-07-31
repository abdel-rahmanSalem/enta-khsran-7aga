function AgrbWlaFaks({ isGrb, setIsGrb, setIsOpenVideo }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (isGrb.length < 4) return;
    setIsOpenVideo(true);
    setIsGrb("");
  }
  return (
    <form
      dir="auto"
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4"
    >
      <li className="text-xs text-slate-300 sm:text-sm md:text-base">
        هنا هتكتب حاجه نفسك تعملها/تجربها بس مكسل
      </li>
      <input
        dir="auto"
        id="tgroba"
        type="text"
        placeholder="3awz a3ml Operating System"
        value={isGrb}
        onChange={(e) => setIsGrb(e.target.value)}
        className="rounded-md border border-slate-200/5 bg-slate-950 p-3 text-gray-200 placeholder-gray-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
      />
      {isGrb.length > 3 && (
        <button
          type="submit"
          className="w-full rounded-md bg-sky-700 px-4 py-2 text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          أجرب ولا فاكس؟
        </button>
      )}
    </form>
  );
}

export default AgrbWlaFaks;
