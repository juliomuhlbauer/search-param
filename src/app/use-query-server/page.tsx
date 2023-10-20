import { Container, Stack } from "styled-system/jsx";
import SearchParamClientPage from "../use-query/page";
import { Heading } from "~/components/ui/typography";

export default function TestePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Container>
      <Stack>
        <h1>Teste</h1>

        <Heading>{searchParams.framework}</Heading>

        <SearchParamClientPage />
      </Stack>
    </Container>
  );
}
