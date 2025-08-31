import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
	Shield,
	Users,
	Globe,
	Award,
	Heart,
	Lightbulb,
	Target,
	Zap,
} from "lucide-react";

const values = [
	{
		icon: Shield,
		title: "Privacy First",
		description:
			"We believe privacy is a fundamental human right. Everything we do is designed to protect your digital privacy.",
	},
	{
		icon: Heart,
		title: "User-Centric",
		description:
			"Our users are at the center of everything we do. We build features that matter to you.",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		description:
			"We constantly innovate to stay ahead of threats and provide cutting-edge security solutions.",
	},
	{
		icon: Globe,
		title: "Global Access",
		description:
			"We believe everyone should have access to a free and open internet, regardless of location.",
	},
];

const team = [
	{
		name: "Sarah Chen",
		role: "CEO & Co-Founder",
		bio: "Former cybersecurity engineer with 15+ years of experience in online privacy and digital rights.",
		image: "👩‍💼",
	},
	{
		name: "Marcus Rodriguez",
		role: "CTO & Co-Founder",
		bio: "Experienced software architect specializing in secure networking and encryption technologies.",
		image: "👨‍💻",
	},
	{
		name: "Emily Johnson",
		role: "VP of Security",
		bio: "Expert in cybersecurity with a background in protecting critical infrastructure and user data.",
		image: "👩‍🔬",
	},
	{
		name: "David Kim",
		role: "Head of Engineering",
		bio: "Full-stack engineer passionate about building scalable, secure, and user-friendly applications.",
		image: "👨‍🔧",
	},
];

const milestones = [
	{
		year: "2019",
		title: "Company Founded",
		description:
			"zVPN was founded with a mission to make online privacy accessible to everyone.",
	},
	{
		year: "2020",
		title: "1M Users",
		description:
			"Reached our first million users with servers across 25 countries.",
	},
	{
		year: "2021",
		title: "No-Logs Audit",
		description:
			"Completed independent security audit confirming our zero-logs policy.",
	},
	{
		year: "2022",
		title: "Global Expansion",
		description: "Expanded to 50+ countries with 1000+ servers worldwide.",
	},
	{
		year: "2023",
		title: "10M+ Users",
		description:
			"Surpassed 10 million users trusting zVPN for their online privacy.",
	},
	{
		year: "2024",
		title: "Next Generation",
		description: "Launched WireGuard protocol and advanced privacy features.",
	},
];

const stats = [
	{ value: "10M+", label: "Active Users", icon: Users },
	{ value: "50+", label: "Countries", icon: Globe },
	{ value: "99.9%", label: "Uptime", icon: Zap },
	{ value: "5", label: "Years Strong", icon: Award },
];

export default function AboutPage() {
	return (
		<div className="min-h-screen py-16 px-4 bg-slate-900">
			{/* Header */}
			<div className="max-w-4xl mx-auto text-center mb-16">
				<Badge
					variant="secondary"
					className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/50"
				>
					🏢 About zVPN
				</Badge>
				<h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
					Protecting Privacy
					<br />
					<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
						Since 2019
					</span>
				</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					We're on a mission to make online privacy and security accessible to
					everyone. Our team of security experts and privacy advocates work
					tirelessly to protect your digital rights.
				</p>
			</div>

			{/* Stats */}
			<div className="max-w-4xl mx-auto mb-20">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<Card
								key={index}
								className="bg-card/50 backdrop-blur-sm border-border/50"
							>
								<CardContent className="pt-6">
									<Icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
									<div className="text-3xl font-bold text-blue-400">
										{stat.value}
									</div>
									<div className="text-sm text-muted-foreground">
										{stat.label}
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>

			{/* Mission Statement */}
			<div className="max-w-4xl mx-auto mb-20">
				<Card className="bg-gradient-to-r from-slate-900/50 to-blue-900/50 border-border/50">
					<CardContent className="pt-8 text-center">
						<Target className="h-12 w-12 text-blue-400 mx-auto mb-6" />
						<h2 className="text-3xl font-bold mb-4">Our Mission</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							To provide everyone with the tools they need to protect their
							online privacy, access information freely, and secure their
							digital lives. We believe that privacy is not a luxury, but a
							fundamental right that should be accessible to all.
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Values */}
			<div className="max-w-7xl mx-auto mb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Our{" "}
					<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
						Values
					</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{values.map((value, index) => {
						const Icon = value.icon;
						return (
							<Card
								key={index}
								className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300"
							>
								<CardHeader>
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
											<Icon className="h-6 w-6 text-white" />
										</div>
										<CardTitle className="text-xl">{value.title}</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base">
										{value.description}
									</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>

			{/* Timeline */}
			<div className="max-w-4xl mx-auto mb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Our{" "}
					<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
						Journey
					</span>
				</h2>

				<div className="space-y-8">
					{milestones.map((milestone, index) => (
						<div
							key={index}
							className="flex gap-6"
						>
							<div className="flex-shrink-0">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
									<span className="text-white font-bold text-sm">
										{milestone.year}
									</span>
								</div>
							</div>
							<Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50">
								<CardContent className="pt-6">
									<h3 className="font-semibold text-lg mb-2">
										{milestone.title}
									</h3>
									<p className="text-muted-foreground">
										{milestone.description}
									</p>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>

			{/* Team */}
			<div className="max-w-7xl mx-auto mb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					Meet the{" "}
					<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
						Team
					</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{team.map((member, index) => (
						<Card
							key={index}
							className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300"
						>
							<CardContent className="pt-6">
								<div className="flex items-start gap-4">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
										{member.image}
									</div>
									<div className="flex-1">
										<h3 className="font-semibold text-lg">{member.name}</h3>
										<p className="text-blue-400 mb-2">{member.role}</p>
										<p className="text-sm text-muted-foreground">
											{member.bio}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Security & Audits */}
			<div className="max-w-4xl mx-auto mb-20">
				<Card className="bg-card/50 backdrop-blur-sm border-border/50">
					<CardHeader className="text-center">
						<Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
						<CardTitle className="text-2xl">Security & Transparency</CardTitle>
						<CardDescription className="text-base">
							We're committed to transparency and regularly undergo independent
							security audits
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="text-center">
								<h3 className="font-semibold mb-2">No-Logs Audit</h3>
								<p className="text-sm text-muted-foreground">
									Independently verified by leading cybersecurity firms
								</p>
							</div>
							<div className="text-center">
								<h3 className="font-semibold mb-2">Open Source</h3>
								<p className="text-sm text-muted-foreground">
									Core security components are open source and auditable
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* CTA Section */}
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Join Our Mission
				</h2>
				<p className="text-xl text-muted-foreground mb-8">
					Be part of the movement to protect online privacy for everyone
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						size="lg"
						asChild
						className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
					>
						<Link to="/pricing">Start Protecting Your Privacy</Link>
					</Button>
					<Button
						size="lg"
						variant="outline"
						asChild
					>
						<Link to="/contact">Contact Us</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
