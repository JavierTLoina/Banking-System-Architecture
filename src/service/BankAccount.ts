class BankService {
  private accounts: Account[] = [];

  addAccount(account: Account): void {
    this.accounts.push(account);
  }

  withdraw(owner: string, amount: number, pin?: number): OperationResult {
    const account = this.accounts.find((a) => a.owner === owner);

    if (!account) {
      return { success: false, message: "Account not found" };
    }

    return account.withdraw(amount, pin as number);
  }

  checkBalance(owner: string): void {
    const account = this.accounts.find((a) => a.owner === owner);
    account?.checkBalance();
  }
}
