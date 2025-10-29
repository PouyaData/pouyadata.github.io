/**
 * Get ISO week number and year from a date
 * Returns format: yyyy_ww (e.g., "2025_32")
 *
 * ISO week date system:
 * - Week starts on Monday
 * - Week 1 is the week with the year's first Thursday
 */
export function getISOWeek(date: Date): string {
  const target = new Date(date.valueOf());
  const dayNr = (date.getDay() + 6) % 7; // Make Monday = 0
  target.setDate(target.getDate() - dayNr + 3); // Set to nearest Thursday
  const jan4 = new Date(target.getFullYear(), 0, 4);
  const dayDiff = (target.valueOf() - jan4.valueOf()) / 86400000;
  const weekNum = 1 + Math.ceil(dayDiff / 7);
  const year = target.getFullYear();

  return `${year}_${weekNum.toString().padStart(2, '0')}`;
}

/**
 * Compare two week strings in yyyy_ww format
 * Returns:
 *  - negative if week1 < week2
 *  - 0 if week1 === week2
 *  - positive if week1 > week2
 */
export function compareWeeks(week1: string, week2: string): number {
  const [year1, wk1] = week1.split('_').map(Number);
  const [year2, wk2] = week2.split('_').map(Number);

  if (year1 !== year2) {
    return year1 - year2;
  }
  return wk1 - wk2;
}

/**
 * Check if a post should be published based on its publish date
 * and the current deployment week
 */
export function shouldPublishPost(publishDate: Date, deploymentWeek?: string): boolean {
  if (!deploymentWeek) {
    // No deployment week set, publish all posts
    return true;
  }

  const postWeek = getISOWeek(publishDate);
  return compareWeeks(postWeek, deploymentWeek) <= 0;
}
