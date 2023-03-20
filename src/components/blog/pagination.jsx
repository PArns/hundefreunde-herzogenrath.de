import * as React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

const Pagination = ({
  urlPrefix,
  skip,
  limit,
  currentPage,
  pageCount,
  totalCount,
}) => {
  const getLinkForPage = (pageNumber) => {
    if (pageNumber === 1) return urlPrefix;
    if (pageNumber > pageCount || pageNumber <= 0) return "";

    return urlPrefix + pageNumber;
  };

  const pageStart = skip + 1;
  const pageEnd = Math.min(skip + limit, totalCount);

  const uriPreviousPage = getLinkForPage(currentPage - 1);
  const uriNextPage = getLinkForPage(currentPage + 1);

  let pageNumbers = [];
  for (var i = 0; i < pageCount; i++) pageNumbers[i] = i + 1;

  return (
    <div className="flex w-full items-center justify-between px-3 py-3">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          to={uriPreviousPage}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          disabled={!uriPreviousPage}
        >
          Vorherige
        </Link>

        <Link
          to={uriNextPage}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          disabled={!uriNextPage}
        >
          Nächste
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Blog-Eintrag{` `}
            <span className="font-medium">{pageStart}</span>
            {` `}bis{` `}
            <span className="font-medium">{pageEnd}</span>
            {` `}von{` `}
            <span className="font-medium">{totalCount}</span>
            {` `}Einträgen
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              to={uriPreviousPage}
              disabled={!uriPreviousPage}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {pageNumbers.map((pageNumber) => {
              let linkClass = classNames(
                "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",
                {
                  "z-10 bg-sky-50 border-sky-500 text-sky-600":
                    pageNumber === currentPage,
                }
              );

              return (
                <Link
                  aria-current={pageNumber === currentPage ? "page" : ""}
                  to={getLinkForPage(pageNumber)}
                  className={linkClass}
                  key={pageNumber}
                >
                  {pageNumber}
                </Link>
              );
            })}

            <Link
              to={uriNextPage}
              disabled={!uriNextPage}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none"
            >
              <span className="sr-only">Next</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
