import { useState } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield } from "lucide-react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Features", href: "/features" },
	{ name: "Pricing", href: "/pricing" },
	{ name: "Servers", href: "/servers" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 max-w-[1366px] mx-auto items-center">
				<div className="mr-4 hidden md:flex">
					<Link
						to="/"
						className="mr-6 flex items-center space-x-2"
					>
						<Shield className="h-6 w-6 text-blue-400" />
						<span className="hidden font-bold sm:inline-block text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							zVPN
						</span>
					</Link>
					<nav className="flex items-center gap-6 text-sm">
						{navigation.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								className={cn(
									"transition-colors hover:text-foreground/80",
									location.pathname === item.href
										? "text-foreground"
										: "text-foreground/60"
								)}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>

				<Sheet
					open={isOpen}
					onOpenChange={setIsOpen}
				>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
						>
							<Menu className="h-6 w-6" />
							<span className="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent
						side="left"
						className="pr-0"
					>
						<MobileNav />
					</SheetContent>
				</Sheet>

				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<Link
							to="/"
							className="mr-6 flex items-center space-x-2 md:hidden"
						>
							<Shield className="h-6 w-6 text-blue-400" />
							<span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
								zVPN
							</span>
						</Link>
					</div>
					<nav className="flex items-center gap-2">
						<Button
							variant="ghost"
							asChild
							className="text-foreground/60 hover:text-foreground"
						>
							<Link to="/dashboard">Sign In</Link>
						</Button>
						<Button
							asChild
							className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
						>
							<Link to="/pricing">Get Started</Link>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}

function MobileNav() {
	const location = useLocation();

	return (
		<div className="flex flex-col space-y-3">
			<Link
				to="/"
				className="flex items-center space-x-2"
			>
				<Shield className="h-6 w-6 text-blue-400" />
				<span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
					zVPN
				</span>
			</Link>
			<div className="flex flex-col space-y-2">
				{navigation.map((item) => (
					<Link
						key={item.href}
						to={item.href}
						className={cn(
							"px-2 py-1 text-sm transition-colors hover:text-foreground",
							location.pathname === item.href
								? "text-foreground"
								: "text-foreground/80"
						)}
					>
						{item.name}
					</Link>
				))}
				<div className="flex flex-col space-y-2 pt-2 border-t">
					<Button
						variant="ghost"
						asChild
						className="justify-start"
					>
						<Link to="/dashboard">Sign In</Link>
					</Button>
					<Button
						asChild
						className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
					>
						<Link to="/pricing">Get Started</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
