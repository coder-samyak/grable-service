type AnalyticsEvent = {
  name: string;
  props?: Record<string, string | number | boolean>;
};

export function trackEvent(_event: AnalyticsEvent) {
  return undefined;
}
