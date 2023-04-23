import React from 'react';
import {Text, View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {GithubUser} from './src/components/GithubUser';

const client = new QueryClient();
function App(): JSX.Element {
  return (
    <QueryClientProvider client={client}>
      <View>
        <Text>test</Text>
        <GithubUser></GithubUser>
      </View>
    </QueryClientProvider>
  );
}

export default App;
