import { formatDate } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">;
  pill?: boolean;
};

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a
      href={`/${entry.collection}/${entry.slug}`}
      className="group p-4 gap-3 flex items-center border border-neutral-950 rounded-lg transition-colors duration-300 ease-in-out"
    >
      <div className="w-full group-hover:blend">
        <div className="flex flex-wrap items-center gap-2 justify-between">
          {pill && (
            <div className="text-sm capitalize px-2 py-0.5 rounded-full border bg-neutral-950 text-neutral-50">
              {entry.collection === "blog" ? "post" : "project"}
            </div>
          )}
          <div className="text-sm uppercase text-neutral-600">{formatDate(entry.data.date)}</div>
        </div>
        <div className="font-semibold mt-3">
          {entry.data.title}
        </div>

        <div className="text-sm line-clamp-2">{entry.data.summary}</div>
        <ul className="flex flex-wrap mt-2 gap-1">
          {entry.data.tags.map(
            (
              tag: string // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
            ) => (
              <li className="text-xs uppercase py-0.5 px-1 rounded bg-neutral-950/10">
                {tag}
              </li>
            )
          )}
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="stroke-current"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          className="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
        <polyline
          points="12 5 19 12 12 19"
          className="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </svg>
    </a>
  );
}
