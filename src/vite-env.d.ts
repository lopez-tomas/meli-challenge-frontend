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

/// <reference types="vite/client" />