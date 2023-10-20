import { Container, Stack } from "styled-system/jsx";
import SelectRegiao from "../use-query-with-select/Select";
import { Suspense } from "react";

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
