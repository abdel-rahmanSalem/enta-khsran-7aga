import useTgarb from "../contexts/useTgarb";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { progressStatus as filters } from "../constants/data";
import Tgroba from "../components/Tgroba";

function List() {
  const { tgarb } = useTgarb();
  const [curFilter, setCurFilter] = useState(null);
  const [labels, setLabels] = useState([]);
  const [showAll, setShowAll] = useState(true);

  function handleFilterClick(filter) {
    setCurFilter((prev) => (prev === filter ? null : filter));
    setShowAll(false);
  }

  function handleLabelClick(label) {
    if (labels.includes(label)) {
      setLabels((prev) => prev.filter((curlabel) => curlabel !== label));
    } else {
      setLabels((prev) => [...prev, label]);
    }
  }

  function handleShowAllClick() {
    setShowAll(true);
    setCurFilter(null);
  }

  return (
    <div className="w-11/12 overflow-hidden py-14">
      <div className="flex items-center justify-between">
        <h1 className="font-bold uppercase tracking-[5px] text-slate-50/90 sm:text-2xl">
          My List of Risks
        </h1>
        {/* <button className="flex flex-col gap-[1px]">
          <span className="h-1 w-1 rounded-full bg-slate-500/50 sm:h-[5px] sm:w-[5px]"></span>
          <span className="h-1 w-1 rounded-full bg-slate-500/50 sm:h-[5px] sm:w-[5px]"></span>
          <span className="h-1 w-1 rounded-full bg-slate-500/50 sm:h-[5px] sm:w-[5px]"></span>
        </button> */}
      </div>
      <div className="h-full w-full rounded-lg border border-slate-200/5 bg-slate-900/20 p-4 shadow-lg">
        <div className="mb-4 flex items-center gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
            <input
              className="w-full rounded-md border border-slate-200/5 bg-slate-950 p-2 pl-10 text-gray-200 placeholder-gray-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
              placeholder="Search..."
            />
          </div>
          <div className="mx-4 hidden h-8 border-l border-slate-400/50 sm:block" />
          <button
            onClick={handleShowAllClick}
            className={`rounded-md border border-slate-400/50 px-4 py-2 text-sm sm:text-base ${
              showAll ? "bg-sky-600 text-white" : "bg-slate-900 text-slate-200"
            }`}
          >
            All
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-2 pb-1">
            {filters.map((filter) => (
              <button
                key={filter.status}
                onClick={() => handleFilterClick(filter.status)}
                className={`rounded-md border px-2 py-1 text-sm capitalize sm:text-base ${
                  filter.status === curFilter
                    ? filter.selectedStyle
                    : filter.style
                } transition-colors duration-200`}
              >
                {filter.status}
              </button>
            ))}
          </div>
          <div className="mx-0.5 hidden h-8 border-l border-slate-400/50 sm:block" />
          <div className="no-scrollbar lg:scrollbar flex gap-2 overflow-x-auto pb-1">
            {[
              "important",
              "urgent",
              "later",
              "college",
              "life",
              "new",
              "any",
            ].map((label) => (
              <button
                key={label}
                onClick={() => handleLabelClick(label)}
                className={`rounded-md border-2 border-slate-500/50 px-2 py-1 text-sm capitalize sm:text-base ${
                  labels.includes(label)
                    ? "bg-sky-900 text-slate-50"
                    : "bg-slate-900 text-slate-200"
                } transition-colors duration-200`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        {tgarb.length === 0 && (
          <div className="mt-20 flex w-full items-center justify-center">
            <h1 className="rounded-lg bg-slate-900/20 px-10 py-6 text-red-400/50 shadow-lg md:text-xl">
              Nothing to show here :(
            </h1>
          </div>
        )}
        {tgarb.length > 0 && (
          <ul className="my-8 flex h-4/6 flex-col gap-2 overflow-y-scroll sm:h-5/6">
            {tgarb.map((tgroba) => (
              <Tgroba
                title={tgroba.title}
                date={tgroba.date}
                statusIndex={tgroba.statusIndex}
                labels={tgroba.labels}
                id={tgroba.id}
                key={tgroba.id}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default List;
