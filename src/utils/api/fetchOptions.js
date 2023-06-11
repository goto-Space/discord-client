interface Body {
  [Key: string]: string | string[] | null;
}

const postFetchOptions = (body: Body): RequestInit => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // credentials: 'include',
  body: JSON.stringify(body),
});

const deleteFetchOptions = (): RequestInit => ({
  method: 'DELETE',
  // credentials: 'include',
});

const patchFetchOptions = (body: Body): RequestInit => ({
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  // credentials: 'include',
  body: JSON.stringify(body),
});

export { postFetchOptions, deleteFetchOptions, patchFetchOptions };
