import { STATE_WC_DATA } from '@/lib/calculators/workers-comp';

export type WorkersCompStateEvidence = {
  code: string;
  stateName: string;
  agencyName: string;
  officialUrl: string;
  lastVerified: string;
  changeLog: string;
  noticeWindowModel: string;
  filingWindowModel: string;
  requiredDocuments: string[];
  submissionOrder: string[];
};

const LAST_VERIFIED = '2026-03-21';

const STATE_AGENCY_MAP: Record<string, { agencyName: string; officialUrl: string }> = {
  AL: { agencyName: 'Alabama Department of Labor (Workers Compensation)', officialUrl: 'https://labor.alabama.gov/wc/' },
  AK: { agencyName: 'Alaska Department of Labor and Workforce Development', officialUrl: 'https://labor.alaska.gov/wc/' },
  AZ: { agencyName: 'Industrial Commission of Arizona', officialUrl: 'https://www.azica.gov/divisions/claims-division' },
  AR: { agencyName: 'Arkansas Workers Compensation Commission', officialUrl: 'https://www.awcc.state.ar.us/' },
  CA: { agencyName: 'California Division of Workers Compensation', officialUrl: 'https://www.dir.ca.gov/dwc/' },
  CO: { agencyName: 'Colorado Division of Workers Compensation', officialUrl: 'https://cdle.colorado.gov/workers-compensation' },
  CT: { agencyName: 'Connecticut Workers Compensation Commission', officialUrl: 'https://wcc.state.ct.us/' },
  DE: { agencyName: 'Delaware Office of Workers Compensation', officialUrl: 'https://labor.delaware.gov/divisions/industrial-affairs/office-of-workers-compensation/' },
  FL: { agencyName: 'Florida Division of Workers Compensation', officialUrl: 'https://www.myfloridacfo.com/division/wc/' },
  GA: { agencyName: 'Georgia State Board of Workers Compensation', officialUrl: 'https://sbwc.georgia.gov/' },
  HI: { agencyName: 'Hawaii Disability Compensation Division', officialUrl: 'https://labor.hawaii.gov/dcd/' },
  ID: { agencyName: 'Idaho Industrial Commission', officialUrl: 'https://iic.idaho.gov/' },
  IL: { agencyName: 'Illinois Workers Compensation Commission', officialUrl: 'https://iwcc.illinois.gov/' },
  IN: { agencyName: 'Indiana Workers Compensation Board', officialUrl: 'https://www.in.gov/wcb/' },
  IA: { agencyName: 'Iowa Division of Workers Compensation', officialUrl: 'https://www.iowadivisionoflabor.gov/workers-compensation' },
  KS: { agencyName: 'Kansas Department of Labor - Workers Compensation', officialUrl: 'https://www.dol.ks.gov/workers-comp' },
  KY: { agencyName: 'Kentucky Department of Workers Claims', officialUrl: 'https://labor.ky.gov/comp/Pages/default.aspx' },
  LA: { agencyName: 'Louisiana Office of Workers Compensation Administration', officialUrl: 'https://www.laworks.net/WorkersComp/' },
  ME: { agencyName: 'Maine Workers Compensation Board', officialUrl: 'https://www.maine.gov/wcb/' },
  MD: { agencyName: 'Maryland Workers Compensation Commission', officialUrl: 'https://www.wcc.state.md.us/' },
  MA: { agencyName: 'Massachusetts Department of Industrial Accidents', officialUrl: 'https://www.mass.gov/orgs/department-of-industrial-accidents' },
  MI: { agencyName: 'Michigan Workers Disability Compensation Agency', officialUrl: 'https://www.michigan.gov/leo/bureaus-agencies/wdca' },
  MN: { agencyName: 'Minnesota Department of Labor and Industry', officialUrl: 'https://www.dli.mn.gov/business/workers-compensation' },
  MS: { agencyName: 'Mississippi Workers Compensation Commission', officialUrl: 'https://www.mwcc.ms.gov/' },
  MO: { agencyName: 'Missouri Division of Workers Compensation', officialUrl: 'https://labor.mo.gov/dwc' },
  MT: { agencyName: 'Montana Employment Relations Division', officialUrl: 'https://erd.dli.mt.gov/work-comp-regulations' },
  NE: { agencyName: 'Nebraska Workers Compensation Court', officialUrl: 'https://www.wcc.ne.gov/' },
  NV: { agencyName: 'Nevada Division of Industrial Relations', officialUrl: 'https://dir.nv.gov/WCS/Home/' },
  NH: { agencyName: 'New Hampshire Department of Labor', officialUrl: 'https://www.nh.gov/labor/workers-comp/index.htm' },
  NJ: { agencyName: 'New Jersey Division of Workers Compensation', officialUrl: 'https://www.nj.gov/labor/workerscompensation/' },
  NM: { agencyName: 'New Mexico Workers Compensation Administration', officialUrl: 'https://workerscomp.nm.gov/' },
  NY: { agencyName: 'New York Workers Compensation Board', officialUrl: 'https://www.wcb.ny.gov/' },
  NC: { agencyName: 'North Carolina Industrial Commission', officialUrl: 'https://www.ic.nc.gov/' },
  ND: { agencyName: 'North Dakota Workforce Safety and Insurance', officialUrl: 'https://workforcesafety.com/' },
  OH: { agencyName: 'Ohio Bureau of Workers Compensation', officialUrl: 'https://info.bwc.ohio.gov/' },
  OK: { agencyName: 'Oklahoma Workers Compensation Commission', officialUrl: 'https://wcc.ok.gov/' },
  OR: { agencyName: 'Oregon Workers Compensation Division', officialUrl: 'https://wcd.oregon.gov/' },
  PA: { agencyName: 'Pennsylvania Bureau of Workers Compensation', officialUrl: 'https://www.pa.gov/agencies/dli/programs-services/workers-compensation.html' },
  RI: { agencyName: 'Rhode Island Department of Labor and Training', officialUrl: 'https://dlt.ri.gov/regulation-and-safety/workers-compensation' },
  SC: { agencyName: 'South Carolina Workers Compensation Commission', officialUrl: 'https://wcc.sc.gov/' },
  SD: { agencyName: 'South Dakota Department of Labor and Regulation', officialUrl: 'https://dlr.sd.gov/workers_compensation/' },
  TN: { agencyName: 'Tennessee Bureau of Workers Compensation', officialUrl: 'https://www.tn.gov/workforce/injuries-at-work.html' },
  TX: { agencyName: 'Texas Division of Workers Compensation', officialUrl: 'https://www.tdi.texas.gov/wc/' },
  UT: { agencyName: 'Utah Labor Commission - Industrial Accidents', officialUrl: 'https://laborcommission.utah.gov/divisions/industrial-accidents/workers-compensation/' },
  VT: { agencyName: 'Vermont Department of Labor - Workers Compensation', officialUrl: 'https://labor.vermont.gov/workers-compensation' },
  VA: { agencyName: 'Virginia Workers Compensation Commission', officialUrl: 'https://workcomp.virginia.gov/' },
  WA: { agencyName: 'Washington Department of Labor and Industries', officialUrl: 'https://www.lni.wa.gov/claims/' },
  WV: { agencyName: 'West Virginia Offices of the Insurance Commissioner', officialUrl: 'https://www.wvinsurance.gov/Workers-Compensation' },
  WI: { agencyName: 'Wisconsin Department of Workforce Development', officialUrl: 'https://dwd.wisconsin.gov/wc/' },
  WY: { agencyName: 'Wyoming Department of Workforce Services', officialUrl: 'https://dws.wyo.gov/dws-division/workers-compensation-division/' },
  DC: { agencyName: 'DC Office of Workers Compensation', officialUrl: 'https://does.dc.gov/service/office-workers-compensation' },
};

