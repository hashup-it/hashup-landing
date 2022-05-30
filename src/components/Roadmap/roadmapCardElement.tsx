import { Flex, Text } from '@chakra-ui/react'
import React, {useMemo} from 'react'
import RoadmapInProgress from '../../Icons/roadmapInProgress';
import RoadmapTaskDone from '../../Icons/roadmapTaskDone'


export interface IRoadmapCardElement {
    isDone?: boolean;
    data: string;
}

enum Type {
    DONE,
    UNDONE
}

export const RoadmapCardElement = ({isDone = false, data}: IRoadmapCardElement) => {
const typeOptions: { [param: number ]: () => React.ReactNode } = {
    [Type.DONE]: () => (
        <Flex gridGap='16px' fontSize='13px' fontWeight='600'>
            <RoadmapTaskDone />
            <Text>{data}</Text>
        </Flex>
    ),
    [Type.UNDONE]: () => (
        <Flex gridGap='16px' fontSize='13px' fontWeight='300' color='#D5D5D5'>
            <RoadmapInProgress />
            <Text>{data}</Text>
        </Flex>
    ),
}

const connectType = useMemo(() => {
    if (isDone) {
        return Type.DONE;
    } else {
        return Type.UNDONE;
    }
    return Type.UNDONE;
}, [isDone])

  return <>{typeOptions[connectType]()}</>
}
