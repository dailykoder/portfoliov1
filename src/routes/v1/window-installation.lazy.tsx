import { createLazyFileRoute } from '@tanstack/react-router'
import WindowInstallation from '@/pages/subpages/WindowInstallation'

export const Route = createLazyFileRoute('/v1/window-installation')({
  component: () => <WindowInstallation />,
})
