import {Control, Controller} from "react-hook-form";
import {FormInput} from "../pages/react-hook-form/mui/single-form/SingleForm";
import {MenuItem, TextField} from "@mui/material";

export type SelectItem = {
  label: string
  value: string
}

type Props = {
  control: Control<FormInput>
  items: SelectItem[]
}

const Component = ({control, items}: Props): JSX.Element => {
  return (
    <>
      <Controller control={control}
                  name="shop"
                  defaultValue=""
                  rules={{required: {value: true, message: '店舗は選択必須です'}}}
                  render={({field, fieldState: {error}}) => (
                    <>
                      <TextField {...field}
                                 select
                                 sx={{width: 200}}
                                 label="店舗"
                                 error={!!error?.message}
                                 helperText={error?.message}>
                        {items.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </>
                  )}
        />
    </>
  )
}

export default Component