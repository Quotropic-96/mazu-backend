export default (month: number): boolean => !isNaN(month) && month >= 1 && month <= 12;