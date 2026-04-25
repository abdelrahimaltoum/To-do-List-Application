import { useMemo } from "react";

/**
 * Custom hook for pagination logic
 *
 * Responsibilities:
 * - Splits large data array into pages
 * - Returns only the current page items
 * - Provides pagination metadata (total items, last index)
 *
 * Inputs:
 * - data: full array of items (todos)
 * - currentPage: current page number (1-based index)
 * - itemsPerPage: number of items per page
 */
export const usePagination = (data = [], currentPage, itemsPerPage) => {

  // Safety check to ensure we are always working with an array
  // Prevents runtime errors if data is undefined or null
  const safeData = Array.isArray(data) ? data : [];

  /**
   * Memoized calculation of current page data
   *
   * Why useMemo?
   * - Prevents recalculating slice on every render
   * - Only recalculates when data, page, or page size changes
   */
  const currentData = useMemo(() => {

    // Calculate index of last item on current page
    const indexOfLast = currentPage * itemsPerPage;

    // Calculate index of first item on current page
    const indexOfFirst = indexOfLast - itemsPerPage;

    // Return only items for current page
    return safeData.slice(indexOfFirst, indexOfLast);

  }, [safeData, currentPage, itemsPerPage]);

  /**
   * Index of last item (useful for UI display/debugging)
   */
  const indexOfLast = currentPage * itemsPerPage;

  return {
    currentData, // items for current page only
    indexOfLast,  // last visible index
    totalItems: safeData.length, // total number of items in dataset
  };
};