"use client";

import { useSearchParams } from "next/navigation";
import { Container, Stack } from "styled-system/jsx";

import { Portal } from "@ark-ui/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
  type SelectProps,
} from "~/components/ui/select";
import Link from "next/link";
import { Heading } from "~/components/ui/typography";

// import { useQueryState } from "next-usequerystate";

type Item = {
  label: string;
  value: string;
  disabled?: boolean;
};

export default function SearchParamClientPage() {
  const searchParam = useSearchParams();

  const framework = searchParam.get("framework") || "none";

  console.log(framework);

  const items = [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Svelte", value: "svelte", disabled: true },
    { label: "Vue", value: "vue" },
  ];

  return (
    <Container>
      <Stack>
        <h1>Search Param</h1>

        <Heading>{framework}</Heading>

        {items.map((item) => (
          <Link key={item.value} href={`/search-param?framework=${item.value}`}>
            {item.label}
          </Link>
        ))}

        <Select positioning={{ sameWidth: true }} width="2xs" items={items}>
          <SelectLabel>Framework</SelectLabel>
          <SelectControl>
            <SelectTrigger>
              <SelectValue placeholder="Select a Framework" />
              <ChevronsUpDownIcon />
            </SelectTrigger>
          </SelectControl>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                <SelectItemGroup id="framework">
                  <SelectItemGroupLabel htmlFor="framework">
                    Framework
                  </SelectItemGroupLabel>
                  {items.map((item) => (
                    <SelectItem key={item.value} item={item}>
                      <SelectItemText>{item.label}</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectItemGroup>
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </Select>
      </Stack>
    </Container>
  );
}
