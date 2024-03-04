// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT

export interface AssetPrice {

    open: string;

    close: string;

    high: string;

    low: string;

}


export interface AssetVolume {

    amount: string;

    amountUSD: string;

}


export interface HistoryElementDetails {

    data?: string;

}


export interface HistoryElementCallDetails {

    data?: string;

}


export interface ExecutionResult {

    success: boolean;

    error?: Error;

}


export interface Error {

    moduleErrorId?: number;

    moduleErrorIndex?: number;

    nonModuleErrorMessage?: string;

}


export interface OrderBookDeal {

    orderId: number;

    timestamp: number;

    isBuy: boolean;

    amount: string;

    price: string;

}


