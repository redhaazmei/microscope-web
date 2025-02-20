/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RecommendationImport } from './routes/recommendation'
import { Route as LoanImport } from './routes/loan'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const RecommendationRoute = RecommendationImport.update({
  id: '/recommendation',
  path: '/recommendation',
  getParentRoute: () => rootRoute,
} as any)

const LoanRoute = LoanImport.update({
  id: '/loan',
  path: '/loan',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/loan': {
      id: '/loan'
      path: '/loan'
      fullPath: '/loan'
      preLoaderRoute: typeof LoanImport
      parentRoute: typeof rootRoute
    }
    '/recommendation': {
      id: '/recommendation'
      path: '/recommendation'
      fullPath: '/recommendation'
      preLoaderRoute: typeof RecommendationImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/loan': typeof LoanRoute
  '/recommendation': typeof RecommendationRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/loan': typeof LoanRoute
  '/recommendation': typeof RecommendationRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/loan': typeof LoanRoute
  '/recommendation': typeof RecommendationRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/loan' | '/recommendation'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/loan' | '/recommendation'
  id: '__root__' | '/' | '/loan' | '/recommendation'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoanRoute: typeof LoanRoute
  RecommendationRoute: typeof RecommendationRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoanRoute: LoanRoute,
  RecommendationRoute: RecommendationRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/loan",
        "/recommendation"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/loan": {
      "filePath": "loan.tsx"
    },
    "/recommendation": {
      "filePath": "recommendation.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
