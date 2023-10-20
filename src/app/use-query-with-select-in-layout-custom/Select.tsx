"use client";

import { Stack } from "styled-system/jsx";

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
} from "~/components/ui/select";

import { useRouter } from "next/navigation";
import { Heading } from "~/components/ui/typography";
import { CITIES } from "./cities";
import { TEST_PARAM } from "./param";

import { useCallback, useEffect, useState } from "react";

function useSearchParamsListener() {
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams()
  );

  useEffect(() => {
    const handler = () => {
      const newSearchParams = new URLSearchParams(window.location.search);

      setSearchParams(newSearchParams);

      console.log("changed", newSearchParams.get("cidade"));
    };

    handler();

    const originalPushState = history.pushState;

    history.pushState = function (data, title, url) {
      originalPushState.apply(history, [data, title, url]);

      console.log("changed", history.state);
      handler();
    };

    return () => {
      history.pushState = originalPushState; // restore the copy
    };
  }, []);

  return searchParams;
}

export default function SelectRegiao() {
  const router = useRouter();

  const searchParams = useSearchParamsListener();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const cidade = searchParams.get(TEST_PARAM);

  if (!cidade) {
    return null;
  }

  // console.log(cidade);

  const items = CITIES.map((item) => ({
    label: item.city,
    value: item.city,
  }));

  return (
    <Stack>
      <Heading>Client: {cidade}</Heading>

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
        value={[cidade]}
        onChange={({ value }) => {
          router.push(
            `/use-query-with-select-in-layout-custom?${createQueryString(
              TEST_PARAM,
              value[0]
            )}`
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
