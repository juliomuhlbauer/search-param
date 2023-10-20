import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const badgeFn = createRecipe('badge', {
  "variant": "subtle",
  "size": "md"
}, [])

const badgeVariantMap = {
  "variant": [
    "solid",
    "subtle",
    "outline"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
}
const badgeVariantKeys = Object.keys(badgeVariantMap)
export const badge = Object.assign(badgeFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: badgeVariantKeys,
  variantMap: badgeVariantMap,
  splitVariantProps(props) {
    return splitProps(props, badgeVariantKeys)
  },
})