import { TEST_PARAM } from "./param";
import { Heading } from "~/components/ui/typography";

export default function TestePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <Heading>Server: {searchParams[TEST_PARAM]}</Heading>;
}
