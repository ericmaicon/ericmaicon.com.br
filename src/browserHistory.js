import { createBrowserHistory } from "history"

/**
 * to be called in places that is necessary to handle the browser history:
 *
 * history.push(`/busca?category=${category.value}`)
 */
export default createBrowserHistory()
