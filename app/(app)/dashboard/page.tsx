import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  // Load counts for all entities
  const { count: buildCount } = await supabase
    .from("builds")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: signalCount } = await supabase
    .from("signals")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: privateCount } = await supabase
    .from("privates")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: privacyCount } = await supabase
    .from("privacys")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: keyCount } = await supabase
    .from("keys")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const stats = [
    { name: "Builds", count: buildCount || 0, href: "/builds" },
    { name: "Signals", count: signalCount || 0, href: "/signals" },
    { name: "Privates", count: privateCount || 0, href: "/privates" },
    { name: "Privacys", count: privacyCount || 0, href: "/privacys" },
    { name: "Keys", count: keyCount || 0, href: "/keys" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Willkommen zurück!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="block p-6 bg-card rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <div className="text-sm font-medium text-muted-foreground">
              {stat.name}
            </div>
            <div className="text-3xl font-bold mt-2">{stat.count}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
