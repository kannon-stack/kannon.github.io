import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

function NotFound() {
  return (
    <main className="site-shell not-found">
      <div className="not-found-panel">
        <span className="section-label">
          <span className="section-index">404</span>
          <span>Signal lost</span>
        </span>
        <h1>
          Nothing lives
          <br />
          <span className="h1-signal">here_</span>
        </h1>
        <p>That page doesn't exist. The good stuff is one click away.</p>
        <Link className="button button-primary" href="/">
          Back to AGKBUILDS <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
