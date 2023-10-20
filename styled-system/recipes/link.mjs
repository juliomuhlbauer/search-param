import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const linkFn = createRecipe('link', {
  "variant": "text"
}, [])

const linkVariantMap = {
  "variant": [
    "text",
    "toc",
    "navbar"
  ]
}
const linkVariantKeys = Object.keys(linkVariantMap)
export const link = Object.assign(linkFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: linkVariantKeys,
  variantMap: linkVariantMap,
  splitVariantProps(props) {
    return splitProps(props, linkVariantKeys)
  },
})