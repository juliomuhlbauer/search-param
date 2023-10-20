import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const hoverCardDefaultVariants = {}
const hoverCardCompoundVariants = []

const hoverCardSlotNames = [
  [
    "arrow",
    "hoverCard__arrow"
  ],
  [
    "arrowTip",
    "hoverCard__arrowTip"
  ],
  [
    "trigger",
    "hoverCard__trigger"
  ],
  [
    "positioner",
    "hoverCard__positioner"
  ],
  [
    "content",
    "hoverCard__content"
  ]
]
const hoverCardSlotFns = hoverCardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, hoverCardDefaultVariants, getSlotCompoundVariant(hoverCardCompoundVariants, slotName))])

const hoverCardFn = (props = {}) => {
  return Object.fromEntries(hoverCardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const hoverCardVariantKeys = []

export const hoverCard = Object.assign(hoverCardFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: hoverCardVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, hoverCardVariantKeys)
  },
})