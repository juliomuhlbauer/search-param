import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const textareaFn = createRecipe('textarea', {
  "size": "md"
}, [])

const textareaVariantMap = {
  "size": [
    "sm",
    "md",
    "lg",
    "xl"
  ]
}
const textareaVariantKeys = Object.keys(textareaVariantMap)
export const textarea = Object.assign(textareaFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: textareaVariantKeys,
  variantMap: textareaVariantMap,
  splitVariantProps(props) {
    return splitProps(props, textareaVariantKeys)
  },
})