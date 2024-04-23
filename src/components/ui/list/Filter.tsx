"use client";

import React from "react";

import { MobileFilter, SideBarFilter } from "@components";

const Filter = ({
  facets,
  handleSearch,
  setIsisMobileFilterOpen,
  isMobileFilterOpen,
}: {
  facets: {
    terms?: any | undefined;
    sort?:
      | {
          label: string;
          term: string;
          isSelected: boolean;
        }[]
      | undefined;
    defaultPriceRange?: { from: string; to: string };
  };
  handleSearch: ({
    termFacet,
    sortTerm,
    page,
    pageSize,
    priceFrom,
    priceTo,
  }: {
    termFacet?: any | "NONE";
    sortTerm?: string;
    page?: number;
    pageSize?: 12 | 24 | 36;
    priceFrom?: string;
    priceTo?: string;
  }) => void;
  setIsisMobileFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileFilterOpen: boolean;
}) => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <SideBarFilter
          facets={{
            terms: facets.terms,
            sort: facets.sort,
            defaultPriceRange: facets.defaultPriceRange,
          }}
          handleSearch={handleSearch}
        />
      </div>

      <div className="d-block d-lg-none">
        <MobileFilter
          isMobileFilterOpen={isMobileFilterOpen}
          setIsisMobileFilterOpen={setIsisMobileFilterOpen}
          facets={{
            terms: facets.terms,
            sort: facets.sort,
            defaultPriceRange: facets.defaultPriceRange,
          }}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default Filter;
