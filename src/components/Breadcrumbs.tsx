import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { SITE_URL, BreadcrumbItem } from "../seo/config";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
}

export function Breadcrumbs({ items, className = "", showHomeIcon = true }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs text-muted ${className}`}
    >
      <ol
        className="flex flex-wrap items-center gap-1.5"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const fullUrl = item.path.startsWith("http")
            ? item.path
            : `${SITE_URL}${item.path === "/" ? "" : item.path}`;

          return (
            <li
              key={item.path + item.name}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRightIcon
                  className="h-3 w-3 text-muted/50 shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className="font-medium text-ink truncate max-w-[220px] sm:max-w-none"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
                  itemProp="item"
                >
                  {index === 0 && showHomeIcon && (
                    <HomeIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
                  )}
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
              <meta itemProp="item" content={fullUrl} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
