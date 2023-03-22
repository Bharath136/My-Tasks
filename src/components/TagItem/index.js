import {TagButton, ListItem} from './styledComponents'

const TagItem = props => {
  const {eachTag, onClickTask, isActive} = props
  const {optionId, displayText} = eachTag
  const onSelectTag = () => {
    onClickTask(optionId)
  }
  return (
    <ListItem>
      <TagButton onClick={onSelectTag} isActive={isActive}>
        {displayText}
      </TagButton>
    </ListItem>
  )
}

export default TagItem
