export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((acc, value) => acc + value, 0);
};