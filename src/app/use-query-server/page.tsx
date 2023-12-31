import { Container, Stack } from "styled-system/jsx";
import SearchParamClientPage from "../use-query/page";
import { Heading } from "~/components/ui/typography";
import { Suspense } from "react";

export default function TestePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Container>
      <Stack>
        <Heading>Server: {searchParams.framework}</Heading>

        <Suspense>
          <SearchParamClientPage />
        </Suspense>
      </Stack>
    </Container>
  );
}
