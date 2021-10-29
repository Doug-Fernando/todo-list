import styled from 'styled-components';

type ContainerProps = {
  done: boolean
};

export const Container = styled.div(({ done }: ContainerProps) => (`
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

  label {
    color: #CCC;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }

  input {
    width: 15px;
    height: 15px;
    margin-right: 7px;
  }

  &:hover {
    background: #20214D
  }
  `
));

export const DeleteButton = styled.button`
  background: none;
  outline: none;
  border: none;
  margin-left: auto
`;

export const DeleteTask = styled.img`
  width: 20px;
  height: 20px;

  &:hover {
    transform: scale(1.2);
    transition: linear 100ms;
  }
`;
