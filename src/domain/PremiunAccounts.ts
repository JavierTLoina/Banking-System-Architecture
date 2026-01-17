class PremiumAccount extends Account implements Withdrawable {
  constructor(owner: string, balance: number, pin: number) {
    super(owner, balance, pin);
  }

  withdraw(amount: number, enteredPin?: number): OperationResult {
    if (amount <= 0 || amount > this._balance) {
      return { success: false, message: "Invalid values" };
    }

    if (amount >= 50 && enteredPin !== this.pin) {
      return { success: false, message: "Incorrect PIN" };
    }

    this._balance -= amount;
    return { success: true, message: "Withdrawal successful" };
  }
}
