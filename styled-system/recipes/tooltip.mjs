import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tooltipDefaultVariants = {}
const tooltipCompoundVariants = []

const tooltipSlotNames = [
  [
    "trigger",
    "tooltip__trigger"
  ],
  [
    "arrow",
    "tooltip__arrow"
  ],
  [
    "arrowTip",
    "tooltip__arrowTip"
  ],
  [
    "positioner",
    "tooltip__positioner"
  ],
  [
    "content",
    "tooltip__content"
  ]
]
const tooltipSlotFns = tooltipSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tooltipDefaultVariants, getSlotCompoundVariant(tooltipCompoundVariants, slotName))])

const tooltipFn = (props = {}) => {
  return Object.fromEntries(tooltipSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const tooltipVariantKeys = []

export const tooltip = Object.assign(tooltipFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: tooltipVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, tooltipVariantKeys)
  },
})