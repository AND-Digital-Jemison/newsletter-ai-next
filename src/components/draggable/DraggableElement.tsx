'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { draggable, dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import invariant from 'tiny-invariant';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import { attachClosestEdge, extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { DraggableElementProps } from './types';
import { Edge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/types';
import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview';
import { pointerOutsideOfPreview } from '@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview';
import { NewsletterBlock } from '@/types';
import { createPortal } from 'react-dom';
import Interceptors from 'undici-types/interceptors';
import retry = Interceptors.retry;
import { NewsLetterGeneric } from '@/components/news-letter-ui';
import { Paper } from '@mantine/core';

type TaskState =
    | {
  type: 'idle';
}
    | {
  type: 'preview';
  container: HTMLElement;
}
    | {
  type: 'is-dragging';
}
    | {
  type: 'is-dragging-over';
  closestEdge: Edge | null;
};

const idle: TaskState = { type: 'idle' };

export const DraggableElement: FC<DraggableElementProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement | null>(null); // TODO: pass to UI element
  const [state, setState] = useState<TaskState>(idle);

  useEffect(() => {
    const element = ref.current;
    invariant(element);

    return combine(
      draggable({
        element,
        getInitialData: () => (item),
        onGenerateDragPreview: ({ nativeSetDragImage }) => {
          setCustomNativeDragPreview({
            nativeSetDragImage,
            getOffset: pointerOutsideOfPreview({
              x: '16px',
              y: '8px',
            }),
            render({ container }) {
              setState({ type: 'preview', container });
            },
          });
        },
        onDragStart: () => setState({ type: 'is-dragging' }),
        onDrop: () => setState(idle),
      }),
      dropTargetForElements({
        element,
        canDrop: ({ source }) => {
          if (source.element === element) return false;
          // TODO: maybe other checks later
          return true;
        },
        getData: ({ input }) => {
          return attachClosestEdge(item, {
            element,
            input,
            allowedEdges: ['top', 'bottom']
          })
        },
        getIsSticky: () => true,
        onDrag: ({ self }) => {
          const closestEdge = extractClosestEdge(self.data);

          setState(current => {
            if (current.type === 'is-dragging-over' && current.closestEdge === closestEdge) {
              return current;
            }
            return { type: 'is-dragging-over', closestEdge };
          })
        },
        onDragLeave: () => setState(idle),
        onDrop: () => setState(idle)
      })
    )

  }, [index, item]);

  // return (
  //   <>
  //     <div style={{ position: 'relative' }}>
  //       <div
  //         ref={ref}
  //         style={{ backgroundColor: 'blue', padding: '10px', opacity: state.type === 'is-dragging' ? 0.4 : 1 }}
  //         data-element-id={item.id}
  //       >
  //         {item.id}
  //       </div>
  //       {state.type === 'is-dragging-over' && state.closestEdge ? (
  //         <DropIndicator />
  //       ) : null}
  //     </div>
  //     {state.type === 'preview' ? createPortal(<DragPreview item={item} />, state.container) : null}
  //   </>
  //
  // )

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Paper
          ref={ref}
          withBorder
          p='sm'
          radius='sm'
          pos='relative'
        >
          <NewsLetterGeneric block={item} />
        </Paper>

        {state.type === 'preview' ? createPortal(<DragPreview item={item} />, state.container) : null}

        {state.type === 'is-dragging-over' && state.closestEdge ? (
          <DropIndicator />
        ) : null}
      </div>
      
    </>
  )
};

const DragPreview = ({ item }: { item: NewsletterBlock }) => (
  <Paper
    withBorder
    p='sm'
    radius='sm'
    miw={400}
  >
    <NewsLetterGeneric block={item} />
  </Paper>
)

const DropIndicator = () => (
  <div style={{ position: 'absolute', padding: '1px', backgroundColor: 'orange', width: '100%' }} />
)
