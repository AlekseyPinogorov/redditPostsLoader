import { makeAutoObservable, runInAction } from "mobx";
import { getPostsData } from "../api/getPostsData";


export interface IPostsData {
  id: string;
  author: string;
  title: string;
  rating: number;
  avatar: string;
  previewImg: string;
  datePostUtc: number;
}

class PostsDataStore {
  postsData: Array<IPostsData> = [{
    id: '',
    author: '',
    title: '',
    rating: 0,
    avatar: '',
    previewImg: '',
    datePostUtc: 0,
  }]
  isLoading = false;
  error = '';
  count = 0;
  nextAfter = '';

  constructor() {
    makeAutoObservable(this)
  }

  getPostDataAction = async (listName: string) => {
    try {
      this.isLoading = true;
      const res = await getPostsData(listName, this.nextAfter)
      runInAction(() => {
        if (res) {
          if (this.postsData.length === 1) {
            this.postsData = res.data
            this.nextAfter = res.after
          } else {
            this.postsData = this.postsData.concat(res.data)
            this.nextAfter = res.after
          }
        }
        this.isLoading = false
        this.count = this.count + 1
      })
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.error = String(error);
      })
    }
  }
}

export const myPostsDataStore = new PostsDataStore();