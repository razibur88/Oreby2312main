import React from "react";

const PaginationArea = ({ pageNumber, paginate, pageStart, next, prve }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-sm">
        {pageNumber.length > 0 && (
          <li onClick={prve}>
            <a class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </a>
          </li>
        )}
        {pageNumber.map((item, i) => (
          <li onClick={() => paginate(item)}>
            <a
              class={
                pageStart == i + 1
                  ? "flex items-center justify-center px-3 h-8 leading-tight text-[#fff] bg-[#222] border"
                  : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border"
              }
            >
              {item + 1}
            </a>
          </li>
        ))}

        {pageNumber.length > 0 && (
          <li onClick={next}>
            <a class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default PaginationArea;
