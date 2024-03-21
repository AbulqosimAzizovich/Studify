import React, { useEffect } from "react";
import Icon from "../icon/Icon";
import { Pagination, PaginationLink, PaginationItem, Row, Col } from "reactstrap";

const DataTablePagination = ({
  itemPerPage,
  totalItems,
  paginate,
  currentPage,
  onChangeRowsPerPage,
  customItemPerPage,
  setRowsPerPage,
}) => {
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

  useEffect(() => {
    onChangeRowsPerPage(customItemPerPage);
    setRowsPerPage(customItemPerPage);
  }, [customItemPerPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Row className="align-items-center">
      <Col className="col-7" sm="12" md="9">
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
          </PaginationItem></Pagination>
      </Col>
      <Col sm="12" md="3" className="col-5 text-start text-md-end">
        <div className="dataTables_info" id="DataTables_Table_2_info" role="status" aria-live="polite">
          {itemPerPage*(currentPage-1)+1} - {(totalItems > itemPerPage*currentPage) ? itemPerPage*currentPage : totalItems} of {totalItems}
        </div>
      </Col>
    </Row>
  );
};
export default DataTablePagination;
