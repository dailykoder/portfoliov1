/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const V1IndexLazyImport = createFileRoute('/v1/')()
const V1WorkLazyImport = createFileRoute('/v1/work')()
const V1WindowInstallationLazyImport = createFileRoute(
  '/v1/window-installation',
)()
const V1StylingLazyImport = createFileRoute('/v1/styling')()
const V1SetDesignLazyImport = createFileRoute('/v1/set-design')()
const V1ResumeLazyImport = createFileRoute('/v1/resume')()
const V1HandRenderingLazyImport = createFileRoute('/v1/hand-rendering')()
const V1DigitalRenderingLazyImport = createFileRoute('/v1/digital-rendering')()
const V1ContactLazyImport = createFileRoute('/v1/contact')()
const V1BrandingLazyImport = createFileRoute('/v1/branding')()
const V1AboutLazyImport = createFileRoute('/v1/about')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const V1IndexLazyRoute = V1IndexLazyImport.update({
  path: '/v1/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/v1/index.lazy').then((d) => d.Route))

const V1WorkLazyRoute = V1WorkLazyImport.update({
  path: '/v1/work',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/v1/work.lazy').then((d) => d.Route))

const V1WindowInstallationLazyRoute = V1WindowInstallationLazyImport.update({
  path: '/v1/window-installation',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/v1/window-installation.lazy').then((d) => d.Route),
)

const V1StylingLazyRoute = V1StylingLazyImport.update({
  path: '/v1/styling',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/v1/styling.lazy').then((d) => d.Route))

const V1SetDesignLazyRoute = V1SetDesignLazyImport.update({
  path: '/v1/set-design',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/v1/set-design.lazy').then((d) => d.Route))

const V1ResumeLazyRoute = V1ResumeLazyImport.update({
  path: '/v1/resume',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/v1/resume.lazy').then((d) => d.Route))

const V1HandRenderingLazyRoute = V1HandRenderingLazyImport.update({
  path: '/v1/hand-rendering',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/v1/hand-rendering.lazy').then((d) => d.Route),
)

const V1DigitalRenderingLazyRoute = V1DigitalRenderingLazyImport.update({
  path: '/v1/digital-rendering',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/v1/digital-rendering.lazy').then((d) => d.Route),
)

const V1ContactLazyRoute = V1ContactLazyImport.update({
  path: '/v1/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/v1/contact.lazy').then((d) => d.Route))

const V1BrandingLazyRoute = V1BrandingLazyImport.update({
  path: '/v1/branding',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/v1/branding.lazy').then((d) => d.Route))

const V1AboutLazyRoute = V1AboutLazyImport.update({
  path: '/v1/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/v1/about.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/about': {
      id: '/v1/about'
      path: '/v1/about'
      fullPath: '/v1/about'
      preLoaderRoute: typeof V1AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/branding': {
      id: '/v1/branding'
      path: '/v1/branding'
      fullPath: '/v1/branding'
      preLoaderRoute: typeof V1BrandingLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/contact': {
      id: '/v1/contact'
      path: '/v1/contact'
      fullPath: '/v1/contact'
      preLoaderRoute: typeof V1ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/digital-rendering': {
      id: '/v1/digital-rendering'
      path: '/v1/digital-rendering'
      fullPath: '/v1/digital-rendering'
      preLoaderRoute: typeof V1DigitalRenderingLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/hand-rendering': {
      id: '/v1/hand-rendering'
      path: '/v1/hand-rendering'
      fullPath: '/v1/hand-rendering'
      preLoaderRoute: typeof V1HandRenderingLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/resume': {
      id: '/v1/resume'
      path: '/v1/resume'
      fullPath: '/v1/resume'
      preLoaderRoute: typeof V1ResumeLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/set-design': {
      id: '/v1/set-design'
      path: '/v1/set-design'
      fullPath: '/v1/set-design'
      preLoaderRoute: typeof V1SetDesignLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/styling': {
      id: '/v1/styling'
      path: '/v1/styling'
      fullPath: '/v1/styling'
      preLoaderRoute: typeof V1StylingLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/window-installation': {
      id: '/v1/window-installation'
      path: '/v1/window-installation'
      fullPath: '/v1/window-installation'
      preLoaderRoute: typeof V1WindowInstallationLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/work': {
      id: '/v1/work'
      path: '/v1/work'
      fullPath: '/v1/work'
      preLoaderRoute: typeof V1WorkLazyImport
      parentRoute: typeof rootRoute
    }
    '/v1/': {
      id: '/v1/'
      path: '/v1'
      fullPath: '/v1'
      preLoaderRoute: typeof V1IndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/v1/about': typeof V1AboutLazyRoute
  '/v1/branding': typeof V1BrandingLazyRoute
  '/v1/contact': typeof V1ContactLazyRoute
  '/v1/digital-rendering': typeof V1DigitalRenderingLazyRoute
  '/v1/hand-rendering': typeof V1HandRenderingLazyRoute
  '/v1/resume': typeof V1ResumeLazyRoute
  '/v1/set-design': typeof V1SetDesignLazyRoute
  '/v1/styling': typeof V1StylingLazyRoute
  '/v1/window-installation': typeof V1WindowInstallationLazyRoute
  '/v1/work': typeof V1WorkLazyRoute
  '/v1': typeof V1IndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/v1/about': typeof V1AboutLazyRoute
  '/v1/branding': typeof V1BrandingLazyRoute
  '/v1/contact': typeof V1ContactLazyRoute
  '/v1/digital-rendering': typeof V1DigitalRenderingLazyRoute
  '/v1/hand-rendering': typeof V1HandRenderingLazyRoute
  '/v1/resume': typeof V1ResumeLazyRoute
  '/v1/set-design': typeof V1SetDesignLazyRoute
  '/v1/styling': typeof V1StylingLazyRoute
  '/v1/window-installation': typeof V1WindowInstallationLazyRoute
  '/v1/work': typeof V1WorkLazyRoute
  '/v1': typeof V1IndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/v1/about': typeof V1AboutLazyRoute
  '/v1/branding': typeof V1BrandingLazyRoute
  '/v1/contact': typeof V1ContactLazyRoute
  '/v1/digital-rendering': typeof V1DigitalRenderingLazyRoute
  '/v1/hand-rendering': typeof V1HandRenderingLazyRoute
  '/v1/resume': typeof V1ResumeLazyRoute
  '/v1/set-design': typeof V1SetDesignLazyRoute
  '/v1/styling': typeof V1StylingLazyRoute
  '/v1/window-installation': typeof V1WindowInstallationLazyRoute
  '/v1/work': typeof V1WorkLazyRoute
  '/v1/': typeof V1IndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/v1/about'
    | '/v1/branding'
    | '/v1/contact'
    | '/v1/digital-rendering'
    | '/v1/hand-rendering'
    | '/v1/resume'
    | '/v1/set-design'
    | '/v1/styling'
    | '/v1/window-installation'
    | '/v1/work'
    | '/v1'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/v1/about'
    | '/v1/branding'
    | '/v1/contact'
    | '/v1/digital-rendering'
    | '/v1/hand-rendering'
    | '/v1/resume'
    | '/v1/set-design'
    | '/v1/styling'
    | '/v1/window-installation'
    | '/v1/work'
    | '/v1'
  id:
    | '__root__'
    | '/'
    | '/v1/about'
    | '/v1/branding'
    | '/v1/contact'
    | '/v1/digital-rendering'
    | '/v1/hand-rendering'
    | '/v1/resume'
    | '/v1/set-design'
    | '/v1/styling'
    | '/v1/window-installation'
    | '/v1/work'
    | '/v1/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  V1AboutLazyRoute: typeof V1AboutLazyRoute
  V1BrandingLazyRoute: typeof V1BrandingLazyRoute
  V1ContactLazyRoute: typeof V1ContactLazyRoute
  V1DigitalRenderingLazyRoute: typeof V1DigitalRenderingLazyRoute
  V1HandRenderingLazyRoute: typeof V1HandRenderingLazyRoute
  V1ResumeLazyRoute: typeof V1ResumeLazyRoute
  V1SetDesignLazyRoute: typeof V1SetDesignLazyRoute
  V1StylingLazyRoute: typeof V1StylingLazyRoute
  V1WindowInstallationLazyRoute: typeof V1WindowInstallationLazyRoute
  V1WorkLazyRoute: typeof V1WorkLazyRoute
  V1IndexLazyRoute: typeof V1IndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  V1AboutLazyRoute: V1AboutLazyRoute,
  V1BrandingLazyRoute: V1BrandingLazyRoute,
  V1ContactLazyRoute: V1ContactLazyRoute,
  V1DigitalRenderingLazyRoute: V1DigitalRenderingLazyRoute,
  V1HandRenderingLazyRoute: V1HandRenderingLazyRoute,
  V1ResumeLazyRoute: V1ResumeLazyRoute,
  V1SetDesignLazyRoute: V1SetDesignLazyRoute,
  V1StylingLazyRoute: V1StylingLazyRoute,
  V1WindowInstallationLazyRoute: V1WindowInstallationLazyRoute,
  V1WorkLazyRoute: V1WorkLazyRoute,
  V1IndexLazyRoute: V1IndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/v1/about",
        "/v1/branding",
        "/v1/contact",
        "/v1/digital-rendering",
        "/v1/hand-rendering",
        "/v1/resume",
        "/v1/set-design",
        "/v1/styling",
        "/v1/window-installation",
        "/v1/work",
        "/v1/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/v1/about": {
      "filePath": "v1/about.lazy.tsx"
    },
    "/v1/branding": {
      "filePath": "v1/branding.lazy.tsx"
    },
    "/v1/contact": {
      "filePath": "v1/contact.lazy.tsx"
    },
    "/v1/digital-rendering": {
      "filePath": "v1/digital-rendering.lazy.tsx"
    },
    "/v1/hand-rendering": {
      "filePath": "v1/hand-rendering.lazy.tsx"
    },
    "/v1/resume": {
      "filePath": "v1/resume.lazy.tsx"
    },
    "/v1/set-design": {
      "filePath": "v1/set-design.lazy.tsx"
    },
    "/v1/styling": {
      "filePath": "v1/styling.lazy.tsx"
    },
    "/v1/window-installation": {
      "filePath": "v1/window-installation.lazy.tsx"
    },
    "/v1/work": {
      "filePath": "v1/work.lazy.tsx"
    },
    "/v1/": {
      "filePath": "v1/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
