/**
 * Shorts Server Service
 *
 * Server-side data access for Shorts.
 */

import axiosInstance from "@/lib/axios.config";
import qs from "qs";
import { IShort, IShortsResponse } from "@/types/shorts.types";

/**
 * Fetch all active shorts (sorted by order).
 */
export async function getShorts(params?: {
  page?: number;
  pageSize?: number;
}): Promise<{ data: IShort[]; meta: IShortsResponse["meta"] }> {
  try {
    const query = qs.stringify(
      {
        filters: {
          isActive: {
            $eq: true,
          },
        },
        sort: ["order:asc"],
        pagination: {
          page: params?.page || 1,
          pageSize: params?.pageSize || 10,
        },
      },
      { encodeValuesOnly: true }
    );

    const { data } = await axiosInstance.get<IShortsResponse>(
      `/api/shorts?${query}`
    );

    return {
      data: data.data,
      meta: data.meta,
    };
  } catch (error) {
    console.error("Error fetching shorts:", error);
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: params?.pageSize || 10,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
}
export async function getShortsall(): Promise<IShort[]> {
  try {
    const { data } = await axiosInstance.get<IShortsResponse>(
      "/api/shorts?populate=*"
    );

    return data.data;
  } catch (error) {
    console.error("Error fetching shorts:", error);
    return [];
  }
}



/**
 * Fetch single short by ID
 */
export async function getShortById(id: number): Promise<IShort | null> {
  try {
    const { data } = await axiosInstance.get<{ data: IShort }>(
      `/api/shorts/${id}`
    );

    return data.data;
  } catch (error) {
    console.error(`Error fetching short [${id}]:`, error);
    return null;
  }
}
