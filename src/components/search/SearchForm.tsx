import Form from "next/form";
import { Search } from "lucide-react";
import { routes } from "@/lib/routes";

/** "Looking for..." search box. Submits ?s=term to /search (client-side navigation via next/form). */
export default function SearchForm({
  defaultValue = "",
  autoFocus = false,
  onSubmit,
  className = "",
}: {
  defaultValue?: string;
  autoFocus?: boolean;
  onSubmit?: () => void;
  className?: string;
}) {
  return (
    <Form
      action={routes.search}
      onSubmit={onSubmit}
      role="search"
      className={`relative ${className}`}
    >
      <label>
        <span className="sr-only">Search the site</span>
        <input
          type="search"
          name="s"
          required
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          placeholder="Looking for..."
          className="h-[52px] w-full rounded-full border border-line bg-white pl-5 pr-14 text-[15px] text-navy outline-none transition placeholder:text-muted/80 focus:border-brand focus:ring-4 focus:ring-brand/10 [&::-webkit-search-cancel-button]:hidden"
        />
      </label>
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
      >
        <Search className="h-4 w-4" />
      </button>
    </Form>
  );
}
