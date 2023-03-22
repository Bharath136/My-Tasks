import {Component} from 'react'
import {v4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'

import {
  MyTaskContainer,
  MyTaskFormContainer,
  MyTaskHeading,
  MyTaskForm,
  InputFieldContainer,
  Label,
  Input,
  Select,
  Option,
  AddButtonContainer,
  AddButton,
  TagsAndTaskContainer,
  Heading,
  TagsList,
  NoTaskContainer,
  NoTaskDescription,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    inputTask: '',
    selectedTag: tagsList[0].optionId,
    tasksList: [],
    activeTag: '',
  }

  onChangeTag = event => {
    this.setState({selectedTag: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()

    const {inputTask, selectedTag} = this.state
    const newTask = {
      inputTask,
      selectedTag: selectedTag.toLocaleUpperCase(),
      id: v4(),
    }

    if (inputTask !== '') {
      this.setState(preState => ({
        tasksList: [...preState.tasksList, newTask],
      }))
    }

    this.setState({inputTask: '', selectedTag: tagsList[0].optionId})
  }

  onChangeInput = event => {
    this.setState({inputTask: event.target.value})
  }

  onClickTask = optionId => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === optionId ? '' : optionId,
    }))
  }

  render() {
    const {tasksList, activeTag} = this.state
    console.log(activeTag.toLowerCase())
    const filteredTasksList =
      activeTag === ''
        ? tasksList
        : tasksList.filter(eachTask => eachTask.selectedTag === activeTag)
    console.log(filteredTasksList)
    return (
      <MyTaskContainer>
        <MyTaskFormContainer>
          <MyTaskHeading>Create a Task!</MyTaskHeading>
          <MyTaskForm onSubmit={this.onAddButton}>
            <InputFieldContainer>
              <Label htmlFor="task">Task</Label>
              <Input
                id="task"
                type="text"
                placeholder="Enter the task here"
                onChange={this.onChangeInput}
              />
            </InputFieldContainer>
            <InputFieldContainer>
              <Label htmlFor="tags">Tags</Label>
              <Select onChange={this.onChangeTag} id="tags">
                {tagsList.map(eachTag => (
                  <Option key={eachTag.optionId} value={eachTag.optionId}>
                    {eachTag.displayText}
                  </Option>
                ))}
              </Select>
            </InputFieldContainer>
            <AddButtonContainer>
              <AddButton type="submit">Add Task</AddButton>
            </AddButtonContainer>
          </MyTaskForm>
        </MyTaskFormContainer>
        <TagsAndTaskContainer>
          <Heading>Tags</Heading>
          <TagsList>
            {tagsList.map(eachTag => (
              <TagItem
                eachTag={eachTag}
                key={eachTag.optionId}
                onClickTask={this.onClickTask}
                isActive={activeTag === eachTag.optionId}
              />
            ))}
          </TagsList>
          <Heading>Tasks</Heading>
          {filteredTasksList.length === 0 ? (
            <NoTaskContainer>
              <NoTaskDescription>No Tasks Added Yet</NoTaskDescription>
            </NoTaskContainer>
          ) : (
            <TagsList>
              {filteredTasksList.map(eachTask => (
                <TaskItem key={eachTask.id} eachTask={eachTask} />
              ))}
            </TagsList>
          )}
        </TagsAndTaskContainer>
      </MyTaskContainer>
    )
  }
}

export default MyTasks
