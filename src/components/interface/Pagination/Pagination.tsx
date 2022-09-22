import styled from "@emotion/styled";
import React, { useState } from "react";

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px",
  gap: "24px",
  position: "absolute",
  width: "348px",
  height: "40px",
  left: "20px",
  top: "20px",
};

const PaginationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap 4px;
  padding: 0px;
  justify-content: center;
  width: 260px;
  height: 40px;
  .pageCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 11px;
    gap: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500; 
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    background: transparent;
    border: 1px ;
    box-sizing: border-box;
    border-radius: 4px #fff;
    margin: 0 6px;
    color: #151515;
    cursor: pointer;
    &:not([disabled]):hover {
      border: 1px ;
      color: #151515;
    }
  }
  .pageCard.active {
    background: #f2f2f2;
    border-radius: 999px;
    color: #151515;
  }
`;

const textStyle = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "10px",
  lineHeight: "16px",
  color: "#5F5F5F",
  letterSpacing: "-0,1px",
  width: "64px",
  height: "16px",
};

const MoreIconDiv = {
  display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
padding: '0px',
gap: '10px',
width: '40px',
height: '40px',
borderRadius: '999px'
}

const MoreIconText = {
width: '9px',
height: '20px',
fontFamily: 'Montserrat',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '12px',
lineHeight: '20px',
textAlign: 'center',
color: '#151515',
}

const chevronStyle = {
  // width: "18px",
  // height: "18px"
}

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
    <div style={flexContainer}>
      <p style={textStyle}>
        Page {currentPage} of {pageCount}
      </p>
      <PaginationContainer>
        <button
          className="pageCard"
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage <= 1}
          style={chevronStyle}
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
            <div style={MoreIconDiv}>
              <p style={MoreIconText}>...</p>
            </div>
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
            <div style={MoreIconDiv}>
              <p style={MoreIconText}>...</p>
            </div>
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
          style={chevronStyle}
          disabled={currentPage === pageCount}
        >{`>`}</button>
      </PaginationContainer>
    </div>
  );
};

export default Pagination;
