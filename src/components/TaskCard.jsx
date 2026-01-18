import styled from "styled-components";
import IconDelete from "../assets/icons/icondelete.svg";

const TaskWrapper = styled.div`
  background-color: var(--white-color);
  border-radius: 12px;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0;
`;

const TaskRow = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const TaskName = styled.p`
  flex: 1;
  font-size: 16px;
  font-weight: normal;
  word-break: break-word;
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
  opacity: ${({ $done }) => ($done ? 0.6 : 1)};
`;

const TaskInfo = styled.p`
  font-size: 14px;
  color: #1c2537;
  white-space: nowrap;

  @media (max-width: 480px) {
    white-space: normal;
    font-size: 12px;
  }
`;

const IconButton = styled.button`
  padding: 4px 8px;
  background-color: #f7b2c2;
  align-items: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f47996;
  }

  &:active {
    background-color: #fa4973;
    transform: scale(0.96);
  }
`;

export const TaskCard = ({
  isDone,
  name,
  category,
  timestamp,
  toggleFunction,
  onDelete,
}) => {
  /* Icon button - deletes task */
  const ButtonDelete = () => {
    return (
      <IconButton
        className="buttonIconDelete"
        aria-label="delete"
        onClick={() => {
          onDelete();
        }}
      >
        <img src={IconDelete} alt="delete-forever" className="iconDelete" />
      </IconButton>
    );
  };

  return (
    <TaskWrapper className="listContainer">
      <TaskRow>
        <Checkbox
          type="checkbox"
          checked={isDone}
          onChange={() => toggleFunction()}
        />
        <TaskName $done={isDone}>{name}</TaskName>
        <TaskInfo>{category}</TaskInfo>
        <TaskInfo>{timestamp.toLocaleDateString()}</TaskInfo>
        <ButtonDelete />
      </TaskRow>
    </TaskWrapper>
  );
};
