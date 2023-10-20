import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const codeFn = createRecipe('code', {
  "size": "md",
  "variant": "outline"
}, [])

const codeVariantMap = {
  "variant": [
    "outline",
    "ghost"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
}
const codeVariantKeys = Object.keys(codeVariantMap)
export const code = Object.assign(codeFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: codeVariantKeys,
  variantMap: codeVariantMap,
  splitVariantProps(props) {
    return splitProps(props, codeVariantKeys)
  },
})