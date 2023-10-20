import dynamic from "next/dynamic";

export const SelectWithoutSSR = dynamic(() => import("./Select"), {
  ssr: false,
});
