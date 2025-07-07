import { FC } from 'react';
import { Button, Flex, TextInput } from '@mantine/core';
import { QueryInputProps } from './types';

export const QueryInput: FC<QueryInputProps> = ({ onChange, onSubmit, loading, value }) => (
  <Flex
    justify='center'
    align='stretch'
    direction='column'
    flex={1}
    maw={800}
  >
    <form onSubmit={onSubmit} data-testid='form'>
      <Flex direction='column' gap={10}>
        <TextInput
          onChange={onChange}
          value={value}
          placeholder='Enter a URL to begin'
          radius='sm'
          size='lg'
          flex={1}
        />

        <Flex justify='center'>
          <Button
            disabled={loading}
            variant='filled'
            color='and-red'
            size='md'
            loading={loading}
            loaderProps={{ type: 'dots' }}
            miw={{ sm: 'auto', base: '100%' }}
            type='submit'
          >
            Generate key points
          </Button>
        </Flex>

      </Flex>
    </form>
  </Flex>
)
