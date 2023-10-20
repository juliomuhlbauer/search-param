import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const cardDefaultVariants = {}
const cardCompoundVariants = []

const cardSlotNames = [
  [
    "root",
    "card__root"
  ],
  [
    "header",
    "card__header"
  ],
  [
    "content",
    "card__content"
  ],
  [
    "footer",
    "card__footer"
  ],
  [
    "title",
    "card__title"
  ],
  [
    "description",
    "card__description"
  ]
]
const cardSlotFns = cardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, cardDefaultVariants, getSlotCompoundVariant(cardCompoundVariants, slotName))])

const cardFn = (props = {}) => {
  return Object.fromEntries(cardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const cardVariantKeys = []

export const card = Object.assign(cardFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: cardVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, cardVariantKeys)
  },
})