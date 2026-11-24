import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="TopDieci, vai alla homepage">
      <span className="logo-mark" aria-hidden="true">10</span>
      <span>
        TopDieci<span className="tld">.click</span>
      </span>
    </Link>
  );
}
