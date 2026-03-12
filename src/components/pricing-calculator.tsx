"use client";

import { useState, useMemo } from "react";
import { Plus, Check, Users, Shield, Zap, Rocket, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PLANS = [
    {
        id: "starter",
        name: "Starter",
        description: "Perfect for small teams",
        basePrice: 10,
        icon: Rocket,
        features: ["Up to 5 Projects", "Basic Analytics", "Community Support"],
        color: "from-blue-500/20 to-blue-600/20",
        borderColor: "group-hover:border-blue-500/50",
        accentColor: "bg-blue-500",
    },
    {
        id: "pro",
        name: "Pro",
        description: "Best for growing businesses",
        basePrice: 25,
        icon: Zap,
        features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Domains"],
        color: "from-purple-500/20 to-purple-600/20",
        borderColor: "group-hover:border-purple-500/50",
        accentColor: "bg-purple-500",
        popular: true,
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "Scale with confidence",
        basePrice: 50,
        icon: Shield,
        features: ["SLA Guarantee", "Dedicated Manager", "SSO & Security", "Custom Contracts"],
        color: "from-amber-500/20 to-amber-600/20",
        borderColor: "group-hover:border-amber-500/50",
        accentColor: "bg-amber-500",
    },
];

const ADDONS = [
    { id: "api", name: "API Access", price: 50 },
    { id: "support", name: "24/7 Premium Support", price: 100 },
    { id: "security", name: "Advanced Security Pack", price: 75 },
];

export default function PricingCalculator() {
    const [users, setUsers] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState("pro");
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
    const [isYearly, setIsYearly] = useState(false);

    const plan = PLANS.find((p) => p.id === selectedPlan)!;
    const addonCost = selectedAddons.reduce((acc, id) => {
        const addon = ADDONS.find((a) => a.id === id);
        return acc + (addon?.price || 0);
    }, 0);

    const monthlyTotal = plan.basePrice * users + addonCost;
    const yearlyDiscount = 0.2; // 20% discount
    const yearlyTotal = monthlyTotal * 12 * (1 - yearlyDiscount);

    const toggleAddon = (id: string) => {
        setSelectedAddons((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Scale your team with ease. No hidden gems, just honest pricing that grows with your business.
                </p>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
                {/* Controls Section */}
                <div className="lg:col-span-8 space-y-8">
                    {/* User Count */}
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <CardTitle className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-primary" />
                                        Number of Users
                                    </CardTitle>
                                    <CardDescription>How many teammates will be using the platform?</CardDescription>
                                </div>
                                <div className="text-3xl font-bold text-primary">{users}</div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <Slider
                                value={[users]}
                                onValueChange={(val) => setUsers(Array.isArray(val) ? val[0] : val)}
                                max={100}
                                min={1}
                                step={1}
                                className="py-4"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                <span>1 User</span>
                                <span>50 Users</span>
                                <span>100+ Users</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Plan Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {PLANS.map((p) => {
                            const Icon = p.icon;
                            const isActive = selectedPlan === p.id;
                            return (
                                <Card
                                    key={p.id}
                                    onClick={() => setSelectedPlan(p.id)}
                                    className={`relative cursor-pointer transition-all duration-300 group border-2 ${isActive ? "border-primary ring-2 ring-primary/20 scale-[1.02]" : "border-border/50 hover:border-border"
                                        } overflow-hidden`}
                                >
                                    {p.popular && (
                                        <div className="absolute top-0 right-0">
                                            <div className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter">
                                                Most Popular
                                            </div>
                                        </div>
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                                    <CardHeader>
                                        <div className={`w-10 h-10 rounded-lg ${p.accentColor} flex items-center justify-center mb-2 shadow-lg`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <CardTitle>{p.name}</CardTitle>
                                        <CardDescription>{p.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold">${p.basePrice}</span>
                                            <span className="text-muted-foreground text-sm">/user/mo</span>
                                        </div>
                                        <div className="space-y-2">
                                            {p.features.map((f) => (
                                                <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                                    <span>{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Add-ons */}
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plus className="w-5 h-5 text-primary" />
                                Optional Add-ons
                            </CardTitle>
                            <CardDescription>Enhance your plan with these powerful extension packs.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ADDONS.map((addon) => (
                                <div
                                    key={addon.id}
                                    onClick={() => toggleAddon(addon.id)}
                                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedAddons.includes(addon.id)
                                        ? "border-primary bg-primary/5"
                                        : "border-border/50 hover:border-border bg-background/50"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedAddons.includes(addon.id) ? "bg-primary border-primary" : "border-muted-foreground/30"
                                            }`}>
                                            {selectedAddons.includes(addon.id) && <Check className="w-3.5 h-3.5 text-white" />}
                                        </div>
                                        <div className="space-y-0.5">
                                            <div className="font-semibold text-sm">{addon.name}</div>
                                            <div className="text-xs text-muted-foreground">+${addon.price}/mo</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Summary Sticky Card */}
                <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit">
                    <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden bg-background/80 backdrop-blur-xl">
                        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500" />
                        <CardHeader className="text-center">
                            <CardTitle>Order Summary</CardTitle>
                            <CardDescription>Estimate your investment</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Billing Toggle */}
                            <div className="flex items-center justify-between bg-muted/50 p-3 rounded-xl border border-border/50">
                                <div className="space-y-0.5">
                                    <div className="text-sm font-semibold">Yearly Billing</div>
                                    <div className="text-xs text-green-600 font-bold">Save 20%</div>
                                </div>
                                <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">{plan.name} Plan ({users} Users)</span>
                                    <span className="font-medium">${(plan.basePrice * users).toLocaleString()}</span>
                                </div>
                                {selectedAddons.length > 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Add-ons Pack</span>
                                        <span className="font-medium hover:text-primary transition-colors">+${addonCost.toLocaleString()}</span>
                                    </div>
                                )}
                                <div className="pt-4 border-t border-border flex flex-col gap-1 items-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isYearly ? "yearly" : "monthly"}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-center w-full"
                                        >
                                            <div className="text-5xl font-black tracking-tighter">
                                                ${(isYearly ? (yearlyTotal / 12) : monthlyTotal).toLocaleString()}
                                                <span className="text-sm text-muted-foreground font-normal ml-1">/mo</span>
                                            </div>
                                            {isYearly && (
                                                <div className="text-sm text-green-600 font-bold mt-2 bg-green-500/10 py-1 rounded-full">
                                                    ${yearlyTotal.toLocaleString()} billed yearly
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <Button className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
                                    Get Started with {plan.name}
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                                    <Check className="w-3 h-3 text-green-500" />
                                    No credit card required
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Breakdown / Info Card */}
                    <Card className="mt-6 border-border/50 bg-card/50 transition-all hover:bg-card">
                        <CardContent className="pt-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-full h-fit shrink-0">
                                    <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-sm">Instant Setup</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Deploy your instance in under 3 minutes. All plans include 10GB free storage and automatic backups.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
