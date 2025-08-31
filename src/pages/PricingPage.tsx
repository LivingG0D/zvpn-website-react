import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { Check, Star, Zap, Shield, Globe } from 'lucide-react'

interface PlanFeature {
  name: string
  description: string
  price: number
  originalPrice: number
  yearlyPrice?: number
  features: string[]
  popular: boolean
  icon: typeof Shield | typeof Star | typeof Zap
}

const plans: { monthly: PlanFeature[], yearly: PlanFeature[] } = {
  monthly: [
    {
      name: 'Basic',
      description: 'Perfect for personal use',
      price: 9.99,
      originalPrice: 12.99,
      features: [
        '5 device connections',
        '25+ countries',
        'Basic encryption',
        'Email support',
        'Ad blocking',
        'Basic streaming support'
      ],
      popular: false,
      icon: Shield
    },
    {
      name: 'Premium',
      description: 'Most popular choice',
      price: 7.99,
      originalPrice: 11.99,
      features: [
        '10 device connections',
        '50+ countries',
        'Advanced encryption',
        '24/7 priority support',
        'Advanced ad & tracker blocking',
        'Streaming optimized',
        'P2P support',
        'Kill switch'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Ultimate',
      description: 'For power users',
      price: 12.99,
      originalPrice: 19.99,
      features: [
        'Unlimited devices',
        '50+ countries',
        'Military-grade encryption',
        'Dedicated support manager',
        'Advanced privacy features',
        'All streaming platforms',
        'Dedicated IP option',
        'Advanced kill switch',
        'Split tunneling',
        'Static IP addresses'
      ],
      popular: false,
      icon: Zap
    }
  ],
  yearly: [
    {
      name: 'Basic',
      description: 'Perfect for personal use',
      price: 4.99,
      originalPrice: 12.99,
      yearlyPrice: 59.88,
      features: [
        '5 device connections',
        '25+ countries',
        'Basic encryption',
        'Email support',
        'Ad blocking',
        'Basic streaming support'
      ],
      popular: false,
      icon: Shield
    },
    {
      name: 'Premium',
      description: 'Most popular choice',
      price: 3.99,
      originalPrice: 11.99,
      yearlyPrice: 47.88,
      features: [
        '10 device connections',
        '50+ countries',
        'Advanced encryption',
        '24/7 priority support',
        'Advanced ad & tracker blocking',
        'Streaming optimized',
        'P2P support',
        'Kill switch'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Ultimate',
      description: 'For power users',
      price: 6.99,
      originalPrice: 19.99,
      yearlyPrice: 83.88,
      features: [
        'Unlimited devices',
        '50+ countries',
        'Military-grade encryption',
        'Dedicated support manager',
        'Advanced privacy features',
        'All streaming platforms',
        'Dedicated IP option',
        'Advanced kill switch',
        'Split tunneling',
        'Static IP addresses'
      ],
      popular: false,
      icon: Zap
    }
  ]
}

const guarantees = [
  {
    icon: Shield,
    title: '30-Day Money Back',
    description: 'Full refund if not satisfied'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: '1000+ servers worldwide'
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Ready in under 5 minutes'
  }
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')
  const currentPlans = plans[billingCycle]

  const calculateSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const yearlyCost = monthlyPrice * 12
    const savings = ((yearlyCost - yearlyPrice) / yearlyCost) * 100
    return Math.round(savings)
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-slate-900">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-200 border-green-500/50">
          💰 Limited Time: 50% Off First Year
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Simple, Transparent
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Pricing
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that's right for you. All plans include our 30-day money-back guarantee.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="max-w-sm mx-auto mb-12">
        <div className="bg-muted/50 p-1 rounded-lg grid grid-cols-2">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              billingCycle === 'monthly'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all relative ${
              billingCycle === 'yearly'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Yearly
            {billingCycle === 'yearly' && (
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
                Save 67%
              </Badge>
            )}
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Card 
                key={index} 
                className={`relative ${
                  plan.popular 
                    ? 'border-blue-500 bg-card/80 backdrop-blur-sm scale-105 shadow-lg shadow-blue-500/25' 
                    : 'bg-card/50 backdrop-blur-sm border-border/50'
                } transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-4">
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-4xl font-bold">
                        ${plan.price}
                      </span>
                      <div className="text-left">
                        <div className="text-sm text-muted-foreground line-through">
                          ${plan.originalPrice}
                        </div>
                        <div className="text-sm text-muted-foreground">/month</div>
                      </div>
                    </div>
                    {billingCycle === 'yearly' && plan.yearlyPrice && (
                      <div className="text-sm text-muted-foreground mt-1">
                        ${plan.yearlyPrice} billed annually
                      </div>
                    )}
                    {billingCycle === 'yearly' && plan.yearlyPrice && (
                      <Badge variant="secondary" className="mt-2 bg-green-500/20 text-green-400">
                        Save {calculateSavings(plan.originalPrice, plan.yearlyPrice)}%
                      </Badge>
                    )}
                  </div>

                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/dashboard">
                      {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Guarantees */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Risk-Free with Our Guarantees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{guarantee.title}</h3>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Can I change my plan anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, Apple Pay, Google Pay, and cryptocurrency for maximum privacy.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Is there really a money-back guarantee?</h3>
              <p className="text-muted-foreground">
                Absolutely! We offer a full 30-day money-back guarantee with no questions asked. If you're not satisfied, we'll refund your payment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join millions of users who trust zVPN for their online privacy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            asChild
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
          >
            <Link to="/dashboard">
              Start Your Free Trial
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
