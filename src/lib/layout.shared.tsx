import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/ui/Logo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      transparentMode: "none",
      title: (
        <div className="flex items-center gap-3 whitespace-nowrap text-[hsl(var(--fd-foreground))]">
          <Logo className="text-[hsl(var(--fd-foreground))]" />
          <span className="text-fd-muted-foreground text-sm font-normal leading-none whitespace-nowrap">
            Docs
          </span>
        </div>
      ),
    },
    themeSwitch: {
      enabled: true,
      mode: "light-dark-system",
    },
    links: [
      {
        text: "Back to Website",
        url: "/",
        active: "nested-url",
      },
    ],
  };
}
