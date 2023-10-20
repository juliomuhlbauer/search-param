"use client";

import { Stack } from "styled-system/jsx";

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
} from "~/components/ui/select";
import { Portal } from "@ark-ui/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { parseAsString, useQueryState } from "next-usequerystate";
import { TEST_PARAM } from "./param";
import { CITIES } from "./cities";
import { Heading } from "~/components/ui/typography";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function SelectRegiao() {
  const router = useRouter();

  // console.log(cidade);

  const items = CITIES.map((item) => ({
    label: item.city,
    value: item.city,
  }));

  return (
    <Stack>
      {/* <Heading>Client: {cidade}</Heading> */}

      {/* {items.splice(0, 10).map((item) => (
        <Link
          key={item.value}
          href={`/use-query-with-select-in-layout-no-ssr-without-tracking?cidade=${item.value}`}
        >
          {item.label}
        </Link>
      ))} */}

      <Select
        positioning={{ sameWidth: true }}
        width="2xs"
        items={items}
        // value={[cidade]}
        onChange={({ value }) => {
          router.push(
            `/use-query-with-select-in-layout-no-ssr-without-tracking?cidade=${value}`
          );
        }}
      >
        <SelectLabel>Cidade</SelectLabel>
        <SelectControl>
          <SelectTrigger>
            <SelectValue placeholder="Seleciona uma cidade" />
            <ChevronsUpDownIcon />
          </SelectTrigger>
        </SelectControl>
        <Portal>
          <SelectPositioner>
            <SelectContent overflow="auto" maxH={300}>
              <SelectItemGroup id="cidade">
                <SelectItemGroupLabel htmlFor="cidade">
                  Cidade
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
