import { createLazyFileRoute } from '@tanstack/react-router'
import SetDesign from '@/pages/subpages/SetDesign'

export const Route = createLazyFileRoute('/v1/set-design')({
  component: () => <SetDesign />,
})
