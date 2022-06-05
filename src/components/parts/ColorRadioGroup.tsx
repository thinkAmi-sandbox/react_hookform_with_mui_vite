import {FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FormInput} from "../pages/react-hook-form/mui/single-form/SingleForm";

export type RadioItem = {
  label: string
  value: string
}

type Props = {
  control: Control<FormInput>
  items: RadioItem[]
}

const Component = ({control, items}: Props): JSX.Element => {
  return (
    <>
      <FormControl>
        <FormLabel>色</FormLabel>
        <Controller name="color"
                    defaultValue={''}
                    control={control}
                    rules={{required: {value: true, message: '色は選択必須です'}}}
                    render={({field, fieldState: {error}}) => (
                      <>
                        <RadioGroup>
                          {items.map((radio: RadioItem) =>
                            (
                              <FormControlLabel {...field}
                                                key={radio.value}
                                                label={radio.label}
                                                value={radio.value}
                                                control={<Radio />}
                              />
                            )
                          )}
                        </RadioGroup>
                        <FormHelperText error={!!error?.message}>
                          {error?.message}
                        </FormHelperText>
                      </>
                    )}
        />
      </FormControl>
    </>
  )
}

export default Component