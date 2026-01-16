import styled from "styled-components";
import IconDelete from "../assets/icons/icondelete.svg";

const IconButton = styled.button`
  padding: 4px 8px;
  background-color: transparent;
  align-items: center;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #ff8888;
  }

  &:active {
    background-color: #e83e3e;
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
    <div className="listContainer">
      <form style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => toggleFunction()}
        />
        <p>{name}</p>
        <p>{category}</p>
        <p>{timestamp.toLocaleDateString()}</p>
        <ButtonDelete />
      </form>
    </div>
  );
};
