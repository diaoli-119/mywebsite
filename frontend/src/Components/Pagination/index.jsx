import React from 'react';
import Pagination from "@mui/material/Pagination";

export const paginateData = (
  data,
  pageSize,
  currentPage
) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
};

export const calculateTotalPages = (data, pageSize) => {
  return Math.ceil(data.length / pageSize);
};

export const VideoPagination = ({ page, onPageChange }) => {
  const handlePageChange = (
    event,
    selectedPage
  ) => {
    onPageChange(selectedPage);
  };

  return (
    <Pagination
      count={page.totalPages}
      page={page.page}
      onChange={handlePageChange}
      size="large"
    />
  );
};