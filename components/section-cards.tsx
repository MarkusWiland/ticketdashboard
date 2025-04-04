import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Total Inkomst */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Inkomst</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1 250 000 SEK
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Ökar denna månad <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Total inkomst under de senaste 6 månaderna
          </div>
        </CardFooter>
      </Card>

      {/* Totala Utgifter */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Totala Utgifter</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            450 000 SEK
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -5.0%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Minskat denna månad <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Totala utgifter under de senaste 6 månaderna
          </div>
        </CardFooter>
      </Card>

      {/* Inkomst Senaste Månaden */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Inkomst Senaste Månaden</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            150 000 SEK
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +7.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Ökat senaste månaden <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Jämfört med föregående månad
          </div>
        </CardFooter>
      </Card>

      {/* Utgifter Senaste Månaden */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Utgifter Senaste Månaden</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45 000 SEK
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -10.0%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Minskat senaste månaden <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Jämfört med föregående månad
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
