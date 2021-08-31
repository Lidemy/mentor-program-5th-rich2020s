import styled from "styled-components";
import { FormInfo, FormAlert } from ".././styled";

const AlertMark = styled(FormAlert)`
  font-weight: lighter;
  font-size: 20px;
  margin-left: 7px;
`;
const InputName = styled(FormInfo)`
  font-size: 20px;
`;
function Label({ content, labeler }) {
  return (
    <label style={{ fontSize: "14px" }} htmlFor={labeler}>
      {content}
    </label>
  );
}

export function TextInput({
  inputName,
  inputType,
  placeholder,
  dataName,
  formData,
  handleTextInputChange,
}) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <InputName as="h3">
        {inputName}
        {formData[dataName].isRequired && <AlertMark as="span">*</AlertMark>}
      </InputName>
      <input
        style={{ position: "relative" }}
        placeholder={placeholder}
        value={formData[dataName].value}
        onChange={(e) => handleTextInputChange(e, dataName)}
        type={inputType}
      />
      <FormAlert style={{ position: "absolute", fontSize: "14px" }}>
        {formData[dataName].message}
      </FormAlert>
    </div>
  );
}

export function RadioInput({
  inputName,
  option1,
  option2,
  handleRadioInputChange,
  formData,
}) {
  return (
    <div style={{ marginBottom: "26px" }}>
      <InputName as="h3">
        {inputName}
        {formData.type.isRequired && <AlertMark as="span">*</AlertMark>}
      </InputName>
      <input
        style={{ marginRight: "6px" }}
        type="radio"
        name="type"
        id="option1"
        value={option1}
        onClick={handleRadioInputChange}
      />
      <Label labeler="option1" content={option1} />
      <br />
      <input
        style={{ marginRight: "6px" }}
        type="radio"
        name="type"
        id="option2"
        value={option2}
        onClick={handleRadioInputChange}
      />
      <Label
        style={{ position: "relative" }}
        labeler="option2"
        content={option2}
      />
      <FormAlert style={{ position: "absolute", fontSize: "14px" }}>
        {formData["type"].message}
      </FormAlert>
    </div>
  );
}
