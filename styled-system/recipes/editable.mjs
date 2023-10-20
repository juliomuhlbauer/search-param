import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const editableDefaultVariants = {}
const editableCompoundVariants = []

const editableSlotNames = [
  [
    "root",
    "editable__root"
  ],
  [
    "area",
    "editable__area"
  ],
  [
    "label",
    "editable__label"
  ],
  [
    "preview",
    "editable__preview"
  ],
  [
    "input",
    "editable__input"
  ],
  [
    "editTrigger",
    "editable__editTrigger"
  ],
  [
    "submitTrigger",
    "editable__submitTrigger"
  ],
  [
    "cancelTrigger",
    "editable__cancelTrigger"
  ],
  [
    "control",
    "editable__control"
  ]
]
const editableSlotFns = editableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, editableDefaultVariants, getSlotCompoundVariant(editableCompoundVariants, slotName))])

const editableFn = (props = {}) => {
  return Object.fromEntries(editableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const editableVariantKeys = []

export const editable = Object.assign(editableFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: editableVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, editableVariantKeys)
  },
})