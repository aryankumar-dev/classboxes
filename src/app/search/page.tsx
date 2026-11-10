import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, ChevronRight, FileText, Newspaper, UserRound } from "lucide-react";
import Highlight from "@/components/search/Highlight";
import SearchSidebar from "@/components/search/SearchSidebar";
import { search, searchTerms } from "@/lib/search";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false },
};

export default function SearchPage(props: PageProps<"/search">) {
  return (
    <Suspense fallback={<SearchShell query="" loading />}>
      <Results searchParams={props.searchParams} />
    </Suspense>
  );
}

async function Results({ searchParams }: Pick<PageProps<"/search">, "searchParams">) {
  const { s } = await searchParams;
  const query = (Array.isArray(s) ? s[0] : s ?? "").trim();
  return <SearchShell query={query} />;
}

function SearchShell({ query, loading = false }: { query: string; loading?: boolean }) {
  const results = loading ? [] : search(query);
  const terms = searchTerms(query);

  return (
    <>
      {/* Header band: HOME › SEARCH breadcrumb + the search term as heading */}
      <section className="relative overflow-hidden bg-mist/70">
        <div className="stripes absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-20" />
        <div className="container-x relative py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted">
              <li><Link href={routes.home} className="hover:text-brand">Home</Link></li>
              <li aria-hidden><ChevronRight className="h-4 w-4" /></li>
              <li aria-current="page" className="text-brand">Search</li>
            </ol>
          </nav>
          <h1 className="font-heading text-[36px] font-extrabold leading-tight tracking-tight text-navy sm:text-[46px]">
            {query ? (
              <>
                <span className="text-brand">“{query}”</span>
              </>
            ) : (
              "Search"
            )}
          </h1>
          {!loading && query && (
            <p className="mt-3 text-[15px] text-muted">
              {results.length} {results.length === 1 ? "result" : "results"} found
            </p>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_340px]">
          <div>
            {loading ? (
              <p className="text-muted">Searching…</p>
            ) : !query ? (
              <p className="text-[17px] text-ink/75">Type a keyword in the search box to search our pages and blog posts.</p>
            ) : results.length === 0 ? (
              <div className="rounded-3xl border border-line p-10 text-center">
                <p className="text-[18px] font-semibold text-navy">
                  We are sorry, there are no results for: <span className="text-brand">{query}</span>
                </p>
                <Link
                  href={routes.home}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Homepage
                </Link>
              </div>
            ) : (
              <ol className="space-y-6">
                {results.map((r) => (
                  <li key={`${r.type}-${r.title}`}>
                    <article className="group rounded-3xl border border-line bg-white p-7 transition hover:border-transparent hover:shadow-card">
                      <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                          {r.type === "Blog" ? <Newspaper className="h-3.5 w-3.5" /> : <FileText className="h-3.5 w-3.5" />}
                          {r.type}
                        </span>
                        {r.date && (
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5 text-brand" />
                            {r.date}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5">
                          <UserRound className="h-3.5 w-3.5 text-brand" />
                          by ClassBoxes Team
                        </span>
                      </p>
                      <h2 className="mt-3 font-sans text-[22px] font-extrabold leading-snug text-navy transition group-hover:text-brand">
                        <Link href={r.href}>
                          <Highlight text={r.title} terms={terms} />
                        </Link>
                      </h2>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">
                        <Highlight text={r.excerpt} terms={terms} />
                      </p>
                      <Link
                        href={r.href}
                        aria-label={`Open ${r.title}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand"
                      >
                        {r.type === "Blog" ? "Read more" : "View page"}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </article>
                  </li>
                ))}
              </ol>
            )}
          </div>
          <SearchSidebar query={query} />
        </div>
      </section>
    </>
  );
}
