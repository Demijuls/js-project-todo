import { useEffect, useState } from "react";
import styled from "styled-components";
import { TodaysDate } from "./TodaysDate";
import IconDelete from "../assets/icons/icondelete.svg";

const IconButton = styled.button`
  /*  margin: 12px 0 0 24px; */
  /* display: inline-flex; */
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

export const TaskCard = ({ isDone, name, category, timestamp }) => {
  /* checkbox to check task as completed */

  /* Task name - added from text field when user fills it - required */

  /* Category - added from drop down when user creates task - required */

  /* Time stamp - added from today's date when user creates task (from the background) - can it be done? stored as raw date, maybe use createdAt somewhere in the TodaysDate component or should it be different?*/

  /* Icon button - deletes task */
  const ButtonDelete = () => {
    const handleDelete = () => {};

    return (
      <IconButton
        className="buttonIconDelete"
        aria-label="delete"
        onClick={() => handleDelete()}
      >
        <img src={IconDelete} alt="delete-forever" className="iconDelete" />
      </IconButton>
    );
  };

  return (
    <div className="listContainer">
      <form
        action=""
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <input type="checkbox" checked={isDone} />
        <p>{name}</p>
        <p>{category}</p>
        <p>{timestamp.toLocaleDateString()}</p>
        <ButtonDelete />
      </form>
    </div>
  );
};
