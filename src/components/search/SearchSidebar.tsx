import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { recentPosts } from "@/lib/search";
import SearchForm from "./SearchForm";

/** Right-hand sidebar on search results: search box + Recent Posts. */
export default function SearchSidebar({ query = "" }: { query?: string }) {
  return (
    <aside className="space-y-8">
      <div className="rounded-3xl border border-line bg-white p-6">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand">Search</h2>
        <SearchForm defaultValue={query} />
      </div>
      <div className="rounded-3xl border border-line bg-white p-6">
        <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">Recent Posts</h2>
        <ul className="divide-y divide-line">
          {recentPosts.map((p) => (
            <li key={p.title} className="py-4">
              <Link href={p.href} className="block font-semibold leading-snug text-navy transition hover:text-brand">
                {p.title}
              </Link>
              <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-muted">
                <CalendarDays className="h-3.5 w-3.5 text-brand" />
                {p.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
