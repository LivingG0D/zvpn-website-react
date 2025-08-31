import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Mail,
	MessageSquare,
	Phone,
	Clock,
	MapPin,
	Send,
	HelpCircle,
	Shield,
	Zap,
} from "lucide-react";

const contactMethods = [
	{
		icon: MessageSquare,
		title: "Live Chat",
		description: "Get instant help from our support team",
		detail: "Available 24/7",
		action: "Start Chat",
	},
	{
		icon: Mail,
		title: "Email Support",
		description: "Send us a detailed message",
		detail: "support@zvpn.com",
		action: "Send Email",
	},
	{
		icon: Phone,
		title: "Phone Support",
		description: "Speak directly with our team",
		detail: "+1 (555) 123-4567",
		action: "Call Now",
	},
];

const supportCategories = [
	{
		icon: HelpCircle,
		title: "General Questions",
		description: "Account, billing, and general inquiries",
	},
	{
		icon: Shield,
		title: "Technical Support",
		description: "Connection issues and troubleshooting",
	},
	{
		icon: Zap,
		title: "Bug Reports",
		description: "Report issues with our apps or service",
	},
];

const officeLocations = [
	{
		city: "San Francisco",
		address: "123 Tech Street, Suite 100\nSan Francisco, CA 94105",
		country: "🇺🇸",
	},
	{
		city: "London",
		address: "456 Privacy Lane, Floor 5\nLondon, EC2A 4DP",
		country: "🇬🇧",
	},
	{
		city: "Singapore",
		address: "789 Innovation Hub, Level 12\nSingapore 018956",
		country: "🇸🇬",
	},
];

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		category: "General Questions",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
		// Reset form
		setFormData({
			name: "",
			email: "",
			subject: "",
			category: "General Questions",
			message: "",
		});
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="min-h-screen py-16 px-4 bg-slate-900">
			{/* Header */}
			<div className="max-w-4xl mx-auto text-center mb-16">
				<Badge
					variant="secondary"
					className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/50"
				>
					💬 Get in Touch
				</Badge>
				<h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
					Contact
					<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
						{" "}
						Us
					</span>
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Have questions? Need help? Our support team is here 24/7 to assist you
					with anything you need.
				</p>
			</div>

			{/* Contact Methods */}
			<div className="max-w-7xl mx-auto mb-16">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
					How Can We Help?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{contactMethods.map((method, index) => {
						const Icon = method.icon;
						return (
							<Card
								key={index}
								className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105"
							>
								<CardHeader className="text-center">
									<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
										<Icon className="h-6 w-6 text-white" />
									</div>
									<CardTitle>{method.title}</CardTitle>
									<CardDescription>{method.description}</CardDescription>
								</CardHeader>
								<CardContent className="text-center">
									<p className="text-blue-400 font-medium mb-4">
										{method.detail}
									</p>
									<Button
										className="w-full"
										variant="outline"
									>
										{method.action}
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>

			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
				{/* Contact Form */}
				<Card className="bg-card/50 backdrop-blur-sm border-border/50">
					<CardHeader>
						<CardTitle className="text-2xl">Send us a Message</CardTitle>
						<CardDescription>
							Fill out the form below and we'll get back to you within 24 hours
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={handleSubmit}
							className="space-y-6"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium mb-2"
									>
										Name
									</label>
									<Input
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										placeholder="Your full name"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Email
									</label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleInputChange}
										placeholder="your@email.com"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium mb-2"
								>
									Subject
								</label>
								<Input
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									placeholder="What can we help you with?"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="category"
									className="block text-sm font-medium mb-2"
								>
									Category
								</label>
								<select
									id="category"
									name="category"
									value={formData.category}
									onChange={handleInputChange}
									className="w-full p-2 border border-border rounded-md bg-background text-foreground"
								>
									<option value="General Questions">General Questions</option>
									<option value="Technical Support">Technical Support</option>
									<option value="Bug Reports">Bug Reports</option>
									<option value="Billing">Billing</option>
									<option value="Feature Request">Feature Request</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Message
								</label>
								<Textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									placeholder="Tell us more about your question or issue..."
									className="min-h-[120px]"
									required
								/>
							</div>

							<Button
								type="submit"
								className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
							>
								<Send className="h-4 w-4 mr-2" />
								Send Message
							</Button>
						</form>
					</CardContent>
				</Card>

				{/* Support Information */}
				<div className="space-y-8">
					{/* Support Categories */}
					<Card className="bg-card/50 backdrop-blur-sm border-border/50">
						<CardHeader>
							<CardTitle>Support Categories</CardTitle>
							<CardDescription>
								Choose the right category for faster assistance
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{supportCategories.map((category, index) => {
									const Icon = category.icon;
									return (
										<div
											key={index}
											className="flex items-start gap-3"
										>
											<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
												<Icon className="h-4 w-4 text-white" />
											</div>
											<div>
												<h3 className="font-medium">{category.title}</h3>
												<p className="text-sm text-muted-foreground">
													{category.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</CardContent>
					</Card>

					{/* Response Times */}
					<Card className="bg-card/50 backdrop-blur-sm border-border/50">
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Clock className="h-5 w-5 text-blue-400" />
								Response Times
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<div className="flex justify-between">
									<span>Live Chat</span>
									<span className="text-green-400">Instant</span>
								</div>
								<div className="flex justify-between">
									<span>Email Support</span>
									<span className="text-blue-400">Within 24 hours</span>
								</div>
								<div className="flex justify-between">
									<span>Technical Issues</span>
									<span className="text-orange-400">Within 12 hours</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Office Locations */}
			<div className="max-w-7xl mx-auto mb-16">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
					Our{" "}
					<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
						Offices
					</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{officeLocations.map((office, index) => (
						<Card
							key={index}
							className="bg-card/50 backdrop-blur-sm border-border/50"
						>
							<CardContent className="pt-6">
								<div className="text-center">
									<span className="text-3xl mb-4 block">{office.country}</span>
									<h3 className="font-semibold text-lg mb-2">{office.city}</h3>
									<div className="flex items-start gap-2 justify-center">
										<MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
										<p className="text-sm text-muted-foreground whitespace-pre-line">
											{office.address}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* FAQ Link */}
			<div className="max-w-4xl mx-auto text-center">
				<Card className="bg-gradient-to-r from-slate-900/50 to-blue-900/50 border-border/50">
					<CardContent className="pt-8">
						<HelpCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
						<h2 className="text-2xl font-bold mb-4">
							Looking for Quick Answers?
						</h2>
						<p className="text-muted-foreground mb-6">
							Check out our FAQ section for instant answers to common questions
						</p>
						<Button
							variant="outline"
							size="lg"
						>
							Visit FAQ
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
