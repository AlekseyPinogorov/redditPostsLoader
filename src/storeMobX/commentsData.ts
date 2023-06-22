import { makeAutoObservable, runInAction } from "mobx";
import { getCommentsData } from "../api/getCommentsData";

export interface ICommentsData {
  id: string;
  parentId: string;
  name: string;
  replies: Array<ICommentsData>;
  body: string;
  datePostUtc: number;
}

class CommentsDataStore {
  commentsData: Array<ICommentsData> = [{
    id: '',
    parentId: '',
    name: '',
    replies: [],
    body: '',
    datePostUtc: 0,
  }]
  isLoading = false;
  error = '';

  constructor() {
    makeAutoObservable(this)
  }

  getCommentsDataAction = async (id: string) => {
    try {
      this.isLoading = true;
      const res = await getCommentsData(id)
      runInAction(() => {
        if (res) {
          this.commentsData = res;
        }
        this.isLoading = false;
      })
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.error = String(error);
      })
    }
  }
}

export const myCommentsDataStore = new CommentsDataStore();
