import { useState } from "react";
import { RadioInput, TextInput } from "./inputs";
import {
  Page,
  FormContainer,
  FormTitle,
  FormInfo,
  FormAlert,
  ActualForm,
  Footer,
  Button,
} from "./styled";

function Form() {
  const formInputs = [
    {
      inputType: "text",
      name: "暱稱",
      placeholder: "您的回答",
      dataName: "name",
    },
    {
      inputType: "email",
      name: "電子郵件",
      placeholder: "您的電子郵件",
      dataName: "email",
    },
    {
      inputType: "number",
      name: "手機號碼",
      placeholder: "您的手機號碼",
      dataName: "number",
    },
    {
      inputType: "radio",
      name: "報名類型",
      option1: "躺在床上用想像力實作",
      option2: "趴在地上滑手機找現成的",
      dataName: "type",
    },
    {
      inputType: "text",
      name: "怎麼知道這個活動的？",
      placeholder: "您的回答",
      dataName: "howDoYouKnow",
    },
    {
      inputType: "text",
      name: "對活動的一些建議",
      placeholder: "您的回答",
      dataName: "others",
    },
  ];
  const [formData, setFormData] = useState({
    name: {
      value: "",
      message: "",
      isRequired: true,
    },
    email: {
      value: "",
      message: "",
      isRequired: true,
    },
    number: {
      value: "",
      message: "",
      isRequired: true,
    },
    type: {
      value: "",
      message: "",
      isRequired: true,
    },
    howDoYouKnow: {
      value: "",
      message: "",
      isRequired: true,
    },
    others: {
      value: "",
      isRequired: false,
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    let formIsOk = true;
    let obj = { ...formData };
    for (const data in formData) {
      if (data === "others") continue;
      if (formData[data]["value"] === "") {
        obj[data]["message"] = "此處不得為空";
        formIsOk = false;
      } else {
        obj[data]["message"] = "";
      }
    }
    setFormData(obj);
    if (formIsOk) {
      const { name, number, email, type, howDoYouKnow, others } = formData;
      alert(`
    暱稱:${name.value}
    號碼:${number.value}
    email:${email.value}
    報名類型:${type.value}
    你怎麼知道的:${howDoYouKnow.value}
    其他:${others.value}
    `);
    }
  }
  function handleTextInputChange(e, dataName) {
    let obj = { ...formData };
    obj[dataName]["value"] = e.target.value;
    setFormData(obj);
  }
  function handleRadioInputChange(e) {
    let obj = { ...formData };
    obj.type.value = e.target.value;
    setFormData(obj);
  }
  return (
    <>
      <Page>
        <FormContainer>
          <FormTitle style={{ marginTop: "54px" }}>
            新拖延運動報名表單
          </FormTitle>
          <FormInfo>活動日期：2020/12/10 ~ 2020/12/11</FormInfo>
          <FormInfo>活動地點：台北市大安區新生南路二段 1 號</FormInfo>
          <FormAlert>*必填</FormAlert>
          <ActualForm onSubmit={handleSubmit}>
            {formInputs.map((input, index) => {
              if (input.inputType === "radio") {
                return (
                  <RadioInput
                    key={index}
                    inputName={input.name}
                    option1={input.option1}
                    option2={input.option2}
                    handleRadioInputChange={handleRadioInputChange}
                    formData={formData}
                  />
                );
              }
              return (
                <>
                  <FormInfo as="h3" style={{ fontSize: "20px" }}>
                    {index === 5 && "其他"}
                  </FormInfo>
                  <TextInput
                    key={index}
                    inputName={input.name}
                    inputType={input.inputType}
                    placeholder={input.placeholder}
                    dataName={input.dataName}
                    formData={formData}
                    handleTextInputChange={handleTextInputChange}
                  />
                </>
              );
            })}
            <Button type="submit" value="提交">
              提交
            </Button>
          </ActualForm>
          <FormInfo style={{ marginTop: "20px" }}>
            請勿透過表單送出您的密碼。
          </FormInfo>
        </FormContainer>
      </Page>
      <Footer>© 2020 © Copyright. All rights Reserved.</Footer>
    </>
  );
}

export default Form;
