import { FC } from 'react';
import { Tags } from '@/types';
import { ResultProps } from './types';

import { Badge, Box, Card, Flex, Notification, Text } from '@mantine/core';
import { tagColorMap } from './constants';

import { useClipboard } from '@mantine/hooks';

export const Result: FC<ResultProps> = ({ result }) => {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <>
      <Card
        padding='lg'
        radius='md'
        withBorder
        w={{ base: '100%', sm: 400 }}
        bg={clipboard.copied ? 'aliceblue' : 'white'}
        data-testid='result'
      >
        <Card.Section>
          <Flex
            direction='column'
            p={14}
            gap={10}
            onClick={() => clipboard.copy(result.content)}
            style={{ cursor: 'pointer' }}
            role='button'
          >
            <Text fw={500} c='#444444'>{result.content}</Text>
            <Flex direction='row-reverse' justify='space-between' align='flex-end'>
              <Badge variant='light' color={tagColorMap[result.tag as Tags]} defaultChecked>
                {result.tag}
              </Badge>
            </Flex>
          </Flex>
        </Card.Section>
      </Card>

      {clipboard.copied && (
        <Box pos='absolute' bottom={10} right={10} style={{ zIndex: 100 }} data-testid='toast'>
          <Notification title='Coppied' w={{ base: 300, sm: '100%' }}>
            {result.content.slice(0, 40) + '...'}
          </Notification>
        </Box>
      )}
    </>
  )
};
