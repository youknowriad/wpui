import {
  __experimentalVStack as VStack,
  __experimentalHStack as HStack,
  __experimentalText as Text,
  Button,
} from '@wordpress/components'


export default function HeroSectionPreview() {
  return (
    <VStack spacing={4} alignment="center" style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#f0f4f8', borderRadius: '0.375rem' }}>
      <Text size="title">
        Beautiful WordPress UI
      </Text>
      <Text style={{ maxWidth: '300px', color: '#4b5563' }}>
        Build stunning interfaces with WordPress components
      </Text>
      <HStack spacing={2} alignment="center">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </HStack>
    </VStack>
  )
}