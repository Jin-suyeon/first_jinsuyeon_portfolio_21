import { OPEN_INDEX_PAGE, CLOSE_INDEX_PAGE } from "../actions/types";

const openIndexPage = (state = false, action) => {
  switch (action.type) {
    case OPEN_INDEX_PAGE:
      return true;

    case CLOSE_INDEX_PAGE:
      return false;

    default:
      return false;
  }
};

export default openIndexPage;
