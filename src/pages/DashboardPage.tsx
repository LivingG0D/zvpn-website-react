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
import { Link } from "react-router";
import {
	Shield,
	Globe,
	Activity,
	Download,
	Upload,
	Clock,
	Settings,
	User,
	CreditCard,
	HelpCircle,
	Power,
	Wifi,
	MapPin,
	Zap,
	Eye,
	EyeOff,
} from "lucide-react";

const connectionStatus = {
	isConnected: true,
	server: "United States - New York",
	ip: "192.168.1.100",
	protectedIp: "203.45.67.89",
	protocol: "WireGuard",
	uptime: "2h 34m",
	dataUsed: "1.2 GB",
};

const recentActivity = [
	{ time: "10:30 AM", action: "Connected to US - New York", status: "success" },
	{ time: "09:45 AM", action: "Disconnected from UK - London", status: "info" },
	{ time: "09:44 AM", action: "Connected to UK - London", status: "success" },
	{ time: "08:15 AM", action: "App started", status: "info" },
];

const accountInfo = {
	plan: "Premium",
	daysLeft: 23,
	totalDevices: 10,
	connectedDevices: 3,
	nextBilling: "September 15, 2024",
};

const quickActions = [
	{
		icon: Settings,
		title: "Settings",
		description: "Configure app preferences",
		href: "/settings",
	},
	{
		icon: CreditCard,
		title: "Billing",
		description: "Manage subscription",
		href: "/billing",
	},
	{
		icon: HelpCircle,
		title: "Support",
		description: "Get help",
		href: "/contact",
	},
	{
		icon: User,
		title: "Profile",
		description: "Edit account details",
		href: "/profile",
	},
];

