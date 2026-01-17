interface Withdrawable {
  withdraw(amount: number, enteredPin: number): OperationResult;
}
