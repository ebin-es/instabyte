export const setImageForPost = (img = null) => async (dispatch, getState) => {
  dispatch({
    type: 'SET_IMAGE_FOR_POST',
    payload: img
  });
}


export const postImage = (details = {}) => async (dispatch, getState) => {
  return new Promise( (resolve, reject) => {

    selectedImage = getState().post.imageForPost;
    const imageForPost = {
      ...selectedImage,
      id: new Date(),
      authorId: 0,
      likes: 0,
      created: new Date(),
      comments: [
        {
          authorId: 0,
          text: details.caption,
          date: new Date(),
        },
      ],
    }

    dispatch({
      type: 'NEW_POST_ADDED',
      payload: imageForPost,
    });

    resolve(true);
  });
}
