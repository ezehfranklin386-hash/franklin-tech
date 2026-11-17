export function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-2.5 text-sm text-foreground">
      <span className="bg-primary relative flex size-2">
        <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-60" />
        <span className="bg-primary relative inline-flex size-2 rounded-full" />
      </span>
      Available for new projects
    </span>
  );
}
