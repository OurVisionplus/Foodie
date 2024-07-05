import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="sender" source="sender" />
      </SimpleForm>
    </Create>
  );
};
