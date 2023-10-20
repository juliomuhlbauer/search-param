import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const drawerDefaultVariants = {
  "placement": "right"
}
const drawerCompoundVariants = []

const drawerSlotNames = [
  [
    "trigger",
    "drawer__trigger"
  ],
  [
    "backdrop",
    "drawer__backdrop"
  ],
  [
    "container",
    "drawer__container"
  ],
  [
    "content",
    "drawer__content"
  ],
  [
    "title",
    "drawer__title"
  ],
  [
    "description",
    "drawer__description"
  ],
  [
    "closeTrigger",
    "drawer__closeTrigger"
  ]
]
const drawerSlotFns = drawerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, drawerDefaultVariants, getSlotCompoundVariant(drawerCompoundVariants, slotName))])

const drawerFn = (props = {}) => {
  return Object.fromEntries(drawerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const drawerVariantKeys = [
  "placement"
]

export const drawer = Object.assign(drawerFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: drawerVariantKeys,
  variantMap: {
  "placement": [
    "left",
    "right"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, drawerVariantKeys)
  },
})