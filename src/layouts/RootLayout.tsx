import { Outlet } from 'react-router-dom'
import { __experimentalVStack as VStack } from '@wordpress/components'

// Import components
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default function RootLayout() {
  return (
    <VStack spacing={4} style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <main style={{ flex: 1, width: '100%', margin: '0 auto', padding: '0 2rem' }}>
        <Outlet />
      </main>
      <SiteFooter />
    </VStack>
  )
}