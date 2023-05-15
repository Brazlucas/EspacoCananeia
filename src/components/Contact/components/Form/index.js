import { useState } from "react";
import {
  Action,
  Container,
  Error,
  FormItem,
  Label,
  Loader,
  SuccessLabel,
  TextField,
  Forms,
  ErrorLabel,
} from "./Form.styles";

import axios from 'axios';

export default function Form() {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOnInputChange = (e, field) => {
    // deep clone
    let localFields = JSON.parse(JSON.stringify(fields));
    localFields[field] = e.target.value;
    setFields(localFields);
  };

  const handleValidation = () => {
    setErrors({});
    let localErrors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]
      || !fields["email"]
      || !fields["phone"]
      || !fields["company"]) {
       formIsValid = false;
       localErrors["generic"] = "Todos os campos devem ser preenchidos";
    }

    setErrors(localErrors);
    return formIsValid;
  };

  const sendEmail = () => {
    setLoading(true);
    axios
      .post('/api/mailer', { fields })
      .then((res) => {
        console.log("Fetch: ", res);
        res.status === 200
        ?
        setSucess(true)
          : setErrorMessage('Ocorreu um erro no envio do email, atualize e tente novamente');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const contactSubmit = (e) => {
    setErrorMessage(null);
    e.preventDefault();

    if(handleValidation()){
       sendEmail();
    }else{
      setErrorMessage('Todos os campos devem ser preenchidos');
    }
  };

  return (
    <>
      <div id="form"></div>
      <Container>
        <h5 style={{ marginBottom: '20px', color: '#fff' }}>Informe seus dados e entraremos em contato!</h5>
        <Forms onSubmit={(e) => { contactSubmit(e) }}>
          <FormItem>
            <Label>Nome</Label>
            <TextField
              required
              id="name"
              nane="name"
              type="text"
              onChange={(e) => { handleOnInputChange(e, "name"); }}
              value={fields["name"]}
            />
          </FormItem>
          <FormItem>
            <Label>Email</Label>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              onChange={(e) => { handleOnInputChange(e, "email"); }}
              value={fields["email"]}
            />
          </FormItem>
          <FormItem>
            <Label>Telefone</Label>
            <TextField
              required
              type="text"
              id="phone"
              name="phone"
              onChange={(e) => { handleOnInputChange(e, "phone"); }}
              value={fields["phone"]}
            />
          </FormItem>
          <FormItem>
            <Label>Empresa <span style={{ color: 'yellow' }}>(opcional)</span> </Label>
            <TextField
              type="text"
              id="company"
              name="company"
              onChange={(e) => { handleOnInputChange(e, "company"); }}
              value={fields["company"]}
            />
          </FormItem>
          <Error>{errors['generic']}</Error>
          {sucess && (<SuccessLabel>E-mail enviado com sucesso!</SuccessLabel>)}
          {errorMessage && (<ErrorLabel>{errorMessage}</ErrorLabel>)}
          <Action type="submit">
            {loading ? <Loader /> : 'Enviar contato'}
          </Action>
        </Forms>
      </Container>
    </>
  );
};
