import { Link } from 'react-router-dom'
import { 
  __experimentalVStack as VStack, 
  __experimentalHStack as HStack, 
  __experimentalText as Text, 
  Button, 
  Card,
  CardBody,
  CardHeader,
  CardFooter
} from '@wordpress/components'

export default function HomePage() {
  return (
    <VStack spacing={16} style={{ padding: '2rem 0' }}>
      {/* Hero Section */}
      <VStack spacing={6} alignment="center" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <Text variant="title.large" style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1 }}>
          WordPress Components Showcase
        </Text>
        <Text variant="body" style={{ fontSize: '1.25rem', color: '#4b5563', maxWidth: '600px' }}>
          A collection of UI examples built with @wordpress/components.
          Beautifully designed patterns and examples for building WordPress interfaces.
        </Text>
        <HStack spacing={4}>
          <Link to="/components">
            <Button variant="primary" size="large">Browse Components</Button>
          </Link>
          <Link to="/examples">
            <Button variant="secondary" size="large">View Examples</Button>
          </Link>
        </HStack>
      </VStack>

      {/* Features Section */}
      <VStack spacing={8}>
        <Text variant="title.medium" style={{ textAlign: 'center' }}>
          Features
        </Text>
        
        <HStack spacing={8} justify="center" wrap>
          {[
            {
              title: 'WordPress Components',
              description: 'Built using the official @wordpress/components library used in WordPress core.'
            },
            {
              title: 'Ready-to-Use Examples',
              description: 'Copy and paste examples for common UI patterns and components.'
            },
            {
              title: 'TypeScript Support',
              description: 'All examples are written in TypeScript for better type safety and developer experience.'
            }
          ].map((feature, index) => (
            <Card key={index} size="small" style={{ width: '300px' }}>
              <CardHeader>
                <Text variant="title.small">{feature.title}</Text>
              </CardHeader>
              <CardBody>
                <Text variant="body">{feature.description}</Text>
              </CardBody>
            </Card>
          ))}
        </HStack>
      </VStack>

      {/* Examples Preview */}
      <VStack spacing={8}>
        <Text variant="title.medium" style={{ textAlign: 'center' }}>
          Example Patterns
        </Text>
        
        <HStack spacing={8} justify="center" wrap>
          {[
            {
              title: 'Authentication Form',
              description: 'Login/signup form with validation and social authentication.'
            },
            {
              title: 'Dashboard',
              description: 'Admin dashboard layout with sidebar navigation and card stats.'
            },
            {
              title: 'Settings Page',
              description: 'User settings page with form controls and sections.'
            }
          ].map((example, index) => (
            <Card key={index} size="small" style={{ width: '300px' }}>
              <CardHeader>
                <Text variant="title.small">{example.title}</Text>
              </CardHeader>
              <CardBody>
                <Text variant="body">{example.description}</Text>
              </CardBody>
              <CardFooter>
                <Link to={`/examples/${example.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="link">View Example →</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </HStack>
      </VStack>
    </VStack>
  )
}