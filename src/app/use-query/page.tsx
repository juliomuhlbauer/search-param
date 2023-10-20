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
import { hstack } from "styled-system/patterns/hstack";

import { parseAsString, useQueryState } from "next-usequerystate";
import { Button } from "~/components/ui/button";

type Item = {
  label: string;
  value: string;
  disabled?: boolean;
};

export default function SearchParamClientPage() {
  const [framework, setFramework] = useQueryState(
    "framework",
    parseAsString
      .withOptions({
        shallow: false,
      })
      .withDefault("react")
  );

  console.log(framework);

  const items = [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Svelte", value: "svelte", disabled: true },
    { label: "Vue", value: "vue" },
  ];

  return (
    <Stack>
      <Heading>Client: {framework}</Heading>

      {items.map((item) => (
        <Button
          key={item.value}
          variant="outline"
          //   href={`/search-param?framework=${item.value}`}
          onClick={() => setFramework(item.value)}
        >
          {item.label}
        </Button>
      ))}

      <Select
        positioning={{ sameWidth: true }}
        width="2xs"
        items={items}
        value={[framework]}
        onChange={({ value }) => setFramework(value[0])}
      >
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
  );
}
