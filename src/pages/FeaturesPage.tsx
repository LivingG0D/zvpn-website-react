import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Eye, 
  Server,
  Smartphone,
  Wifi,
  Download,
  Upload,
  MonitorSpeaker,
  Router
} from 'lucide-react'

const mainFeatures = [
  {
    icon: Shield,
    title: 'Military-Grade Encryption',
    description: 'AES-256 encryption with perfect forward secrecy ensures your data remains secure.',
    features: ['AES-256 encryption', 'OpenVPN & WireGuard protocols', 'Perfect forward secrecy', 'DNS leak protection']
  },
  {
    icon: Zap,
    title: 'Ultra-Fast Speeds',
    description: 'Optimized servers and cutting-edge technology for maximum performance.',
    features: ['Optimized server network', 'Unlimited bandwidth', 'No speed throttling', 'Smart routing']
  },
  {
    icon: Globe,
    title: 'Global Server Network',
    description: 'Access content worldwide with our strategically located servers.',
    features: ['1000+ servers', '50+ countries', '75+ cities', 'P2P optimized servers']
  },
  {
    icon: Lock,
    title: 'Zero-Logs Policy',
    description: 'Independently audited no-logs policy ensures complete privacy.',
    features: ['No activity logs', 'No connection logs', 'Third-party audited', 'Based in privacy-friendly jurisdiction']
  },
  {
    icon: Eye,
    title: 'Advanced Privacy',
    description: 'Multiple privacy features to keep you anonymous online.',
    features: ['Ad & tracker blocking', 'Malware protection', 'Kill switch', 'Split tunneling']
  },
  {
    icon: Server,
    title: 'Multi-Platform Support',
    description: 'Native apps for all your devices with simultaneous connections.',
    features: ['Windows, Mac, Linux', 'iOS & Android', '10 simultaneous connections', 'Router support']
  }
]

const additionalFeatures = [
  { icon: Smartphone, title: 'Mobile Apps', description: 'Native apps for iOS and Android' },
  { icon: Wifi, title: 'Public WiFi Protection', description: 'Stay secure on public networks' },
  { icon: Download, title: 'P2P Support', description: 'Optimized for torrenting and file sharing' },
  { icon: Upload, title: 'Unlimited Bandwidth', description: 'No data caps or speed limits' },
  { icon: MonitorSpeaker, title: 'Streaming Optimized', description: 'Unblock Netflix, Hulu, and more' },
  { icon: Router, title: 'Router Support', description: 'Protect your entire home network' }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-16 px-4 bg-slate-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/50">
          🔒 Enterprise-Grade Security
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Powerful Features for
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Complete Privacy
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          zVPN combines cutting-edge technology with user-friendly design to provide 
          comprehensive online privacy and security protection.
        </p>
      </div>

      {/* Main Features */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Additional Features Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need for 
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Complete Protection</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Security Standards */}
      <div className="max-w-4xl mx-auto mb-20">
        <Card className="bg-gradient-to-r from-slate-900/50 to-blue-900/50 border-border/50">
          <CardContent className="pt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Industry-Leading Security Standards</h3>
              <p className="text-muted-foreground mb-6">
                zVPN meets the highest security standards and has been independently audited
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">AES-256</div>
                  <div className="text-sm text-muted-foreground">Encryption</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">Zero</div>
                  <div className="text-sm text-muted-foreground">Logs Policy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Ultimate Privacy?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Start your free trial today and see why millions trust zVPN
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            asChild
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
          >
            <Link to="/pricing">
              Start Free Trial
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/servers">
              View Server Locations
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
