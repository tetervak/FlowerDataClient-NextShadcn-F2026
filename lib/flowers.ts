import "server-only"
import type { Flower } from "@/types/flower"

const API_URL = "http://localhost:8080/api/flowers"

export async function getFlowers(): Promise<Flower[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Failed to fetch flowers")
  }

  return response.json()
}

export async function getFlower(id: string): Promise<Flower | null> {
  const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`, {
    cache: "no-store",
  })

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error("Failed to fetch flower")
  }

  return response.json()
}
