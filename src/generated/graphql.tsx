import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  newPlaylist: Playlist;
  addVideoToPlaylist: Playlist;
  removeVideoFromPlaylist: Playlist;
  deletePlaylist: Playlist;
  login: UserResponse;
  register: UserResponse;
  logout: Scalars['Boolean'];
  addVideo?: Maybe<Video>;
  removeVideo?: Maybe<Video>;
  seedVideos?: Maybe<Array<Video>>;
};


export type MutationNewPlaylistArgs = {
  inputData: NewPlaylistInput;
};


export type MutationAddVideoToPlaylistArgs = {
  inputData: PlaylistOperationInput;
};


export type MutationRemoveVideoFromPlaylistArgs = {
  inputData: PlaylistOperationInput;
};


export type MutationDeletePlaylistArgs = {
  playlistId: Scalars['String'];
};


export type MutationLoginArgs = {
  userInput: UserInputType;
};


export type MutationRegisterArgs = {
  userInput: UserInputType;
};


export type MutationAddVideoArgs = {
  inputData: VideoInput;
};


export type MutationRemoveVideoArgs = {
  videoId: Scalars['String'];
};

export type NewPlaylistInput = {
  playlistName: Scalars['String'];
};

export type Playlist = {
  __typename?: 'Playlist';
  playlistId: Scalars['String'];
  playlistName: Scalars['String'];
  videos?: Maybe<Array<Video>>;
  createdAt: Scalars['String'];
  user: User;
};

export type PlaylistOperationInput = {
  playlistId: Scalars['String'];
  videoId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  playlists: Array<Playlist>;
  myPlaylists: Array<Playlist>;
  playlist: Playlist;
  me?: Maybe<User>;
  videos?: Maybe<Array<Video>>;
  video?: Maybe<Video>;
};


export type QueryPlaylistArgs = {
  playlistId: Scalars['String'];
};


export type QueryVideoArgs = {
  videoId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  userId: Scalars['String'];
  roles?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  playlists?: Maybe<Array<Playlist>>;
};

export type UserInputType = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type Video = {
  __typename?: 'Video';
  videoId: Scalars['String'];
  uploadedAt: Scalars['String'];
  title: Scalars['String'];
  views: Scalars['Float'];
  likes: Scalars['Float'];
  dislikes: Scalars['Float'];
  channel: Scalars['String'];
  thumbnail_url: Scalars['String'];
  category: Scalars['String'];
  playlists?: Maybe<Array<Playlist>>;
};

export type VideoInput = {
  title: Scalars['String'];
  views: Scalars['Float'];
  likes: Scalars['Float'];
  dislikes: Scalars['Float'];
  channel: Scalars['String'];
  thumbnail_url: Scalars['String'];
  category: Scalars['String'];
};

export type Add_Video_To_PlaylistMutationVariables = Exact<{
  inputData: PlaylistOperationInput;
}>;


export type Add_Video_To_PlaylistMutation = (
  { __typename?: 'Mutation' }
  & { addVideoToPlaylist: (
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'playlistId' | 'playlistName'>
    & { videos?: Maybe<Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'videoId' | 'title'>
    )>> }
  ) }
);

export type Delete_PlaylistMutationVariables = Exact<{
  playlistId: Scalars['String'];
}>;


