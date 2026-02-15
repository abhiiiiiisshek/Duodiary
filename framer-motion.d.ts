declare module 'framer-motion' {
  import * as React from 'react'

  // Temporary compatibility shim for projects using React/Next "latest"
  // with framer-motion v11 type definitions.
  export const motion: any
  export const AnimatePresence: React.ComponentType<any>
}
