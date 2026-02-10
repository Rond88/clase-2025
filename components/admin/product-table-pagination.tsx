"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export default function ProductTablePagination({
  currentPage,
  totalPages,
  pageSize,
}: {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious 
        className={cn(currentPage===1 ? "hidden" : "#")}
        href={currentPage > 1 ? `/admin?page=${currentPage - 1}` : "#"}
        />

        <PaginationNext
        className={cn(currentPage===totalPages ? "hidden" : "#")}
        href={currentPage < totalPages ? `/admin?page=${currentPage + 1}` : "#"}
        />
      </PaginationContent>
    </Pagination>
  );
}
