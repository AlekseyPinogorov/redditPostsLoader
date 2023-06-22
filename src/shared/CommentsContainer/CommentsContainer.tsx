import React, { useEffect } from "react";
import { Comments } from "../Comments/Comments";
import { myTokenStore } from "../../storeMobX/token";
import { myCommentsDataStore } from "../../storeMobX/commentsData";
import { observer } from "mobx-react-lite";

interface ICommentsContainerProps {
  id: string;
}

export const CommentsContainer = observer(({ id }: ICommentsContainerProps) => {
  const token = myTokenStore.token
  const { commentsData, isLoading, getCommentsDataAction, error } = myCommentsDataStore

  useEffect(() => {
    getCommentsDataAction(id)
  }, [token])

  return (
    <Comments commentsData={commentsData} loading={isLoading} />
  )
})