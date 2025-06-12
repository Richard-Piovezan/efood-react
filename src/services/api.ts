import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantAPI } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<RestaurantAPI[], void>({
      query: () => 'restaurantes'
    }),
    getMenuList: builder.query<RestaurantAPI, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsListQuery, useGetMenuListQuery } = api
export default api
