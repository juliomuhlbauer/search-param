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

export default function SelectRegiao() {
  const [cidade, setCidade] = useQueryState(
    TEST_PARAM,
    parseAsString
      .withOptions({
        shallow: false,
      })
      .withDefault("Taubaté")
  );

  console.log(cidade);

  const items = CITIES.map((item) => ({
    label: item.city,
    value: item.city,
  }));

  return (
    <Stack>
      <Heading>Client: {cidade}</Heading>

      {/* {items.map((item) => (
        <Button
          key={item.value}
          variant="outline"
          //   href={`/search-param?framework=${item.value}`}
          onClick={() => setFramework(item.value)}
        >
          {item.label}
        </Button>
      ))} */}

      <Select
        positioning={{ sameWidth: true }}
        width="2xs"
        items={items}
        value={[cidade]}
        onChange={({ value }) => setCidade(value[0])}
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
