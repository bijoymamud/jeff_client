import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseUrlToBackend = "http://10.10.13.99:9020/api/v1/"

export const baseApi = createApi({

    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://10.10.13.99:9020/api/v1/' }),
    endpoints: (build) => ({
        getTestimonials: build.query({
            query: () => "testimonials/",
        }),
    }),
})

export const { useGetTestimonialsQuery } = baseApi