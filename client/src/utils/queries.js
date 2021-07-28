import { gql } from '@apollo/client';


import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      userName
      email
      password
    }
  }
`;

export const QUERY_SINGLE_USERS = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      userName
      email
      password
    }
  }
`;
