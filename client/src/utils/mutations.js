import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }

  `;

export const ADD_USER = gql`
    mutation addUser($userName: String!, $email: String!, $password: String!) {
      addUser(userName: $userName, email: $email, password: $password) {
        token
        user {
          _id
          userName
        }
      }
    }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userName: String!, $email: String!, $password: String, $userId:ID) {
    updateUser(userName: $userName, email: $email, password: $password, userId:$userId) {
      _id
      userName
      email
      password
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId:ID) {
    deleteUser(userId:$userId) {
        _id 
    }
  }
`;
