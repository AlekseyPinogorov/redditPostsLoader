import axios from "axios";
import { myTokenStore } from "../storeMobX/token";
import { IPostsData } from "../storeMobX/postsData";

export const getPostsData = async (listName: string, nextAfter: string) => {
  const token = myTokenStore.token
  if (token && token.length > 0 && token !== 'undefined') {
    const { data: { data: { after, children } } } = await axios.get(`https://oauth.reddit.com/${listName}`, {
      headers: { Authorization: `bearer ${token}` },
      params: {
        limit: 10,
        sr_detail: true,
        after: nextAfter,
      }
    })
    const postsData: IPostsData[] = children.map(
      (item: { data: any }) => ({
        id: item.data.id,
        author: item.data.author,
        title: item.data.title,
        rating: item.data.ups,
        avatar: item.data.sr_detail.icon_img
          ? item.data.sr_detail.icon_img
          : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png",
        previewImg: item.data.preview
          ? item.data.preview.images?.[0].source.url.replace(
            /(\&amp\;)/g,
            "&"
          )
          : 'https://cdn.dribbble.com/userupload/6189449/file/original-95b7e7d207e93d84986b86368d205705.jpg?compress=1&resize=752x',
        datePostUtc: item.data.created_utc * 1000,
      })
    );
    const post = {
      after: after,
      data: postsData,
    }
    return post
  }
}

