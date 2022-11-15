import React from "react";

declare module '*.png';
declare module '*.sass' {
  const content: {[className: string]: string};
  export = content;
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
}

export interface ItemDetail extends Item {
  warranty: string;
  sold_quantity: number;
  description: string;
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