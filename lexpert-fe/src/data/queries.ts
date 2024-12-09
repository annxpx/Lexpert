import { queryOptions } from "@tanstack/react-query";
import { fetchKnowledge } from "./api";

export const knowledgeQueryOptions = queryOptions({
  queryKey: ["knowledge"],
  queryFn: fetchKnowledge,
});
