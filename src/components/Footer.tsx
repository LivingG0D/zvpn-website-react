import { Link } from "react-router";
import { Shield, Twitter, Facebook, Instagram, Github } from "lucide-react";

const footerLinks = {
	product: [
		{ name: "Features", href: "/features" },
		{ name: "Pricing", href: "/pricing" },
		{ name: "Server Locations", href: "/servers" },
		{ name: "Apps", href: "/apps" },
	],
	company: [
		{ name: "About Us", href: "/about" },
		{ name: "Blog", href: "/blog" },
		{ name: "Careers", href: "/careers" },
		{ name: "Press", href: "/press" },
	],
	support: [
		{ name: "Help Center", href: "/help" },
		{ name: "Contact Us", href: "/contact" },
		{ name: "Status", href: "/status" },
		{ name: "Setup Guides", href: "/guides" },
	],
	legal: [
		{ name: "Privacy Policy", href: "/privacy" },
		{ name: "Terms of Service", href: "/terms" },
		{ name: "DMCA", href: "/dmca" },
		{ name: "Transparency Report", href: "/transparency" },
	],
};

const socialLinks = [
	{ name: "Twitter", href: "#", icon: Twitter },
	{ name: "Facebook", href: "#", icon: Facebook },
	{ name: "Instagram", href: "#", icon: Instagram },
	{ name: "GitHub", href: "#", icon: Github },
];

export default function Footer() {
	return (
		<footer className="border-t border-border bg-background">
			<div className="container mx-auto px-4 py-12 max-w-[1366px]">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
					{/* Brand Section */}
					<div className="lg:col-span-2">
						<div className="flex items-center space-x-2 mb-4">
							<Shield className="h-8 w-8 text-blue-400" />
							<span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
								zVPN
							</span>
						</div>
						<p className="text-muted-foreground mb-6 max-w-sm">
							Secure, fast, and reliable VPN service to protect your online
							privacy and access content worldwide.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((item) => {
								const Icon = item.icon;
								return (
									<a
										key={item.name}
										href={item.href}
										className="text-muted-foreground hover:text-blue-400 transition-colors"
										aria-label={item.name}
									>
										<Icon className="h-5 w-5" />
									</a>
								);
							})}
						</div>
					</div>

					{/* Product Links */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Product</h3>
						<ul className="space-y-2">
							{footerLinks.product.map((item) => (
								<li key={item.name}>
									<Link
										to={item.href}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Company</h3>
						<ul className="space-y-2">
							{footerLinks.company.map((item) => (
								<li key={item.name}>
									<Link
										to={item.href}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Support Links */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Support</h3>
						<ul className="space-y-2">
							{footerLinks.support.map((item) => (
								<li key={item.name}>
									<Link
										to={item.href}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h3 className="font-semibold text-foreground mb-4">Legal</h3>
						<ul className="space-y-2">
							{footerLinks.legal.map((item) => (
								<li key={item.name}>
									<Link
										to={item.href}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
					<p className="text-muted-foreground text-sm">
						© 2024 zVPN. All rights reserved.
					</p>
					<div className="flex items-center space-x-4 mt-4 sm:mt-0">
						<span className="text-sm text-muted-foreground">
							Designed by LivingGOD
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
