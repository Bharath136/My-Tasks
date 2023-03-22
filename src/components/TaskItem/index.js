import {ListItem, Task, Tag} from './styledComponents'

const TaskItem = props => {
  const {eachTask} = props
  const {inputTask, selectedTag} = eachTask
  return (
    <ListItem>
      <Task>{inputTask}</Task>
      <Tag>{selectedTag}</Tag>
    </ListItem>
  )
}

export default TaskItem
