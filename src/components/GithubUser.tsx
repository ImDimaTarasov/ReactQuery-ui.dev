import React from 'react';
import {Text, View} from 'react-native/types';
import {useQuery} from 'react-query';

function fetchUser(username: string) {
  return fetch(`https://api.github.com/users/${username}`).then(res =>
    res.json(),
  );
}
export function GithubUser({username}: any) {
  const userQuery = useQuery([username], () => fetchUser(username));
  const data = userQuery.data;
  if (userQuery.isLoading) {
    return <Text> Loading...</Text>;
  }
  if (userQuery.isError) {
    return <Text>Error: {userQuery.error.message}</Text>;
  }
  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}
