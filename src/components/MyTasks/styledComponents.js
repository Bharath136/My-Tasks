import styled from 'styled-components'

export const MyTaskContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`

export const MyTaskFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
  background-color: #131213;
  height: 100vh;
  width: 30%;
  padding: 40px;
`

export const MyTaskHeading = styled.h1`
  font-size: 34px;
  font-family: 'Roboto';
  color: #f3aa4e;
`

export const MyTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Label = styled.label`
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto';
`

export const Input = styled.input`
  outline: none;
  padding: 14px;
  font-size: 16px;
  border-radius: 2px;
  border: 0;
  background-color: #fff;
`

export const Select = styled.select`
  padding: 14px;
  font-size: 16px;
  outline: none;
  border-radius: 2px;
  border: 0;
  background-color: #fff;
`

export const Option = styled.option`
  padding: 10px;
`

export const AddButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AddButton = styled.button`
  background-color: #f3aa4e;
  color: #fff;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  height: 36px;
  width: 120px;
`

export const TagsAndTaskContainer = styled.div`
  padding: 40px;
  width: 70%;
  min-height: 100vh;
  background-color: #000000;
`

export const Heading = styled.h1`
  font-size: 28px;
  color: #fff;
  font-family: 'Roboto';
`

export const TagsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`

export const NoTaskContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoTaskDescription = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
`
