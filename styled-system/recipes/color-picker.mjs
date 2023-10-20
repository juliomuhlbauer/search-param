import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const colorPickerDefaultVariants = {}
const colorPickerCompoundVariants = []

const colorPickerSlotNames = [
  [
    "area",
    "colorPicker__area"
  ],
  [
    "areaThumb",
    "colorPicker__areaThumb"
  ],
  [
    "areaGradient",
    "colorPicker__areaGradient"
  ],
  [
    "channelSliderTrack",
    "colorPicker__channelSliderTrack"
  ],
  [
    "channelSliderTrackBackground",
    "colorPicker__channelSliderTrackBackground"
  ],
  [
    "channelSliderThumb",
    "colorPicker__channelSliderThumb"
  ],
  [
    "channelInput",
    "colorPicker__channelInput"
  ],
  [
    "swatch",
    "colorPicker__swatch"
  ],
  [
    "swatchBackground",
    "colorPicker__swatchBackground"
  ],
  [
    "content",
    "colorPicker__content"
  ],
  [
    "label",
    "colorPicker__label"
  ],
  [
    "eyeDropperTrigger",
    "colorPicker__eyeDropperTrigger"
  ],
  [
    "swatchGroup",
    "colorPicker__swatchGroup"
  ]
]
const colorPickerSlotFns = colorPickerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, colorPickerDefaultVariants, getSlotCompoundVariant(colorPickerCompoundVariants, slotName))])

const colorPickerFn = (props = {}) => {
  return Object.fromEntries(colorPickerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const colorPickerVariantKeys = []

export const colorPicker = Object.assign(colorPickerFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: colorPickerVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, colorPickerVariantKeys)
  },
})