export default function DashboardPage() {
	const [showRealIp, setShowRealIp] = useState(false);

	const handleConnect = () => {
		// Handle connection logic
		console.log("Connecting...");
	};

	const handleDisconnect = () => {
		// Handle disconnection logic
		console.log("Disconnecting...");
	};

	return (
		<div className="min-h-screen py-8 px-4 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between">
						<div>
							<h1 className="text-3xl font-bold mb-2 text-white">Dashboard</h1>
							<p className="text-muted-foreground">
								Welcome back! Manage your VPN connection and account settings.
							</p>
						</div>
						<div className="mt-4 md:mt-0">
							<Badge
								variant={connectionStatus.isConnected ? "default" : "secondary"}
								className={
									connectionStatus.isConnected
										? "bg-green-500 hover:bg-green-600"
										: ""
								}
							>
								{connectionStatus.isConnected
									? "🟢 Connected"
									: "🔴 Disconnected"}
							</Badge>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Connection Panel */}
					<div className="lg:col-span-2 space-y-6">
						{/* Connection Status */}
						<Card className="bg-card/50 backdrop-blur-sm border-border/50">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Shield className="h-5 w-5 text-blue-400" />
									Connection Status
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-6">
									{/* Current Connection Info */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-3">
											<div>
												<p className="text-sm text-muted-foreground">
													Current Server
												</p>
												<div className="flex items-center gap-2">
													<MapPin className="h-4 w-4 text-blue-400" />
													<p className="font-medium">
														{connectionStatus.server}
													</p>
												</div>
											</div>
											<div>
												<p className="text-sm text-muted-foreground">
													Protocol
												</p>
												<div className="flex items-center gap-2">
													<Zap className="h-4 w-4 text-blue-400" />
													<p className="font-medium">
														{connectionStatus.protocol}
													</p>
												</div>
											</div>
										</div>
										<div className="space-y-3">
											<div>
												<div className="flex items-center justify-between">
													<p className="text-sm text-muted-foreground">
														Your IP Address
													</p>
													<Button
														variant="ghost"
														size="sm"
														onClick={() => setShowRealIp(!showRealIp)}
														className="h-6 w-6 p-0"
													>
														{showRealIp ? (
															<EyeOff className="h-3 w-3" />
														) : (
															<Eye className="h-3 w-3" />
														)}
													</Button>
												</div>
												<p className="font-medium font-mono">
													{showRealIp
														? connectionStatus.ip
														: connectionStatus.protectedIp}
												</p>
											</div>
											<div>
												<p className="text-sm text-muted-foreground">
													Connection Time
												</p>
												<div className="flex items-center gap-2">
													<Clock className="h-4 w-4 text-blue-400" />
													<p className="font-medium">
														{connectionStatus.uptime}
													</p>
												</div>
											</div>
										</div>
									</div>

									{/* Connection Controls */}
									<div className="flex gap-4">
										{connectionStatus.isConnected ? (
											<Button
												onClick={handleDisconnect}
												variant="destructive"
												className="flex-1"
											>
												<Power className="h-4 w-4 mr-2" />
												Disconnect
											</Button>
										) : (
											<Button
												onClick={handleConnect}
												className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
											>
												<Wifi className="h-4 w-4 mr-2" />
												Connect
											</Button>
										)}
										<Button
											variant="outline"
											asChild
										>
											<Link to="/servers">
												<Globe className="h-4 w-4 mr-2" />
												Change Server
											</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Data Usage */}
						<Card className="bg-card/50 backdrop-blur-sm border-border/50">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Activity className="h-5 w-5 text-blue-400" />
									Data Usage
								</CardTitle>
								<CardDescription>Current session statistics</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
									<div className="text-center">
										<Download className="h-6 w-6 text-green-400 mx-auto mb-2" />
										<p className="text-2xl font-bold">847 MB</p>
										<p className="text-sm text-muted-foreground">Downloaded</p>
									</div>
									<div className="text-center">
										<Upload className="h-6 w-6 text-blue-400 mx-auto mb-2" />
										<p className="text-2xl font-bold">353 MB</p>
										<p className="text-sm text-muted-foreground">Uploaded</p>
									</div>
									<div className="text-center md:col-span-1 col-span-2">
										<Activity className="h-6 w-6 text-purple-400 mx-auto mb-2" />
										<p className="text-2xl font-bold">
											{connectionStatus.dataUsed}
										</p>
										<p className="text-sm text-muted-foreground">Total</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Recent Activity */}
						<Card className="bg-card/50 backdrop-blur-sm border-border/50">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Clock className="h-5 w-5 text-blue-400" />
									Recent Activity
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									{recentActivity.map((activity, index) => (
										<div
											key={index}
											className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
										>
											<div
												className={`w-2 h-2 rounded-full ${
													activity.status === "success"
														? "bg-green-400"
														: "bg-blue-400"
												}`}
											/>
											<div className="flex-1">
												<p className="text-sm">{activity.action}</p>
												<p className="text-xs text-muted-foreground">
													{activity.time}
												</p>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Account Info */}
						<Card className="bg-card/50 backdrop-blur-sm border-border/50">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<User className="h-5 w-5 text-blue-400" />
									Account
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm text-muted-foreground">Plan</span>
										<Badge className="bg-gradient-to-r from-blue-600 to-cyan-600">
											{accountInfo.plan}
										</Badge>
									</div>
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm text-muted-foreground">
											Days Left
										</span>
										<span className="font-medium">{accountInfo.daysLeft}</span>
									</div>
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm text-muted-foreground">
											Devices
										</span>
										<span className="font-medium">
											{accountInfo.connectedDevices}/{accountInfo.totalDevices}
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-muted-foreground">
											Next Billing
										</span>
										<span className="font-medium text-xs">
											{accountInfo.nextBilling}
										</span>
									</div>
								</div>
								<Button
									variant="outline"
									className="w-full"
									asChild
								>
									<Link to="/pricing">Upgrade Plan</Link>
								</Button>
							</CardContent>
						</Card>

						{/* Quick Actions */}
						<Card className="bg-card/50 backdrop-blur-sm border-border/50">
							<CardHeader>
								<CardTitle>Quick Actions</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									{quickActions.map((action, index) => {
										const Icon = action.icon;
										return (
											<Button
												key={index}
												variant="ghost"
												className="w-full justify-start h-auto p-3"
												asChild
											>
												<Link to={action.href}>
													<div className="flex items-center gap-3">
														<Icon className="h-4 w-4 text-blue-400" />
														<div className="text-left">
															<p className="font-medium text-sm">
																{action.title}
															</p>
															<p className="text-xs text-muted-foreground">
																{action.description}
															</p>
														</div>
													</div>
												</Link>
											</Button>
										);
									})}
								</div>
							</CardContent>
						</Card>

						{/* Security Tip */}
						<Card className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-blue-500/50">
							<CardContent className="pt-6">
								<div className="text-center">
									<Shield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
									<h3 className="font-semibold mb-2">Stay Secure</h3>
									<p className="text-sm text-muted-foreground mb-4">
										Enable auto-connect on untrusted networks for maximum
										protection.
									</p>
									<Button
										size="sm"
										variant="outline"
									>
										Enable Auto-Connect
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
