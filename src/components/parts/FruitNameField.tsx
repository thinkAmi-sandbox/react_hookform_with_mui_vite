import {Control, Controller} from "react-hook-form";
import {FormInput} from "../pages/react-hook-form/mui/single-form/SingleForm";
import {TextField} from "@mui/material";

type Props = {
  control: Control<FormInput>
}

const Component = ({control}: Props): JSX.Element => {
  return (
    <>
      <Controller
        control={control}
        name="name"
        defaultValue={""}
        rules={{required: {value: true, message: '入力必須です'}}}
        render={({field, fieldState: {error}}) =>
          (
            <TextField
              {...field}
              label="品種名"
              error={!!error?.message}
              helperText={error?.message}
            />
          )}
      />
    </>
  )
}

export default Component