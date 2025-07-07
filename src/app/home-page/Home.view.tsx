import { FC } from 'react';
import { HomeViewProps } from './types';
import { Flex, Text } from '@mantine/core';
import { PageTitle, QueryInput, Results } from './components';

export const HomeView: FC<HomeViewProps> = ({ handleSubmit, handleChange, loading, points, url }) => (
  <div>
    <Flex
      justify='center'
      direction='column'
      h='100vh'
      gap={20}
      p={10}
      align='stretch'
    >
      <PageTitle
        title={<><Text inherit span c='and-red'>Jemison</Text> Orbit</>}
      />

      {!points.length &&
          <>
            <Text style={{ textAlign: 'center' }} >Provide a link to a blog or news letter to get a list of key points.</Text>
            <Flex justify='center'>
              <QueryInput
                onChange={handleChange}
                onSubmit={handleSubmit}
                loading={loading}
                value={url} />
            </Flex>
          </>
      }

      {!!points.length &&
        <Results results={points} />
      }
    </Flex>
  </div>
);
