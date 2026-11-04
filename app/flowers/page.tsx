import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getFlowers } from "@/lib/flowers"

const IMAGE_URL = "http://localhost:8080/images/flowers"

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
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>{flower.label}</CardTitle>
                <CardDescription>${flower.price.toFixed(2)}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="relative mb-4 h-48 w-full">
                  <Image
                    src={`${IMAGE_URL}/${flower.picture.large}`}
                    alt={flower.label}
                    fill
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           33vw"
                    className="rounded-md object-cover"
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  {flower.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
