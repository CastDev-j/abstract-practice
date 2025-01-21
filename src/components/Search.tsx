import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import ArrowCard from "@components/ArrowCard";
import type { CollectionEntry } from "astro:content";
import { IoMdSearch } from "react-icons/io";
import { FaCat, FaSadTear } from "react-icons/fa";

type Props = {
  data: CollectionEntry<"blog">[];
};

const Search: React.FC<Props> = ({ data }) => {
  console.log("search input renderizado");

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CollectionEntry<"blog">[]>([]);

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length >= 2) {
      setResults(fuse.search(query).map((result) => result.item));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
      <div className="flex flex-col w-full max-w-md appear-animation">
        <div className="relative">
          <input
            name="search"
            type="text"
            value={query}
            onChange={onInput}
            autoComplete="off"
            spellCheck={false}
            placeholder="What are you looking for?"
            className="w-full px-4.5 py-2.5 pl-10 rounded outline-none border-2 border-neutral-950 text-neutral-600 focus:text-neutral-950"
          />
          <IoMdSearch className="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current focus:text-neutral-950" />
        </div>
      </div>

      <div className="absolute w-full h-auto bg-neutral-50 shadow-xl top-20 flex flex-col gap-6 p-6 text-neutral-950 appear-animation">
        {query.length >= 2 && results.length >= 1 ? (
          <>
            <div className="text-sm mb-2">
              Found {results.length} results for {`'${query}'`}
            </div>
            <ul className="flex flex-col gap-3">
              {results.map((result) => (
                <li key={result.slug}>
                  <ArrowCard entry={result} pill={true} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="text-sm flex gap-2 justify-start items-center">
            {query.length >= 2 ? (
              <>
                No results found for <code>{`'${query}'`}</code>
                <FaSadTear />
              </>
            ) : (
              <>
                Type at least 2 characters to search
                <FaCat />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