function buildNoticeWindowModel(waitingPeriod: number): string {
  if (waitingPeriod <= 3) {
    return 'Operational target: report injury to employer in 24-72 hours; confirm statutory notice limits on state agency page.';
  }
  if (waitingPeriod <= 5) {
    return 'Operational target: same-week employer notice and first treatment documentation; verify legal notice deadline with state agency.';
  }
  return 'Operational target: immediate employer notice and claim setup before first payable week; verify statutory notice limits with state agency.';
}

function buildFilingWindowModel(stateName: string): string {
  return `${stateName} filing statutes vary by claim type and procedural posture. Use the official agency source before submission.`;
}

function buildRequiredDocuments(stateName: string): string[] {
  return [
    `First report of injury form (${stateName} agency format)`,
    'Initial treating provider note with work-status restrictions',
    'Average weekly wage evidence (pay stubs or payroll summary)',
    'Incident narrative with date/time/location and witness data',
    'Employer/carrier claim number and correspondence log',
  ];
}

function buildSubmissionOrder(stateName: string): string[] {
  return [
    'Day 0: notify supervisor/employer and secure urgent care records.',
    `Day 1-3: submit employer first report and confirm carrier routing for ${stateName}.`,
    'Week 1: upload medical work-status note and wage documents to claim file.',
    'Before first payable week: validate waiting-period handling and reserve all denial letters.',
    'If dispute persists: file petition/hearing package with agency forms and evidence index.',
  ];
}

export const WORKERS_COMP_STATE_EVIDENCE: WorkersCompStateEvidence[] = Object.entries(STATE_WC_DATA)
  .map(([code, data]) => {
    const agencyInfo = STATE_AGENCY_MAP[code];
    const changeLog = `2026 update synced: max weekly cap ${data.maxWeeklyBenefit}, minimum ${data.minWeeklyBenefit}, waiting period ${data.waitingPeriod} days.`;

    return {
      code,
      stateName: data.name,
      agencyName: agencyInfo?.agencyName ?? `${data.name} Workers Compensation Agency`,
      officialUrl: agencyInfo?.officialUrl ?? 'https://www.dol.gov/general/topic/workcomp',
      lastVerified: LAST_VERIFIED,
      changeLog,
      noticeWindowModel: buildNoticeWindowModel(data.waitingPeriod),
      filingWindowModel: buildFilingWindowModel(data.name),
      requiredDocuments: buildRequiredDocuments(data.name),
      submissionOrder: buildSubmissionOrder(data.name),
    };
  })
  .sort((a, b) => a.stateName.localeCompare(b.stateName));

export function getWorkersCompEvidenceByCode(stateCode: string): WorkersCompStateEvidence | undefined {
  return WORKERS_COMP_STATE_EVIDENCE.find((item) => item.code === stateCode);
}

export function getWorkersCompStateSlug(stateCode: string): string {
  return stateCode.toLowerCase();
}

export function parseWorkersCompStateCodeFromSlug(slug: string): string | null {
  const candidate = slug.toUpperCase();
  return Object.prototype.hasOwnProperty.call(STATE_WC_DATA, candidate) ? candidate : null;
}
