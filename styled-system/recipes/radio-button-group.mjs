import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const radioButtonGroupDefaultVariants = {
  "size": "md",
  "variant": "solid"
}
const radioButtonGroupCompoundVariants = []

const radioButtonGroupSlotNames = [
  [
    "root",
    "radioButtonGroup__root"
  ],
  [
    "label",
    "radioButtonGroup__label"
  ],
  [
    "radio",
    "radioButtonGroup__radio"
  ],
  [
    "radioLabel",
    "radioButtonGroup__radioLabel"
  ],
  [
    "radioControl",
    "radioButtonGroup__radioControl"
  ],
  [
    "indicator",
    "radioButtonGroup__indicator"
  ]
]
const radioButtonGroupSlotFns = radioButtonGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, radioButtonGroupDefaultVariants, getSlotCompoundVariant(radioButtonGroupCompoundVariants, slotName))])

const radioButtonGroupFn = (props = {}) => {
  return Object.fromEntries(radioButtonGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const radioButtonGroupVariantKeys = [
  "variant",
  "size"
]

export const radioButtonGroup = Object.assign(radioButtonGroupFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: radioButtonGroupVariantKeys,
  variantMap: {
  "variant": [
    "solid",
    "outline"
  ],
  "size": [
    "sm",
    "md",
    "lg",
    "xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, radioButtonGroupVariantKeys)
  },
})