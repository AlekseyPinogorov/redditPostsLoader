import { makeAutoObservable } from "mobx";

class CommentFormStore {
  value = '';

  constructor() {
    makeAutoObservable(this);
  }

  updateValue(newValue: string) {
    this.value = newValue;
  }
}

export const myCommentFormStore = new CommentFormStore();