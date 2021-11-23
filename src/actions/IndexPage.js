import { OPEN_INDEX_PAGE, CLOSE_INDEX_PAGE } from "./types";

export const openIndexPage = () => ({
  type: OPEN_INDEX_PAGE,
});

export const closeIndexPage = () => ({
  type: CLOSE_INDEX_PAGE,
});
