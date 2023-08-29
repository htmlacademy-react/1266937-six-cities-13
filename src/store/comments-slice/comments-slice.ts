import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { CommentsSlice } from '../../types/state';
import { fetchCommentsAction, postCommentAction } from '../api-actions';

const initialState: CommentsSlice = {
  comments: [],
  isDataLoading: false,
  isDataPosting: false,
};

export const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoading = false;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isDataPosting = true;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isDataPosting = false;
      });
  }
});
