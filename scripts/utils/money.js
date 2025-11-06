export function formatCurrency(priceCents) {
    return (priceCents / 100).toFixed(2);
}


//Another method to export but we can have only one exported default
export default formatCurrency; 