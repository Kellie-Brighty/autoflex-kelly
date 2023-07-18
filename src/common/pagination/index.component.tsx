import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface PaginationComponentProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [pages, setPages] = useState<(number | string)[]>([]);

  const handleGoBack = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  useEffect(() => {
    let _pages = [];
    if (totalPages <= 3) {
      _pages = Array(totalPages)
        .fill(0)
        .map((_, index) => index + 1);
    } else {
      if (currentPage <= 2) {
        _pages = [1, 2, 3, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        _pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        _pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    setPages(_pages);
  }, [totalPages, currentPage]);

  return (
    <div className={"flex items-stretch gap-2"}>
      <button
        disabled={currentPage === 1}
        onClick={handleGoBack}
        className={
          "aspect-square px-3 flex items-center justify-center border border-gray-main rounded-md"
        }
      >
        <ChevronLeftIcon className={"w-5 h-5"} />
      </button>

      {pages.map((page, index) => (
        <div
          key={page}
          className={`aspect-square px-3 flex items-center justify-center ${
            page === currentPage
              ? "text-primary bg-background border border-background"
              : "border border-gray-main"
          } font-medium rounded-md cursor-pointer`}
        >
          <button
            onClick={() =>
              typeof page === "number" ? onPageChange(page) : null
            }
          >
            {page.toString().padStart(2, "0")}
          </button>
        </div>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={handleNext}
        className={
          "aspect-square px-3 flex items-center justify-center border border-gray-main rounded-md"
        }
      >
        <ChevronRightIcon className={"w-5 h-5"} />
      </button>
    </div>
  );
};

export default PaginationComponent;
