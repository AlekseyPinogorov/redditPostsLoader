import { makeAutoObservable } from "mobx";

class PostIdStore {
  postId = '';

  constructor() {
    makeAutoObservable(this);
  }

  updatePostId(newValue: string) {
    this.postId = newValue;
  }
}

export const myPostIdStore = new PostIdStore();