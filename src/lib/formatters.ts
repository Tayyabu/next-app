const CURRENCY_FORMATTER=new Intl.NumberFormat("en-US",{
    style:'currency',
    currency:"USD",
    minimumFractionDigits:0
})
const NUMBER_FORMATTER=new Intl.NumberFormat("en-US")

export function formatCuurency(number:number){
return CURRENCY_FORMATTER.format(number)

}
export function formatNumber(amount:number){
return NUMBER_FORMATTER.format(amount)
}
