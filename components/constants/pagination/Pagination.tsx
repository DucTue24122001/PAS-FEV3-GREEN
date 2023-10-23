import { ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { DOTS, PaginationType, usePagination } from './usePagination';

interface PaginationPropsType extends PaginationType {
  onPageChange: (page: number) => void
}

const Pagination = (props: PaginationPropsType) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 2,
    currentPage,
    pageSize,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) return
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <UnorderedList display={'flex'} listStyleType={"none"} flexWrap={"wrap"} justifyContent={'center'}
      // className={classnames('pagination-container', { [className]: className })}
    >
       {/* Left navigation arrow */}
      <ListItem sx={arrow} cursor={currentPage === 1 ? "not-allowed" : "pointer"} 
        color={currentPage === 1 ? "global.primary" : "white" }
        // className={classnames('pagination-item', {
        //   disabled: currentPage === 1
        // })}
        onClick={onPrevious}
      >
        <ChevronLeftIcon />
      </ListItem>
      {paginationRange.map((pageNumber: any, i: number) => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <ListItem key={i} sx={dot}>&#8230;</ListItem>;
        }
		
        // Render our Page Pills
        return (
          <ListItem sx={paginationItem} key={i} bgColor={pageNumber === currentPage ? "#0e20ff" : "global.primary"}
            color={"white"}
            // className={classnames('pagination-item', {
            //   selected: pageNumber === currentPage
            // })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </ListItem>
        );
      })}
      {/*  Right Navigation arrow */}
      <ListItem sx={arrow} cursor={currentPage === lastPage ? "not-allowed" : "pointer"}
        color={currentPage === lastPage ? "global.primary" : "white"}
        // className={classnames('pagination-item', {
        //   disabled: currentPage === lastPage
        // })}
        onClick={onNext}
      >
        <ChevronRightIcon />
      </ListItem>
    </UnorderedList>
  );
};

export default Pagination;

const paginationItem = {
  padding: "5px 15px",
  textAlign: "center",
  margin: "5px",
  display: "flex",
  boxSizing: "border-box",
  alignIems: "center",
  borderRadius: "4px",
  fontSize: "14px",
  minWidth: "32px",
  transition: ".5s",
  _hover: {
    cursor: "pointer"
  }
}

const arrow = {
  padding: "8px",
  textAlign: "center",
  margin: "auto 4px",
  display: "flex",
  boxSizing: "border-box",
  alignIems: "center",
  borderRadius: "5px",
  fontSize: ["14px","14px","16px","16px"],
  minWidth: "32px",
  transition: ".5s",
}

const dot = {
  ...paginationItem,
  _hover: {
    bgColor: "transparent",
    cursor: "default"
  }
}