import { useState } from "react";
import { useTaskStore } from "../stores/TaskStore";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 30%;
  min-width: 280px;
  color: var(--text-dark);
  font-size: 16px;
  font-weight: 400;
  margin: 8px 0;
`;

const InputStyled = styled.input`
  font-size: 14px;
  height: 32px;
  border-radius: 6px;
  padding: 2px 4px;
  align-content: center;
  margin-bottom: 8px;
`;

const SelectorStyled = styled.select`
  font-size: 14px;
  height: 32px;
  border-radius: 6px;
  padding: 2px 4px;
  align-content: center;
`;

const ButtonStyled = styled.button`
  height: 42px;
  font-size: 14px;
  font-weight: 500;
  color: var(--white-color);
  background-color: var(--primary-grey);
  border: none;
  border-radius: 6px;
  margin-top: 12px;

  &&:hover {
    background-color: #1c3977;
    transform: scale(1.02);
  }

  &:focus {
    border: 2px solid #0049e8;
  }
`;

export const AddNewTaskForm = () => {
  const { addTask } = useTaskStore();

  const [name, setName] = useState("");

  const [category, setCategory] = useState("on fire");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSelectorChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({ name, category });

    setName(""); /* empties input when user hits Add button */
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="taskInput">Add new task: </label>
      <InputStyled
        as="textarea"
        id="taskInput"
        name="task-input"
        placeholder="ex.: Buy milk for pancakes"
        value={name}
        onChange={handleInputChange}
        /* $error={} */
      />
      <label htmlFor="task-category">Add priority: </label>
      <SelectorStyled
        name="taskCategory"
        id="task-category"
        onChange={handleSelectorChange}
        value={category}
      >
        <option value="on fire">On fire</option>
        <option value="do asap">Do asap</option>
        <option value="can wait">Can wait</option>
      </SelectorStyled>
      <ButtonStyled type="submit">+Add new task</ButtonStyled>
    </Form>
  );
};
