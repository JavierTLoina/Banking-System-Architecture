class SavingsAccount extends Account implements Withdrawable {
  private withdrawalsToday = 0;
  private lastDate = new Date().toDateString();

  withdraw(amount: number, enteredPin: number): OperationResult {
    const today = new Date().toDateString();

    if (today !== this.lastDate) {
      this.withdrawalsToday = 0;
      this.lastDate = today;
    }

    if (this.withdrawalsToday >= 3) {
      return { success: false, message: "Daily withdrawal limit reached" };
    }

    const result = super.withdraw(amount, enteredPin);

    if (result.success) {
      this.withdrawalsToday++;
    }

    return result;
  }
}
