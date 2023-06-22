import axios from "axios";
import { myTokenStore } from "../storeMobX/token";
import { IUserData } from "../storeMobX/userData";


export const getUserData = async () => {
  const token = myTokenStore.token
  if (token && token.length > 0 && token !== 'undefined') {
    const res = await axios.get('https://oauth.reddit.com/api/v1/me.json', {
      headers: { Authorization: `bearer ${token}` }
    })
    const fulldata = res.data
    const data: IUserData = { name: fulldata.name, iconImg: fulldata.icon_img }
    return data;
  }
}