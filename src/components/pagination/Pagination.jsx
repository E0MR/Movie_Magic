import { useState } from "react";

import "./Pagination.css";

export default function Pagination({
  allPages = 100,
  current = 1,
  onPageChange,
}) {
  const [goto, setGoto] = useState("");

  function build7(total, current) {
    total = Math.max(1, Math.floor(total));
    current = Math.min(total, Math.max(1, Math.floor(current)));
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= 4) {
      return [1, 2, 3, 4, 5, "...", total];
    }
    if (current >= total - 3) {
      return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
    }
    return [1, "...", current - 1, current, current + 1, "...", total];
  }

  const items = build7(allPages, current);

  return (
    <div className="pagination">
      <div className="controls">
        <input
          id="current"
          type="number"
          min="1"
          placeholder="Go to page!"
          value={goto}
          onChange={(e) => setGoto(e.target.value)}
        />
        <button
          type="button"
          className="goTo btn-prim"
          onClick={() => {
            if (goto) {
              onPageChange(Number(goto));
              setGoto("");
            }
          }}
        >
          Go
        </button>
      </div>

      <nav className="pages" aria-label="Pagination">
        <button
          type="button"
          className="page-btn btn-prim"
          disabled={current === 1}
          onClick={() => onPageChange(current - 1)}
        >
          &#10094;
        </button>
        {items.map((it, idx) =>
          it === "..." ? (
            <span key={idx} className="ellipsis">
              …
            </span>
          ) : (
            <button
              type="button"
              key={idx}
              className={`page-btn ${it === current ? "active" : ""}`}
              aria-current={it === current ? "true" : undefined}
              onClick={() => onPageChange(it)}
            >
              {it}
            </button>
          )
        )}
        <button
          type="button"
          className="page-btn btn-prim"
          disabled={current === allPages}
          onClick={() => onPageChange(current + 1)}
        >
          &#10095;
        </button>
      </nav>
    </div>
  );
}
