// mdx-components.tsx
// This is required in the /app folder for MDX to work with the App Router

import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,    
    ...components,
  }
}