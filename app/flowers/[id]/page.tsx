import Link from "next/link"
import { notFound } from "next/navigation"
import { getFlower } from "@/lib/flowers"
import { FlowerDetailsCard } from "@/components/flower-details-card"

interface FlowerDetailsPageProps {
  params: Promise<{ id: string }>
}

export default async function FlowerDetailsPage({
  params,
}: FlowerDetailsPageProps) {
  const { id } = await params
  const flower = await getFlower(id)

  if (!flower) {
    notFound()
  }

  return (
    <main className="container mx-auto max-w-3xl p-6">
      <Link
        href="/flowers"
        className="mb-6 inline-block text-primary hover:underline"
      >
        ← Back to flowers
      </Link>
      <FlowerDetailsCard flower={flower} />
    </main>
  )
}
