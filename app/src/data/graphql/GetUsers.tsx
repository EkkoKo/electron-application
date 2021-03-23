import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
   	users {
      id
      username
      email
    }
  }
`;



export default function GetUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.users.map(({ id, email, username }: user) => (
    <div key={id}>
      <p>
        {username}: {email}
      </p>
    </div>
  ));
}

interface user {
    id: string;
    email: string;
    username: string;
}