import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInfoApi, TUserInfo } from '@/api'

// get
export const getUserInfo = createAsyncThunk<TUserInfo, number>(
  'userInfo/getUserInfo',
  async (userId) => {
    return await userInfoApi.getUserInfo(userId)
  }
)

const delay = (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, ms)
  })
}

// post
export const setUserInfo = createAsyncThunk<void, TUserInfo>(
  'userInfo/setUserInfo',
  async (userInfo) => {
    await delay(2000)
    await userInfoApi.setUserInfo(userInfo)
  }
)

type TUserState = {
  loading: boolean
  user: TUserInfo | null
}

const initialState: TUserState = {
  loading: false,
  user: null
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.loading = false
      })
      .addCase(setUserInfo.pending, (state) => {
        state.loading = true
      })
      .addCase(setUserInfo.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(setUserInfo.rejected, (state) => {
        state.loading = false
      })
  }
})
