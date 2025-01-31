import { backendClient } from "../services/api";

interface ElectricityData {
  quantity: string;
  price: string;
  value: string;
  tariff: string;
}

interface Document {
  id: string;
  fileName: string;
  filePath: string;
  createdAt: string;
  userId: string;
}

export interface IUser {
  id: string;
  customerNumber: string;
  referenceMonth: string;
  electricity: ElectricityData[];
  injectedEnergy: ElectricityData[];
  compensatedEnergy: ElectricityData[];
  contributionPublicLighting: string;
  documents: Document[];
}

export const fetchUser = async (filter?: string) => {
  const { data } = await backendClient.get("/user", { params: { filter } });
  return data;
};

export const getPdfDownload = async (id: string) => {
  window.open(`${import.meta.env.VITE_REACT_API_URL}/download/${id}`);
};
