export const runtime = "edge";

import { Container, Stack } from "styled-system/jsx";
import { Suspense } from "react";
import { SelectWithoutSSR } from "./select-with-no-ssr";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Stack>
        {children}

        <Suspense>
          <SelectWithoutSSR />
        </Suspense>
      </Stack>
    </Container>
  );
}
