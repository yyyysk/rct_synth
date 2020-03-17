/**
 * POST
 * @param url post先
 * @param data postするデータ
 */
export const postData = function(url, data) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data),
  })
  .then(response => response.json());
}

/**
 * GET
 * @param url get先
 */
export const getData = function(url: string) {
  return fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    redirect: "follow",
    referrer: "no-referrer",
  })
  .then(response => response.json());
}

