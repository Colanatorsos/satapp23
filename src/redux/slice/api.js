import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://allianceplus-web.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: () => `products/`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductByNameQuery } = productsAPI;
export const { useGetProductByIdQuery } = productsAPI;