import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const checkboxDefaultVariants = {
  "size": "md"
}
const checkboxCompoundVariants = []

const checkboxSlotNames = [
  [
    "root",
    "checkbox__root"
  ],
  [
    "label",
    "checkbox__label"
  ],
  [
    "control",
    "checkbox__control"
  ]
]
const checkboxSlotFns = checkboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, checkboxDefaultVariants, getSlotCompoundVariant(checkboxCompoundVariants, slotName))])

const checkboxFn = (props = {}) => {
  return Object.fromEntries(checkboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const checkboxVariantKeys = [
  "size"
]

export const checkbox = Object.assign(checkboxFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: checkboxVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, checkboxVariantKeys)
  },
})