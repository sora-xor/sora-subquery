export function formatU128ToBalance(u128: string, decimals: number = 18) {
    let padded = u128.padStart(decimals + 1, "0");
    return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`;
}
