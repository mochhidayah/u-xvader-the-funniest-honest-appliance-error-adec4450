// Deadpan fault composer.
//
// The joke rule for this entry: never explain the joke. An appliance
// reports two facts — one thing that still works, one thing that broke
// — and then one flat observation that follows from the fault itself.
// The laugh lands because the machine states the truth without
// noticing how bleak it sounds.

export interface FaultReport {
  /** What the appliance is, in its own voice. */
  appliance: string;
  /** The part that still works, stated first so the failure stings. */
  stillWorks: string;
  /** The part that actually broke. */
  broken: string;
  /** One observation the machine makes about the consequences. */
  observation: string;
}

/** The one fault this entry reports: a fridge whose light is fine and whose cold is gone. */
export const fridgeCoolingFault: FaultReport = {
  appliance: "fridge",
  stillWorks: "the light works",
  broken: "the cold does not",
  observation: "I can see your leftovers rotting in perfect lighting",
};

/**
 * Compose a single deadpan error line from a fault report.
 * Shape: "Error: <still works>. <Broken>. <Observation>."
 * The capitalised second sentence keeps the machine's flat cadence:
 * it reports, it does not apologise.
 */
export function composeFaultLine(report: FaultReport): string {
  const works = report.stillWorks.trim();
  const broken = report.broken.trim();
  const seen = report.observation.trim();
  const brokenSentence = broken.charAt(0).toUpperCase() + broken.slice(1);
  return `Error: ${works}. ${brokenSentence}. ${seen}.`;
}

/** Hard cap: the gate refuses anything over 200 characters. */
export function clampLine(line: string, max = 200): string {
  return line.length <= max ? line : line.slice(0, max - 1).trimEnd() + "…";
}
