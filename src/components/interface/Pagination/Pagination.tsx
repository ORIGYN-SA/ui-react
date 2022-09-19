import styled from "@emotion/styled";
import React, { useState } from "react";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .pageCard {
    height: 36px;
    padding: 0 15px;
    background: transparent;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 4px #fff;
    margin: 0 6px;
    color: #000000;
    cursor: pointer;
    &:not([disabled]):hover {
      border: 1px solid #fff;
      color: #000000;
    }
  }
  .pageCard.active {
    background: #f2f2f2;
    border-radius: 999px;
    color: #000000;
  }
`;

const MorePaginationIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 36px;
  width: 36px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 0 0.5rem;
`;

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (prevPage: number) => void;
}

const Pagination = ({ pageCount }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getPageRange = (currentPage: number, pageCount: number) => {
    if (pageCount < 4) {
      return [];
    }
    let pageRange = [1, 2, 3];
    if (currentPage > 1 && currentPage !== pageCount) {
      pageRange.length = 0;
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
      pageRange.push(currentPage + 1);
    } else if (currentPage === pageCount) {
      pageRange.length = 0;
      pageRange.push(currentPage - 2);
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
    }
    return pageRange;
  };

  const renderPageButtons = () => {
    let result = [];
    for (let i = 1; i < pageCount + 1; i++) {
      result.push(
        <button
          key={i}
          className={currentPage === i ? `pageCard active` : `pageCard`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return result;
  };

  return (
    <div style={{  display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'}}>
      <p>
        Page {currentPage} of {pageCount}
      </p>
      <PaginationContainer>
        <button
          className="pageCard"
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage <= 1}
        >{`<`}</button>
        {pageCount < 4 && renderPageButtons()}
        {currentPage >= pageCount - 2 && pageCount > 3 && (
          <>
            <button
              className={currentPage === 1 ? `pageCard active` : `pageCard`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <MorePaginationIconContainer
              style={{
                height: "36px",
                width: "36px",
              }}
            >
              <p style={{ width: "20px", height: "auto" }}>...</p>
            </MorePaginationIconContainer>
          </>
        )}
        {getPageRange(currentPage, pageCount).map((page: number) => (
          <button
            key={page}
            className={page === currentPage ? `pageCard active` : `pageCard`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        {currentPage < pageCount - 2 && pageCount > 3 && (
          <>
            <MorePaginationIconContainer
              style={{
                height: "36px",
                width: "36px",
              }}
            >
              <p style={{ width: "20px", height: "auto" }}>...</p>
            </MorePaginationIconContainer>
            <button
              className={
                pageCount === currentPage ? `pageCard active` : `pageCard`
              }
              onClick={() => setCurrentPage(pageCount)}
            >
              {pageCount}
            </button>
          </>
        )}
        <button
          className="pageCard"
          onClick={() => {
            if (currentPage < pageCount) setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage === pageCount}
        >{`>`}</button>
      </PaginationContainer>
    </div>
  );
};

export default Pagination;
