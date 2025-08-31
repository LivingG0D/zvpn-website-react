import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Shield,
	Zap,
	Globe,
	Lock,
	Eye,
	Server,
	Star,
	ArrowRight,
	Play,
} from "lucide-react";

const features = [
	{
		icon: Shield,
		title: "Military-Grade Encryption",
		description: "AES-256 encryption keeps your data safe from prying eyes",
	},
	{
		icon: Zap,
		title: "Lightning Fast",
		description: "Optimized servers for maximum speed and performance",
	},
	{
		icon: Globe,
		title: "50+ Countries",
		description: "Access content from anywhere with our global server network",
	},
	{
		icon: Lock,
		title: "No-Logs Policy",
		description: "We never track, store, or share your browsing data",
	},
	{
		icon: Eye,
		title: "Ad & Tracker Blocking",
		description: "Built-in protection against ads and malicious trackers",
	},
	{
		icon: Server,
		title: "24/7 Support",
		description: "Round-the-clock customer support whenever you need help",
	},
];

const stats = [
	{ value: "10M+", label: "Active Users" },
	{ value: "50+", label: "Countries" },
	{ value: "1000+", label: "Servers" },
	{ value: "99.9%", label: "Uptime" },
];

const testimonials = [
	{
		content:
			"zVPN has been a game-changer for my online privacy. The speed is incredible and I feel completely secure.",
		author: "Sarah Chen",
		role: "Digital Nomad",
		rating: 5,
	},
	{
		content:
			"As a journalist, protecting my sources is crucial. zVPN's no-logs policy gives me peace of mind.",
		author: "Marcus Rodriguez",
		role: "Investigative Journalist",
		rating: 5,
	},
	{
		content:
			"I can finally access my favorite shows while traveling. The global server network is amazing!",
		author: "Emily Johnson",
		role: "Travel Blogger",
		rating: 5,
	},
];

export default function HomePage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative py-24 px-4 text-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
				<div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
				<div className="relative max-w-4xl mx-auto">
					<Badge
						variant="secondary"
						className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/50"
					>
						✨ Now with 50% faster speeds
					</Badge>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
						Your Privacy,
						<br />
						<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							Secured
						</span>
					</h1>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Experience the internet without limits. zVPN provides military-grade
						security, lightning-fast speeds, and access to content worldwide.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<Button
							size="lg"
							asChild
							className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/25"
						>
							<Link to="/pricing">
								Get Started Free
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-blue-400 text-blue-100 hover:bg-blue-500/20"
						>
							<Play className="mr-2 h-4 w-4" />
							Watch Demo
						</Button>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
							>
								<div className="text-2xl md:text-3xl font-bold text-blue-300">
									{stat.value}
								</div>
								<div className="text-sm text-blue-200">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Why Choose{" "}
							<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
								zVPN
							</span>
							?
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Built with cutting-edge technology to provide you with the best
							online experience
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<Card
									key={index}
									className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105"
								>
									<CardHeader>
										<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
											<Icon className="h-6 w-6 text-white" />
										</div>
										<CardTitle className="text-xl">{feature.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-base">
											{feature.description}
										</CardDescription>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-24 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Trusted by{" "}
							<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
								Millions
							</span>
						</h2>
						<p className="text-xl text-muted-foreground">
							See what our users have to say about their zVPN experience
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<Card
								key={index}
								className="bg-card/80 backdrop-blur-sm border-border/50"
							>
								<CardContent className="pt-6">
									<div className="flex mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="h-5 w-5 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<p className="text-muted-foreground mb-4">
										"{testimonial.content}"
									</p>
									<div>
										<p className="font-semibold">{testimonial.author}</p>
										<p className="text-sm text-muted-foreground">
											{testimonial.role}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 px-4 text-center">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Ready to Get Started?
					</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Join millions of users who trust zVPN for their online privacy and
						security
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							asChild
							className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
						>
							<Link to="/pricing">Start Free Trial</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							asChild
						>
							<Link to="/features">Learn More</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
