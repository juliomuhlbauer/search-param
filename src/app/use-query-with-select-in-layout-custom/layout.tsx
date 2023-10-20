import { Container, Stack } from "styled-system/jsx";
import { Suspense } from "react";
import SelectRegiao from "../use-query-with-select-in-layout-custom/Select";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Stack>
        {children}

        <Suspense>
          <SelectRegiao />
        </Suspense>
      </Stack>
    </Container>
  );
}
