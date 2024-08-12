import { progressStatus } from "../constants/data";
import useTgarb from "../contexts/useTgarb";

function Tgroba({ title, date, statusIndex, labels, id }) {
  const { setTgarb } = useTgarb();

  const progColor = progressStatus[statusIndex].color;
  const progBtn = progressStatus[statusIndex].btnMsg;

  function handleChangeStatus(id) {
    setTgarb((curtgarb) =>
      curtgarb
        .map((tgroba) => {
          if (tgroba.id === id) {
            if (tgroba.statusIndex === 2) return null;
            return { ...tgroba, statusIndex: tgroba.statusIndex + 1 };
          }
          return tgroba;
        })
        .filter((tgroba) => tgroba !== null),
    );
  }

  return (
    <li className="relative flex flex-col gap-1 rounded-md border border-slate-200/5 bg-slate-950/30 p-3">
      <span
        className={`absolute flex h-4 w-4 items-center justify-center rounded-full border-2 border-${progColor}-600`}
      >
        <span
          className={`absolute h-2 w-2 rounded-full border border-${progColor}-600 bg-${progColor}-600`}
        ></span>
      </span>
      <button className="absolute right-3 flex flex-col gap-[1px]">
        <span className="h-1 w-1 rounded-full bg-slate-500/50 sm:h-[5px] sm:w-[5px]"></span>
        <span className="h-1 w-1 rounded-full bg-slate-500/50 sm:h-[5px] sm:w-[5px]"></span>
        <span className="h-1 w-1 rounded-full bg-slate-500/50 sm:h-[5px] sm:w-[5px]"></span>
      </button>
      <div className="px-6">
        <h2 className="text-sm text-slate-50/90 sm:text-base">{title}</h2>
        <p className="text-xs text-slate-400/50 sm:text-sm">{date}</p>
        <div className="no-scrollbar lg:scrollbar mt-2 flex gap-2 overflow-x-auto pb-1">
          {labels.map((label) => (
            <span
              key={label}
              className="rounded-md border border-slate-500/50 bg-sky-900/40 px-2 py-1 text-xs capitalize text-slate-50/80"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <button
        className="self-end text-sm font-bold text-slate-100/50 hover:text-slate-100/80"
        onClick={() => handleChangeStatus(id)}
      >
        {progBtn}
      </button>
    </li>
  );
}

export default Tgroba;
