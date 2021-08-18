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
  addVideo?: Maybe<Video>;
  removeDelete?: Maybe<Video>;
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
  inputData: PlaylistOperationInput;
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


export type MutationRemoveDeleteArgs = {
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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email'>
  )> }
);


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