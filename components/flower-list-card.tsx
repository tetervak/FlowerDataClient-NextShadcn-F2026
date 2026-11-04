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

export function FlowerListCard({ flower }: { flower: Flower }) {
  return (
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

        <p className="text-sm text-muted-foreground">{flower.description}</p>
      </CardContent>
    </Card>
  )
}