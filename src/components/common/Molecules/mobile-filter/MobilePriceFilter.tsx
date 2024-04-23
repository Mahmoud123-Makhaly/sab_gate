"use client";

import React from "react";

import { useTranslate } from "@app/hooks";
import { PriceRange } from "@components";

interface MobilePriceFilterProps {
  defaultRange?:
    | {
        from: string;
        to: string;
      }
    | undefined;
  handleSearch: ({
    termFacet,
    sortTerm,
    page,
    pageSize,
    priceFrom,
    priceTo,
  }: {
    termFacet?: any | "NONE" | undefined;
    sortTerm?: string | undefined;
    page?: number | undefined;
    pageSize?: 12 | 24 | 36 | undefined;
    priceFrom?: string | undefined;
    priceTo?: string | undefined;
  }) => void;
}

export const MobilePriceFilter = ({
  defaultRange,
  handleSearch,
}: MobilePriceFilterProps) => {
  const t = useTranslate("COMP_MobileFilter");
  return (
    <div>
      <div className="text-muted d-flex justify-content-between align-items-center mb-3 w-100">
        <span className="fw-bold">{t("PRICE")} </span>
        <button
          className="btn btn-white"
          onClick={() => handleSearch({ priceFrom: "0", priceTo: "0" })}
        >
          {t("DELETE")}
        </button>
      </div>
      <PriceRange
        onChange={(from: string, to: string) =>
          handleSearch({ priceFrom: from, priceTo: to })
        }
        defaultRange={defaultRange}
      />
    </div>
  );
};
