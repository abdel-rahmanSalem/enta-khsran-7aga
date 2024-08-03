import useTgarb from "../contexts/useTgarb";

function List() {
  const { tgarb } = useTgarb();
  if (tgarb.length === 0)
    return (
      <h1 className="rounded-lg bg-slate-900/20 px-10 py-6 text-red-400/50 shadow-lg md:text-xl">
        Nothing to show here :(
      </h1>
    );
  return (
    <div className="h-full w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="font-bold uppercase tracking-[5px] text-slate-50/90 sm:text-2xl">
        my list of risks
      </h1>
      <div className="h-full w-full rounded-lg border border-slate-200/5 bg-slate-900/20 shadow-lg"></div>
    </div>
  );
}

export default List;
