import { FC } from 'react';
import { Flex, Text, ScrollArea } from '@mantine/core';
import { ResultsProps } from './types';
import { Result } from '../';

export const Results: FC<ResultsProps> = ({ results }) => (
  <>
    <Text c='#444444' ta='center'>{`Displaying ${results.length} results.`}<br />Click an item to copy the content</Text>

    <ScrollArea mah='80%' data-testid='results'>
      <Flex
        justify='center'
        align='center'
        direction='column'
        gap={10}
      >
        {results.map((result, index) => (
          <Result result={result} key={index} />
        ))}
      </Flex>
    </ScrollArea>
  </>
)
