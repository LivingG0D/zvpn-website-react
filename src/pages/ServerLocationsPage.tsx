import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router'
import { Search, MapPin, Zap, Shield, Users, Server } from 'lucide-react'

const serverLocations = [
  {
    region: 'North America',
    countries: [
      { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Dallas'], servers: 450, flag: '🇺🇸' },
      { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal'], servers: 85, flag: '🇨🇦' },
      { name: 'Mexico', cities: ['Mexico City', 'Guadalajara'], servers: 25, flag: '🇲🇽' }
    ]
  },
  {
    region: 'Europe',
    countries: [
      { name: 'United Kingdom', cities: ['London', 'Manchester', 'Edinburgh'], servers: 120, flag: '🇬🇧' },
      { name: 'Germany', cities: ['Berlin', 'Frankfurt', 'Munich'], servers: 95, flag: '🇩🇪' },
      { name: 'France', cities: ['Paris', 'Lyon', 'Marseille'], servers: 75, flag: '🇫🇷' },
      { name: 'Netherlands', cities: ['Amsterdam', 'Rotterdam'], servers: 60, flag: '🇳🇱' },
      { name: 'Switzerland', cities: ['Zurich', 'Geneva'], servers: 45, flag: '🇨🇭' },
      { name: 'Sweden', cities: ['Stockholm', 'Gothenburg'], servers: 40, flag: '🇸🇪' },
      { name: 'Norway', cities: ['Oslo', 'Bergen'], servers: 35, flag: '🇳🇴' },
      { name: 'Spain', cities: ['Madrid', 'Barcelona'], servers: 50, flag: '🇪🇸' },
      { name: 'Italy', cities: ['Rome', 'Milan'], servers: 45, flag: '🇮🇹' }
    ]
  },
  {
    region: 'Asia Pacific',
    countries: [
      { name: 'Japan', cities: ['Tokyo', 'Osaka', 'Nagoya'], servers: 80, flag: '🇯🇵' },
      { name: 'Singapore', cities: ['Singapore'], servers: 65, flag: '🇸🇬' },
      { name: 'Hong Kong', cities: ['Hong Kong'], servers: 55, flag: '🇭🇰' },
      { name: 'Australia', cities: ['Sydney', 'Melbourne', 'Perth'], servers: 70, flag: '🇦🇺' },
      { name: 'South Korea', cities: ['Seoul', 'Busan'], servers: 45, flag: '🇰🇷' },
      { name: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore'], servers: 60, flag: '🇮🇳' },
      { name: 'Taiwan', cities: ['Taipei'], servers: 30, flag: '🇹🇼' }
    ]
  },
  {
    region: 'South America',
    countries: [
      { name: 'Brazil', cities: ['São Paulo', 'Rio de Janeiro'], servers: 40, flag: '🇧🇷' },
      { name: 'Argentina', cities: ['Buenos Aires'], servers: 25, flag: '🇦🇷' },
      { name: 'Chile', cities: ['Santiago'], servers: 20, flag: '🇨🇱' }
    ]
  },
  {
    region: 'Middle East & Africa',
    countries: [
      { name: 'Israel', cities: ['Tel Aviv'], servers: 25, flag: '🇮🇱' },
      { name: 'South Africa', cities: ['Cape Town', 'Johannesburg'], servers: 30, flag: '🇿🇦' },
      { name: 'UAE', cities: ['Dubai'], servers: 35, flag: '🇦🇪' }
    ]
  }
]

const features = [
  {
    icon: Zap,
    title: 'Optimized Speed',
    description: 'Each server is optimized for maximum speed and performance'
  },
  {
    icon: Shield,
    title: 'Secure Connections',
    description: 'All servers use military-grade encryption and security protocols'
  },
  {
    icon: Users,
    title: 'Load Balancing',
    description: 'Intelligent load balancing ensures optimal server performance'
  },
  {
    icon: Server,
    title: 'Regular Updates',
    description: 'Servers are regularly updated and maintained for reliability'
  }
]

export default function ServerLocationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const filteredLocations = serverLocations
    .map(region => ({
      ...region,
      countries: region.countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.cities.some(city => city.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }))
    .filter(region => 
      region.countries.length > 0 && 
      (selectedRegion === null || region.region === selectedRegion)
    )

  const totalServers = serverLocations.reduce((total, region) => 
    total + region.countries.reduce((regionTotal, country) => regionTotal + country.servers, 0), 0
  )

  const totalCountries = serverLocations.reduce((total, region) => total + region.countries.length, 0)

  return (
    <div className="min-h-screen py-16 px-4 bg-slate-900">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/50">
          🌍 Global Network
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Server Locations
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Worldwide
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect to any of our {totalServers}+ servers across {totalCountries} countries for fast, 
          secure, and reliable VPN connections.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400">{totalServers}+</div>
              <div className="text-sm text-muted-foreground">Servers</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400">{totalCountries}</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400">10Gbps</div>
              <div className="text-sm text-muted-foreground">Bandwidth</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search countries or cities..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedRegion === null ? "default" : "outline"}
              onClick={() => setSelectedRegion(null)}
              size="sm"
            >
              All Regions
            </Button>
            {serverLocations.map((region) => (
              <Button
                key={region.region}
                variant={selectedRegion === region.region ? "default" : "outline"}
                onClick={() => setSelectedRegion(region.region)}
                size="sm"
              >
                {region.region}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Server Locations */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="space-y-8">
          {filteredLocations.map((region) => (
            <div key={region.region}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-400" />
                {region.region}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.countries.map((country) => (
                  <Card key={country.name} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <CardTitle className="text-lg">{country.name}</CardTitle>
                          <CardDescription>
                            {country.servers} servers
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Cities:</div>
                        <div className="flex flex-wrap gap-1">
                          {country.cities.map((city) => (
                            <Badge key={city} variant="secondary" className="text-xs">
                              {city}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Server <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Connect?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Access our global network of servers with any plan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            asChild
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
          >
            <Link to="/pricing">
              Choose Your Plan
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/features">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
