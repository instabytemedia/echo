"use client";

import { useState } from "react";
import type { CreateBuild } from "@/lib/schemas/build";

interface BuildFormProps {
  initialData?: Partial<CreateBuild>;
  onSubmit: (data: CreateBuild) => Promise<void>;
  isSubmitting?: boolean;
}

export function BuildForm({ initialData, onSubmit, isSubmitting }: BuildFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState(initialData?.version ?? "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await onSubmit({
        version,
      } as CreateBuild);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="version" className="text-sm font-medium">
          Version
        </label>
        <input
          id="version"
          type="text"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
        >
          {isSubmitting ? "Speichern..." : "Speichern"}
        </button>
      </div>
    </form>
  );
}
