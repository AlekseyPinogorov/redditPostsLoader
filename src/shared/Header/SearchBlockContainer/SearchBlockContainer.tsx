import React, { useEffect } from "react";
import { SearchBlock } from "../SearchBlock/SearchBlock";
import { myUserDataStore } from "../../../storeMobX/userData";
import { myTokenStore } from "../../../storeMobX/token";
import { observer } from "mobx-react-lite";

export const SearchBlockContainer = observer(() => {
  const token = myTokenStore.token
  const { getUserDataAction, userData, isLoading } = myUserDataStore

  useEffect(() => {
    getUserDataAction()
  }, [token])

  return (
    <SearchBlock iconImg={userData.iconImg} name={userData.name} loading={isLoading} />
  );
})
