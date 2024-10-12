import { createLazyFileRoute } from '@tanstack/react-router'
import SetDesign from '@/pages/subpages/SetDesign'

export const Route = createLazyFileRoute('/portfoliov1/setdesign')({
  component: () => <SetDesign />,
})