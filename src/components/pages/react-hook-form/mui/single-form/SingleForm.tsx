import {SubmitHandler, UnpackNestedValue, useForm} from "react-hook-form";
import {Box, Button} from "@mui/material";
import ColorRadioGroup, {RadioItem} from "../../../../parts/ColorRadioGroup";
import ShopSelect, {SelectItem} from "../../../../parts/ShopSelect";
import InStockCheckBox from "../../../../parts/InStockCheckBox";
import FruitNameField from "../../../../parts/FruitNameField";

export type FormInput = {
  name: string  // TextField用
  color: string  // Radio用
  shop: string  // TextField select用
  inStock: boolean // Check用
}

const Component = (): JSX.Element => {
  const {control, handleSubmit, getValues} = useForm<FormInput>()

  const printWithData = (data: UnpackNestedValue<FormInput>) => {
    console.log('data による取り出し =========>')

    const {name, color, shop, inStock} = data
    console.log(`name: ${name}`)
    console.log(`color: ${color}`)
    console.log(`shop: ${shop}`)
    console.log(`inStock: ${inStock}`)
  }

  const printByGetValues = () => {
    console.log('getValues() による取り出し =========>')

    const {name, color, shop, inStock} = getValues()
    console.log(`name: ${name}`)
    console.log(`color: ${color}`)
    console.log(`shop: ${shop}`)
    console.log(`inStock: ${inStock}`)
  }

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // dataオブジェクトを使った取り出し
    printWithData(data)

    // getValues を使った取り出し
    printByGetValues()
  }

  const colors: RadioItem[] = [
    { label: '赤', value: 'red' },
    { label: '黄', value: 'yellow' }
  ]

  const shops: SelectItem[] = [
    { label: 'スーパー', value: 'supermarket' },
    { label: '産直所', value: 'farmersMarket' },
  ]

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <h1>データ登録</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mt: 5 }}>
            <FruitNameField control={control} />
          </Box>

          <Box sx={{ mt: 5 }}>
            <ColorRadioGroup control={control} items={colors} />
          </Box>

          <Box sx={{ mt: 5 }}>
            <ShopSelect control={control} items={shops} />
          </Box>

          <Box sx={{ mt: 5 }}>
            <InStockCheckBox control={control} />
          </Box>

          <Box sx={{ mt: 5 }}>
            <Button type="submit" variant="contained">
              保存
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default Component