export type Delete_PlaylistMutation = (
  { __typename?: 'Mutation' }
  & { deletePlaylist: (
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'playlistId'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'createdAt' | 'email'>
      & { playlists?: Maybe<Array<(
        { __typename?: 'Playlist' }
        & Pick<Playlist, 'playlistName'>
      )>> }
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type NewPlaylistMutationVariables = Exact<{
  inputData: NewPlaylistInput;
}>;


export type NewPlaylistMutation = (
  { __typename?: 'Mutation' }
  & { newPlaylist: (
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'playlistId' | 'playlistName' | 'createdAt'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'createdAt' | 'email'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type Remove_Video_From_PlaylistMutationVariables = Exact<{
  inputData: PlaylistOperationInput;
}>;


export type Remove_Video_From_PlaylistMutation = (
  { __typename?: 'Mutation' }
  & { removeVideoFromPlaylist: (
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'playlistId' | 'playlistName'>
    & { videos?: Maybe<Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'videoId' | 'title'>
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email'>
  )> }
);

export type My_PlaylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type My_PlaylistsQuery = (
  { __typename?: 'Query' }
  & { myPlaylists: Array<(
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'playlistName' | 'playlistId' | 'createdAt'>
    & { videos?: Maybe<Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'videoId'>
    )>> }
  )> }
);

export type PlaylistQueryVariables = Exact<{
  playlistId: Scalars['String'];
}>;


export type PlaylistQuery = (
  { __typename?: 'Query' }
  & { playlist: (
    { __typename?: 'Playlist' }
    & Pick<Playlist, 'playlistId' | 'playlistName' | 'createdAt'>
    & { videos?: Maybe<Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'videoId' | 'title' | 'uploadedAt' | 'channel' | 'thumbnail_url' | 'views'>
    )>>, user: (
      { __typename?: 'User' }
      & Pick<User, 'userId'>
    ) }
  ) }
);

export type VideoQueryVariables = Exact<{
  videoId: Scalars['String'];
}>;


export type VideoQuery = (
  { __typename?: 'Query' }
  & { video?: Maybe<(
    { __typename?: 'Video' }
    & Pick<Video, 'videoId' | 'title' | 'channel' | 'views' | 'thumbnail_url'>
  )> }
);

export type VideosQueryVariables = Exact<{ [key: string]: never; }>;


export type VideosQuery = (
  { __typename?: 'Query' }
  & { videos?: Maybe<Array<(
    { __typename?: 'Video' }
    & Pick<Video, 'videoId' | 'title' | 'category' | 'channel' | 'thumbnail_url' | 'views'>
  )>> }
);


export const Add_Video_To_PlaylistDocument = gql`
    mutation ADD_VIDEO_TO_PLAYLIST($inputData: PlaylistOperationInput!) {
  addVideoToPlaylist(inputData: $inputData) {
    playlistId
    playlistName
    videos {
      videoId
      title
    }
  }
}
    `;
export type Add_Video_To_PlaylistMutationFn = Apollo.MutationFunction<Add_Video_To_PlaylistMutation, Add_Video_To_PlaylistMutationVariables>;

/**
 * __useAdd_Video_To_PlaylistMutation__
 *
 * To run a mutation, you first call `useAdd_Video_To_PlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdd_Video_To_PlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVideoToPlaylistMutation, { data, loading, error }] = useAdd_Video_To_PlaylistMutation({
 *   variables: {
 *      inputData: // value for 'inputData'
 *   },
 * });
 */
export function useAdd_Video_To_PlaylistMutation(baseOptions?: Apollo.MutationHookOptions<Add_Video_To_PlaylistMutation, Add_Video_To_PlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Add_Video_To_PlaylistMutation, Add_Video_To_PlaylistMutationVariables>(Add_Video_To_PlaylistDocument, options);
      }
export type Add_Video_To_PlaylistMutationHookResult = ReturnType<typeof useAdd_Video_To_PlaylistMutation>;
export type Add_Video_To_PlaylistMutationResult = Apollo.MutationResult<Add_Video_To_PlaylistMutation>;
export type Add_Video_To_PlaylistMutationOptions = Apollo.BaseMutationOptions<Add_Video_To_PlaylistMutation, Add_Video_To_PlaylistMutationVariables>;
export const Delete_PlaylistDocument = gql`
    mutation DELETE_PLAYLIST($playlistId: String!) {
  deletePlaylist(playlistId: $playlistId) {
    playlistId
  }
}
    `;
export type Delete_PlaylistMutationFn = Apollo.MutationFunction<Delete_PlaylistMutation, Delete_PlaylistMutationVariables>;

/**
 * __useDelete_PlaylistMutation__
 *
 * To run a mutation, you first call `useDelete_PlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_PlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlaylistMutation, { data, loading, error }] = useDelete_PlaylistMutation({
 *   variables: {
 *      playlistId: // value for 'playlistId'
 *   },
 * });
 */
export function useDelete_PlaylistMutation(baseOptions?: Apollo.MutationHookOptions<Delete_PlaylistMutation, Delete_PlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_PlaylistMutation, Delete_PlaylistMutationVariables>(Delete_PlaylistDocument, options);
      }
export type Delete_PlaylistMutationHookResult = ReturnType<typeof useDelete_PlaylistMutation>;
export type Delete_PlaylistMutationResult = Apollo.MutationResult<Delete_PlaylistMutation>;
export type Delete_PlaylistMutationOptions = Apollo.BaseMutationOptions<Delete_PlaylistMutation, Delete_PlaylistMutationVariables>;
export const LoginDocument = gql`
    mutation LOGIN($email: String!, $password: String!) {
  login(userInput: {email: $email, password: $password}) {
    user {
      userId
      createdAt
      email
      playlists {
        playlistName
      }
    }
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation LOGOUT {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const NewPlaylistDocument = gql`
    mutation NewPlaylist($inputData: NewPlaylistInput!) {
  newPlaylist(inputData: $inputData) {
    playlistId
    playlistName
    createdAt
  }
}
    `;
export type NewPlaylistMutationFn = Apollo.MutationFunction<NewPlaylistMutation, NewPlaylistMutationVariables>;

/**
 * __useNewPlaylistMutation__
 *
 * To run a mutation, you first call `useNewPlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewPlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newPlaylistMutation, { data, loading, error }] = useNewPlaylistMutation({
 *   variables: {
 *      inputData: // value for 'inputData'
 *   },
 * });
 */
export function useNewPlaylistMutation(baseOptions?: Apollo.MutationHookOptions<NewPlaylistMutation, NewPlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewPlaylistMutation, NewPlaylistMutationVariables>(NewPlaylistDocument, options);
      }
export type NewPlaylistMutationHookResult = ReturnType<typeof useNewPlaylistMutation>;
export type NewPlaylistMutationResult = Apollo.MutationResult<NewPlaylistMutation>;
export type NewPlaylistMutationOptions = Apollo.BaseMutationOptions<NewPlaylistMutation, NewPlaylistMutationVariables>;
export const RegisterDocument = gql`
    mutation REGISTER($email: String!, $password: String!) {
  register(userInput: {email: $email, password: $password}) {
    user {
      userId
      createdAt
      email
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const Remove_Video_From_PlaylistDocument = gql`
    mutation REMOVE_VIDEO_FROM_PLAYLIST($inputData: PlaylistOperationInput!) {
  removeVideoFromPlaylist(inputData: $inputData) {
    playlistId
    playlistName
    videos {
      videoId
      title
    }
  }
}
    `;
export type Remove_Video_From_PlaylistMutationFn = Apollo.MutationFunction<Remove_Video_From_PlaylistMutation, Remove_Video_From_PlaylistMutationVariables>;

/**
 * __useRemove_Video_From_PlaylistMutation__
 *
 * To run a mutation, you first call `useRemove_Video_From_PlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemove_Video_From_PlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeVideoFromPlaylistMutation, { data, loading, error }] = useRemove_Video_From_PlaylistMutation({
 *   variables: {
 *      inputData: // value for 'inputData'
 *   },
 * });
 */
export function useRemove_Video_From_PlaylistMutation(baseOptions?: Apollo.MutationHookOptions<Remove_Video_From_PlaylistMutation, Remove_Video_From_PlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Remove_Video_From_PlaylistMutation, Remove_Video_From_PlaylistMutationVariables>(Remove_Video_From_PlaylistDocument, options);
      }
export type Remove_Video_From_PlaylistMutationHookResult = ReturnType<typeof useRemove_Video_From_PlaylistMutation>;
export type Remove_Video_From_PlaylistMutationResult = Apollo.MutationResult<Remove_Video_From_PlaylistMutation>;
export type Remove_Video_From_PlaylistMutationOptions = Apollo.BaseMutationOptions<Remove_Video_From_PlaylistMutation, Remove_Video_From_PlaylistMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    userId
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const My_PlaylistsDocument = gql`
    query MY_PLAYLISTS {
  myPlaylists {
    playlistName
    playlistId
    videos {
      videoId
    }
    createdAt
  }
}
    `;

/**
 * __useMy_PlaylistsQuery__
 *
 * To run a query within a React component, call `useMy_PlaylistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMy_PlaylistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMy_PlaylistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMy_PlaylistsQuery(baseOptions?: Apollo.QueryHookOptions<My_PlaylistsQuery, My_PlaylistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<My_PlaylistsQuery, My_PlaylistsQueryVariables>(My_PlaylistsDocument, options);
      }
export function useMy_PlaylistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<My_PlaylistsQuery, My_PlaylistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<My_PlaylistsQuery, My_PlaylistsQueryVariables>(My_PlaylistsDocument, options);
        }
export type My_PlaylistsQueryHookResult = ReturnType<typeof useMy_PlaylistsQuery>;
export type My_PlaylistsLazyQueryHookResult = ReturnType<typeof useMy_PlaylistsLazyQuery>;
export type My_PlaylistsQueryResult = Apollo.QueryResult<My_PlaylistsQuery, My_PlaylistsQueryVariables>;
export const PlaylistDocument = gql`
    query PLAYLIST($playlistId: String!) {
  playlist(playlistId: $playlistId) {
    playlistId
    playlistName
    createdAt
    videos {
      videoId
      title
      uploadedAt
      channel
      thumbnail_url
      views
    }
    user {
      userId
    }
  }
}
    `;

/**
 * __usePlaylistQuery__
 *
 * To run a query within a React component, call `usePlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistQuery({
 *   variables: {
 *      playlistId: // value for 'playlistId'
 *   },
 * });
 */
export function usePlaylistQuery(baseOptions: Apollo.QueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, options);
      }
export function usePlaylistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaylistQuery, PlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlaylistQuery, PlaylistQueryVariables>(PlaylistDocument, options);
        }
export type PlaylistQueryHookResult = ReturnType<typeof usePlaylistQuery>;
export type PlaylistLazyQueryHookResult = ReturnType<typeof usePlaylistLazyQuery>;
export type PlaylistQueryResult = Apollo.QueryResult<PlaylistQuery, PlaylistQueryVariables>;
export const VideoDocument = gql`
    query VIDEO($videoId: String!) {
  video(videoId: $videoId) {
    videoId
    title
    channel
    views
    thumbnail_url
  }
}
    `;

/**
 * __useVideoQuery__
 *
 * To run a query within a React component, call `useVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoQuery({
 *   variables: {
 *      videoId: // value for 'videoId'
 *   },
 * });
 */
export function useVideoQuery(baseOptions: Apollo.QueryHookOptions<VideoQuery, VideoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideoQuery, VideoQueryVariables>(VideoDocument, options);
      }
export function useVideoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoQuery, VideoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideoQuery, VideoQueryVariables>(VideoDocument, options);
        }
export type VideoQueryHookResult = ReturnType<typeof useVideoQuery>;
export type VideoLazyQueryHookResult = ReturnType<typeof useVideoLazyQuery>;
export type VideoQueryResult = Apollo.QueryResult<VideoQuery, VideoQueryVariables>;
export const VideosDocument = gql`
    query VIDEOS {
  videos {
    videoId
    title
    category
    channel
    thumbnail_url
    views
  }
}
    `;

/**
 * __useVideosQuery__
 *
 * To run a query within a React component, call `useVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useVideosQuery(baseOptions?: Apollo.QueryHookOptions<VideosQuery, VideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
      }
export function useVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosQuery, VideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
        }
export type VideosQueryHookResult = ReturnType<typeof useVideosQuery>;
export type VideosLazyQueryHookResult = ReturnType<typeof useVideosLazyQuery>;
export type VideosQueryResult = Apollo.QueryResult<VideosQuery, VideosQueryVariables>;