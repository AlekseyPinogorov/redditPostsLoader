import React from "react";
import { CardsList } from "../CardsList";
import { myPostIdStore } from "../../storeMobX/postId";
import { myPostsDataStore } from "../../storeMobX/postsData";
import { myTokenStore } from "../../storeMobX/token";
import { observer } from "mobx-react-lite";

export const CardsListContainer = observer(() => {
  const token = myTokenStore.token;
  const postId = myPostIdStore.postId;
  const { getPostDataAction: getPost, postsData, count, isLoading: loading, error: errorLoading, nextAfter } = myPostsDataStore

  return (
    <CardsList
      token={token}
      postId={postId}
      postsData={postsData}
      getPost={getPost}
      count={count}
      loading={loading}
      errorLoading={errorLoading}
      nextAfter={nextAfter}
    />
  )
})
