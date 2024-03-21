import React from "react";
import { Pagination, PaginationLink, PaginationItem } from "reactstrap";
import Icon from "../icon/Icon";

const PaginationComponent = ({ itemPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginationNumber = () => {
    if(pageNumbers.length <= 5){
      return pageNumbers;
    }else if(pageNumbers.length >= 5 && currentPage <= 4){
      return [1,2,3,4,5,'...',pageNumbers[pageNumbers.length - 1]];
    }else if(pageNumbers.length >= 5 && currentPage >= pageNumbers[pageNumbers.length - 4]){
      return [1,'...',pageNumbers[pageNumbers.length - 5],pageNumbers[pageNumbers.length - 4],pageNumbers[pageNumbers.length - 3],pageNumbers[pageNumbers.length - 2],pageNumbers[pageNumbers.length - 1]];
    }else if(pageNumbers.length > 5 && currentPage > 4 && currentPage < pageNumbers[pageNumbers.length - 4]){
      return [1,'...',currentPage-1,currentPage,currentPage+1,'...',pageNumbers[pageNumbers.length - 1]];
    }
  };
  
  let paginationItms = paginationNumber();

  const firstPage = () => {
    paginate(1);
  };

  const lastPage = () => {
    paginate(pageNumbers[pageNumbers.length - 1]);
  };

  const nextPage = () => {
    paginate(currentPage + 1);
  };

  const prevPage = () => {
    paginate(currentPage - 1);
  };

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={currentPage - 1 === 0 ? true : false}>
        <PaginationLink
          className="page-link-first"
          onClick={(ev) => {
            ev.preventDefault();
            firstPage();
          }}
          href="#first"
        >
          <Icon name="chevrons-left" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={currentPage - 1 === 0 ? true : false}>
        <PaginationLink
          className="page-link-prev"
          onClick={(ev) => {
            ev.preventDefault();
            prevPage();
          }}
          href="#prev"
        >
          <Icon name="chevron-left" />
        </PaginationLink>
      </PaginationItem>
      {paginationItms.map((item) => {
        return (
          <PaginationItem  disabled={isNaN(item)} className={`d-none d-sm-block ${currentPage === item ? "active" : ""}`} key={item}>
            <PaginationLink
                  tag="a"
                  href="#pageitem"
              onClick={(ev) => {
                ev.preventDefault();
                    paginate(item);
              }}
            >
                  {item}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={pageNumbers[pageNumbers.length - 1] === currentPage}>
        <PaginationLink
          className="page-link-next"
          onClick={(ev) => {
            ev.preventDefault();
            nextPage();
          }}
          href="#next"
        >
          <Icon name="chevron-right" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={pageNumbers[pageNumbers.length - 1] === currentPage}>
        <PaginationLink
          className="page-link-next"
          onClick={(ev) => {
            ev.preventDefault();
            lastPage();
          }}
          href="#last"
        >
          <Icon name="chevrons-right" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};
export default PaginationComponent;
