import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getFlower } from "@/lib/flowers"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const IMAGE_URL = "http://localhost:8080/images/flowers"

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

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{flower.label}</CardTitle>

          <CardDescription className="text-xl">
            ${flower.price.toFixed(2)}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="relative h-80 w-full">
            <Image
              src={`${IMAGE_URL}/${flower.picture.large}`}
              alt={flower.label}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="rounded-md object-contain"
            />
          </div>

          <p>{flower.description}</p>

          <a
            href={flower.wiki}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Learn more on Wikipedia
          </a>
        </CardContent>
      </Card>
    </main>
  )
}
