import { makeAutoObservable } from "mobx";

class TokenStore {
  token = '';

  constructor() {
    makeAutoObservable(this);
  }

  updateToken(newValue: string) {
    this.token = newValue;
  }
}

export const myTokenStore = new TokenStore();