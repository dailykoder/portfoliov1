import { createLazyFileRoute } from '@tanstack/react-router'
import Work from '@/pages/Work'

export const Route = createLazyFileRoute('/v1/work')({
  component: () => <Work />,
})
