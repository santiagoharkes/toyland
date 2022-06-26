// Styles
import {
  ContainerStyled,
  IconStyled,
  InputContainerStyled,
  InputStyled,
  LabelStyled,
} from "./InputStyles";

// Utils
import { FiX } from "react-icons/fi";

function Input(props) {
  return (
    <ContainerStyled>
      {props.label && (
        <LabelStyled htmlFor={props.id}>{props.label}</LabelStyled>
      )}

      <InputContainerStyled>
        <InputStyled
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        />

        {props.value ? (
          <IconStyled clear onClick={props.clearInput}>
            <FiX />
          </IconStyled>
        ) : (
          props.icon && <IconStyled>{props.icon}</IconStyled>
        )}
      </InputContainerStyled>
    </ContainerStyled>
  );
}

export default Input;
