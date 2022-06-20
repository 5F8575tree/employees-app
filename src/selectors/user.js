import { createSelector } from "@reduxjs/toolkit";

export const getAuthedUserId = ({authedUser}) => authedUser.authedUser

export const getUsers = ({users}) => users.users
export const getAuthedUserData = createSelector(getUsers, getAuthedUserId, (users, id) => {
  return users[id]
})

export const hasTakenPoll = (pollId) => createSelector(getAuthedUserData, (userInfo) => {
  return userInfo?.answers[pollId] !== undefined
})