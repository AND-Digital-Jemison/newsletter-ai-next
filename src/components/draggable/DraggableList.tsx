import { FC, useEffect } from 'react';
import { DraggableListProps } from './types';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { DraggableElement } from '@/components/draggable/DraggableElement';
import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { flushSync } from 'react-dom';
import { reorderWithEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge';
import { triggerPostMoveFlash } from '@atlaskit/pragmatic-drag-and-drop-flourish/trigger-post-move-flash';
import { Flex, Paper } from '@mantine/core';


export const DraggableList: FC<DraggableListProps> = ({ items, handleBlockMove }) => {

  useEffect(() => {
    return monitorForElements({
      onDrop: ({ location, source }) => {
        const target = location.current.dropTargets[0];
        if (!target) return

        const sourceData = source.data;
        const targetData = target.data;
        
        const sourceIndex = items.findIndex(item => item.id === sourceData.id);
        const targetIndex = items.findIndex(item => item.id === targetData.id);

        if (sourceIndex < 0 || targetIndex < 0) return;

        const closestEdgeOfTarget = extractClosestEdge(targetData);

        flushSync(() => {
          handleBlockMove(
            reorderWithEdge({
              list: items,
              startIndex: sourceIndex,
              indexOfTarget: targetIndex,
              closestEdgeOfTarget,
              axis: 'vertical'
            })
          )
        });

        const element = document.querySelector(`[data-element-id="${sourceData.id}"]`);
        if (element instanceof HTMLElement) {
          triggerPostMoveFlash(element);
        }
      } 
    })
  }, [items, handleBlockMove]);
  
  return (
    <Paper
      p={20}
      maw={800}
      w={800}
      shadow='sm'
      m={20}
      mah='80vh'
      style={{ overflowY: 'scroll' }}
    >
      <Flex
        direction='column'
        gap={10}
      >
        {items.map((item, index) => (
          <DraggableElement
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </Flex>
    </Paper>
  )
};
