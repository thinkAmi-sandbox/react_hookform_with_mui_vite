import {Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FormInput} from "../pages/react-hook-form/mui/single-form/SingleForm";

type Props = {
  control: Control<FormInput>
}

const Component = ({control}: Props): JSX.Element => {
  return (
    <>
      <FormControl>
        <Controller name="inStock"
                    defaultValue={false}
                    control={control}
                    rules={{required: {value: true, message: 'チェックを入れてください'}}}
                    render={({field, fieldState: {error}}) => (
                      <>
                        <FormControlLabel {...field}
                          label="在庫あり"
                          control={<Checkbox />}
                        />
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