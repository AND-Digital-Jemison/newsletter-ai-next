import { FC } from 'react';
import { Flex, Text, Title } from '@mantine/core';
import { PageTitleProps } from './types';


export const PageTitle: FC<PageTitleProps> = () => (
  <Flex
    justify='center'
    align='center'
    direction='column'
    gap={10}
    p={10}
  >
    <Title>
      <Text inherit span c='and-red'>Jemison</Text> Orbit
    </Title>
  </Flex>
)
