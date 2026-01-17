class BusinessAccount extends Account implements Withdrawable {
  public creditLimit: number;

  constructor(owner: string, pin: number, creditLimit: number) {
    super(owner, 0, pin);
    this.creditLimit = creditLimit;
  }

  withdraw(amount: number, enteredPin: number): OperationResult {
    if (enteredPin !== this.pin || amount <= 0) {
      return { success: false, message: "Invalid values" };
    }

    if (amount > this._balance + this.creditLimit) {
      return { success: false, message: "Credit limit exceeded" };
    }

    this._balance -= amount;
    return { success: true, message: "Withdrawal successful" };
  }
}
