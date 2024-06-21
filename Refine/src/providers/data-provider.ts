import type { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const dataProvider: DataProvider = {
  getOne: async ({ resource, id, meta }) => {
    try {
      const response = await fetch(`${API_URL}/${resource}/${id}`);
      if (response.status < 200 || response.status > 299) throw response;
      const data = await response.json();
      return { data };
    } catch (error) {
      throw new Error("Not implemented");
    }
  },
  update: () => {
    throw new Error("Not implemented");
  },
  getList: () => {
    throw new Error("Not implemented");
  },
  create: () => {
    throw new Error("Not implemented");
  },
  deleteOne: () => {
    throw new Error("Not implemented");
  },
  getApiUrl: () => API_URL,
  // Optional methods:
  // getMany: () => { /* ... */ },
  // createMany: () => { /* ... */ },
  // deleteMany: () => { /* ... */ },
  // updateMany: () => { /* ... */ },
  // custom: () => { /* ... */ },
};
