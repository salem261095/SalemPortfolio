import { useEffect } from "react";

export default function CategoryFilter() {
  useEffect(() => {
    const handleFilter = (type: string) => {
      const allCards = document.querySelectorAll(".PortfolioSingle");
      allCards.forEach((card) => {
        const id = card.id;
        card.classList.toggle("hidden-card", !(type === "all" || id === type));
      });
    };

    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-cat") || "all";
        handleFilter(type);
      });
    });

    return () => {
      buttons.forEach((btn) => btn.replaceWith(btn.cloneNode(true)));
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-start mb-6">
      <button
        className="filter-btn bg-bg-600 hover:bg-bg-700 p-2 rounded transition"
        data-cat="all"
      >
        الكل
      </button>
      <button
        className="filter-btn bg-bg-600 hover:bg-bg-700 p-2 rounded transition"
        data-cat="web"
      >
        مشاريع تصميم الويب
      </button>
      <button
        className="filter-btn bg-bg-600 hover:bg-bg-700 p-2 rounded transition"
        data-cat="graphic"
      >
        مشاريع تصميم الجرافيك
      </button>
    </div>
  );
}
