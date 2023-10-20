import { Container, Stack } from "styled-system/jsx";
import { Suspense } from "react";
import SelectRegiao from "./Select";
import { TEST_PARAM } from "./param";
import { Heading } from "~/components/ui/typography";

export default function TestePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Container>
      <Stack>
        <Heading>Server: {searchParams[TEST_PARAM]}</Heading>

        <Suspense>
          <SelectRegiao />
        </Suspense>
      </Stack>
    </Container>
  );
}
