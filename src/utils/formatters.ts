export function formatCurrencyToBRL(value: string | number): string {
    const parseValue = new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
    }).format(Number(value));

    return parseValue;
}
