import React from "react";

declare module '*.png';
declare module '*.sass' {
  const content: {[className: string]: string};
  export = content;
}

export interface IAuthor {
  name: string;
  lastname: string;
}

export interface ICategory {
  id: string;
  name: string;
  type: string;
  values: [{
    id: string,
    name: string,
    results: number,
  }]
}

export interface ISeller {
  id: string | number;
  nickname: string;
  title: string | null;
  level: string;
  sales: {
    period: string;
    completed: number;
  }
  location: {
    city: string;
    state: string;
    country: string;
  }
}

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  seller: ISeller;
}

export interface IResults {
  author: Author;
  categories: Category[];
  items: Item[];
}

export interface ItemDetail extends Item {
  category: string;
  warranty: string;
  sold_quantity: number;
  available_quantity: number;
  description: string;
  attributes: any;
  sale_terms: any;
}

export interface FCItemDetail {
  item: ItemDetail;
}

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean | string;
    global?: boolean;
  }
}

/// <reference types="vite/client" />