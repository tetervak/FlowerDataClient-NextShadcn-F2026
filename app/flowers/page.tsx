import Link from "next/link"
import { getFlowers } from "@/lib/flowers"
import { FlowerListCard } from "@/components/flower-list-card"

export default async function FlowersPage() {
  const flowers = await getFlowers()

  return (
    <main className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold text-blue-500">Flowers</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {flowers.map((flower) => (
          <Link
            key={flower.id}
            href={`/flowers/${flower.id}`}
            className="block h-full rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <FlowerListCard flower={flower} />
          </Link>
        ))}
      </div>
    </main>
  )
}
