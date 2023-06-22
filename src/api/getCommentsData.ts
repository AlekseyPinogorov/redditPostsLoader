import axios from "axios";
import { myTokenStore } from "../storeMobX/token";
import { ICommentsData } from "../storeMobX/commentsData";

function filtredCommentData(arr: any) {
  return arr.map(
    (item: { data: any }) => ({
      id: item.data.id,
      parentId: item.data.parent_id,
      name: item.data.author,
      replies: item.data.replies
        ? filtredCommentData(item.data.replies.data.children)
        : null,
      body: item.data.body,
      datePostUtc: item.data.created_utc * 1000,
    })
  );
}

export const getCommentsData = async (id: string) => {
  const token = myTokenStore.token
  if (token && token.length > 0 && token !== 'undefined') {
    const res = await axios.get(`https://oauth.reddit.com/comments/${id}`, {
      headers: { Authorization: `bearer ${token}` }
    })
    const commentsData: ICommentsData[] = filtredCommentData(res.data[1].data.children)
    return commentsData;
  }
}

