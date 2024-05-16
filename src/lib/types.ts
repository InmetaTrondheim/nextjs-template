import React from "react";

type ParamsType = Record<string, string | string[]>;
type SearchParamsType = Record<string, string | string[]>;

export type PageProps<TParams extends ParamsType = {}, TSearchParams extends SearchParamsType = {}> = Readonly<{
  params?: TParams;
  searchParams?: TSearchParams;
}>;

export type LayoutProps<TParams extends ParamsType = {}> = Readonly<
  { children: React.ReactNode } & Omit<PageProps<TParams, never>, "searchParams">
>;
