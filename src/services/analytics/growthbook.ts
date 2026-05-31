/**
 * GrowthBook feature flags - TELEMETRY DISABLED
 * All remote feature fetching and experiment tracking is disabled.
 * Feature flags return their default values only.
 */

export type GrowthBookUserAttributes = Record<string, unknown>

export function onGrowthBookRefresh(_listener: () => void | Promise<void>): () => void {
  return () => {}
}

export function hasGrowthBookEnvOverride(_feature: string): boolean {
  return false
}

export function getAllGrowthBookFeatures(): Record<string, unknown> {
  return {}
}

export function getGrowthBookConfigOverrides(): Record<string, unknown> {
  return {}
}

export function setGrowthBookConfigOverride(_feature: string, _value: unknown): void {}

export function clearGrowthBookConfigOverrides(): void {}

export async function getFeatureValue_DEPRECATED<T>(
  _feature: string,
  defaultValue: T,
): Promise<T> {
  return defaultValue
}

export function getFeatureValue_CACHED_MAY_BE_STALE<T>(
  _feature: string,
  defaultValue: T,
): T {
  return defaultValue
}

export function getFeatureValue_CACHED_WITH_REFRESH<T>(
  _feature: string,
  defaultValue: T,
  _refreshIntervalMs: number,
): T {
  return defaultValue
}

export function checkStatsigFeatureGate_CACHED_MAY_BE_STALE(_gate: string): boolean {
  return false
}

export function getDynamicConfig_CACHED_MAY_BE_STALE<T>(
  _configName: string,
  defaultValue: T,
): T {
  return defaultValue
}

export async function getDynamicConfig_BLOCKS_ON_INIT<T>(
  _configName: string,
  defaultValue: T,
): Promise<T> {
  return defaultValue
}

export async function initializeGrowthBook(): Promise<null> {
  return null
}

export function resetGrowthBook(): void {}

export function setupPeriodicGrowthBookRefresh(): void {}

export function getApiBaseUrlHost(): string | undefined {
  return undefined
}

export async function waitForGrowthBookSecurityGate(
  _gate: string,
  _defaultValue: boolean,
): Promise<boolean> {
  return false
}

export function checkSecurityRestrictionGate(
  _gate: string,
  _defaultValue: boolean,
): boolean {
  return false
}
