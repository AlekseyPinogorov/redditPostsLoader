import { makeAutoObservable, runInAction } from "mobx";
import { getUserData } from "../api/getUserData";

export interface IUserData {
  name: string;
  iconImg: string;
}

class UserDataStore {
  userData: IUserData = { name: '', iconImg: '' };
  isLoading = false;
  error = ''

  constructor() {
    makeAutoObservable(this);
  }

  getUserDataAction = async () => {
    try {
      this.isLoading = true;
      const res = await getUserData()
      runInAction(() => {
        if (res) {
          this.userData = res;
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

export const myUserDataStore = new UserDataStore();