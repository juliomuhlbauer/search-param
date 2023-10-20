import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dialogDefaultVariants = {}
const dialogCompoundVariants = []

const dialogSlotNames = [
  [
    "trigger",
    "dialog__trigger"
  ],
  [
    "backdrop",
    "dialog__backdrop"
  ],
  [
    "container",
    "dialog__container"
  ],
  [
    "content",
    "dialog__content"
  ],
  [
    "title",
    "dialog__title"
  ],
  [
    "description",
    "dialog__description"
  ],
  [
    "closeTrigger",
    "dialog__closeTrigger"
  ]
]
const dialogSlotFns = dialogSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dialogDefaultVariants, getSlotCompoundVariant(dialogCompoundVariants, slotName))])

const dialogFn = (props = {}) => {
  return Object.fromEntries(dialogSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const dialogVariantKeys = []

export const dialog = Object.assign(dialogFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: dialogVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, dialogVariantKeys)
  },
})