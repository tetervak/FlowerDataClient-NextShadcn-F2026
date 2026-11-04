import { Flower } from "@/types/flower"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const IMAGE_URL = "http://localhost:8080/images/flowers"

export function FlowerDetailsCard({ flower }: { flower: Flower }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl text-blue-500">{flower.label}</CardTitle>

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
  )
}