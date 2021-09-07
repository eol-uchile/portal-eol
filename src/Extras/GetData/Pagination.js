import React, { useState, useEffect } from "react";
import {
  Pagination as BTPagination
} from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Generic pagination
 * Based on Andhy's work
 *
 * Manage the display and transition between pages
 * using a Function that sets an specific page
 *
 * Use either maxPage or count + page_size. If count is provided the maxpage will be computed
 * @param {Number} maxPage lastPage
 * @param {Number} page current page
 * @param {Number} count <optional> to compute max page
 * @param {Number} page_size <optional> to compute max page
 * @param {Function} setStatePage parent function that calls the API
 * @param {String} size one of "sm" "md" "lg"
 * @param {String} label aria-label, default is "generic"
 * @param {Number} displayFirst display always link to first page
 * @param {Number} displayLast display always link to last page
 * @param {Number} displayRange amount of aditional pages to display (min = 1)
 */
const Pagination = ({
  maxPageProp,
  page,
  count,
  page_size,
  setStatePage,
  size,
  label = "generic",
  displayFirst = true,
  displayLast = true,
  displayRange = 5,
  scroll = false,
}) => {
  const [range, setRange] = useState({
    leftPage: [],
    rightPage: [],
    max: (displayRange - 1) / 2,
  });

  // BUGFIX: there's a border case like
  // pageLimit = floor(50/25) = 2 and gives pages (0,1,2)
  // but pageLimit should be 1 so we can have the pages (0,1)
  const maxPage =
    count === undefined
      ? maxPageProp
      : Math.floor(count / page_size) === count / page_size
        ? Math.floor(count / page_size) - 1
        : Math.floor(count / page_size);

  let changePage = (direction) => {
    if (direction < 0) {
      if (page > 0) {
        setTimeout(() => setStatePage(page - 1), 300);
      }
    } else {
      if (maxPage >= page + 1) {
        setTimeout(() => setStatePage(page + 1), 300);
      }
    }
    scroll && goTop();
  };

  let setPage = (number) => {
    setTimeout(() => setStatePage(number), 300);
    scroll && goTop();
  };

  useEffect(() => {
    // Compute even distribution of pages at left and at right of current page
    // Add at most range.max
    var upperLimit = page + range.max <= maxPage ? page + range.max : maxPage;
    var lowerLimit = page - range.max >= 0 ? page - range.max : 0;
    var rightCount = upperLimit - page;
    var leftCount = page - lowerLimit;

    // Add remaining page count to the right if there's no space by the left
    var tmp;
    if (leftCount < range.max) {
      tmp = range.max - leftCount; // diff
      upperLimit = upperLimit + tmp <= maxPage ? upperLimit + tmp : maxPage;
    }

    // Add remaining page count to the left if there's no space by the right
    if (rightCount < range.max) {
      tmp = range.max - rightCount; // diff
      lowerLimit = lowerLimit - tmp >= 0 ? lowerLimit - tmp : 0;
    }

    var leftPages = [],
      rightPages = [];
    for (var i = lowerLimit; i < page; i++) {
      leftPages.push(i);
    }
    for (i = page + 1; i <= upperLimit; i++) {
      rightPages.push(i);
    }

    setRange((r) => ({ ...r, leftPage: leftPages, rightPage: rightPages }));
  }, [page, maxPage, range.max]);

  return (
    <BTPagination
      size={size}
      aria-label={`${label} page navigation`}
      style={{ justifyContent: "center" }}
    >
      {displayFirst ? (
        <BTPagination.First disabled={0 === page} onClick={() => setPage(0)} />
      ) : null}
      <BTPagination.Prev disabled={0 === page} onClick={() => changePage(-1)} />
      {range.leftPage.map((el, key) => (
        <BTPagination.Item key={"left" + key} onClick={() => setPage(el)}>{el + 1}</BTPagination.Item>
      ))}
      <BTPagination.Item active>{page + 1}</BTPagination.Item>
      {range.rightPage.map((el, key) => (
        <BTPagination.Item key={"right" + key} onClick={() => setPage(el)}>{el + 1}</BTPagination.Item>
      ))}
      <BTPagination.Next disabled={maxPage < page + 1} onClick={() => changePage(1)} />
      {displayLast ? (
        <BTPagination.Last disabled={maxPage < page + 1} onClick={() => setPage(maxPage)} />
      ) : null}
    </BTPagination>
  );
};

const goTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

Pagination.propTypes = {
  maxPageProp: PropTypes.number,
  page: PropTypes.number.isRequired,
  count: PropTypes.number,
  page_size: PropTypes.number,
  setStatePage: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  label: PropTypes.string,
  displayFirst: PropTypes.bool,
  displayLast: PropTypes.bool,
  displayRange: PropTypes.number,
};

export default Pagination;
