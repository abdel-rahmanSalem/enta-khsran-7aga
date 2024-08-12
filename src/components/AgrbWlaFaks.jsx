import useTgarb from "../contexts/useTgarb";
import formatDate from "../utils/formatDate";

function AgrbWlaFaks({ tgrobaTitle, setTgrobaTitle, setIsOpenVideo }) {
  const { setTgarb } = useTgarb();
  function handleSubmit(e) {
    e.preventDefault();
    if (tgrobaTitle.length < 4) return;
    const formattedDate = formatDate(new Date());
    setTgarb((cur) => [
      ...cur,
      {
        title: tgrobaTitle,
        date: formattedDate,
        statusIndex: 0,
        labels: ["normal"],
        id: new Date(),
      },
    ]);
    setIsOpenVideo(true);
    setTgrobaTitle("");
  }
  return (
    <form
      dir="auto"
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4"
    >
      <ul>
        <li className="text-xs text-slate-300 sm:text-sm md:text-base">
          هنا هتكتب حاجه نفسك تعملها/تجربها بس مكسل
        </li>
      </ul>
      <input
        dir="auto"
        id="tgroba"
        type="text"
        placeholder="3awz a3ml Operating System"
        value={tgrobaTitle}
        onChange={(e) => setTgrobaTitle(e.target.value)}
        className="rounded-md border border-slate-200/5 bg-slate-950 p-3 text-gray-200 placeholder-gray-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
      />
      {tgrobaTitle.length > 3 && (
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
