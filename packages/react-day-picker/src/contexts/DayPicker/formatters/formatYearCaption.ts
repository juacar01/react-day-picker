import format from 'date-fns/format';

/**
 * The default formatter for the Year caption.
 */
export function formatYearCaption(
  year: Date,
  options?: { locale?: Locale }
): string {
  return format(year, 'yyyy', options);
}
