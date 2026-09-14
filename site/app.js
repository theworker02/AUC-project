const documents = [
  ['Document catalog', 'docs/DOCUMENT_CATALOG.md', 'One-page index of every controlled design-basis and preliminary manufacturing document.'],
  ['Portfolio architecture', 'docs/AUC_PORTFOLIO_ARCHITECTURE.md', 'System purpose, boundaries, scale rules, and shared data plane.'],
  ['AUC-Water AWG concept', 'docs/AUC_WATER_AWG_CONCEPT.md', 'Technology selection, mass balance, enclosure zones, pilot records, and release gate.'],
  ['Manufacturing data requirements', 'docs/AUC_MANUFACTURING_DATA_REQUIREMENTS.md', 'Information that must be frozen before a supplier receives a build package.'],
  ['Verification and acceptance', 'docs/AUC_VERIFICATION_AND_ACCEPTANCE.md', 'Evidence hierarchy and FAT/SAT-ready test records.'],
  ['Interface control', 'docs/AUC_INTERFACE_CONTROL.md', 'Permitted and prohibited boundaries across the portfolio.'],
  ['Engineering release control', 'docs/AUC_ENGINEERING_RELEASE_CONTROL.md', 'Release classes, universal package, and change control.'],
  ['Preliminary drawing register', 'docs/COM_PRELIMINARY_DRAWING_REGISTER.md', 'Drawing identifiers, release status, conventions, and global construction gates.'],
  ['AUC-Air manufacturing plan', 'docs/AIR_PRELIMINARY_MANUFACTURING_PLAN.md', '1,000 CFM arrangement, subassemblies, BOM structure, inspections, and blockers.'],
  ['AUC-Water manufacturing plan', 'docs/WTR_PRELIMINARY_MANUFACTURING_PLAN.md', 'AWG bay layout, fabrication details, rating record, and pilot acceptance.'],
  ['Phyto-Breeze manufacturing plan', 'docs/PB_PRELIMINARY_MANUFACTURING_PLAN.md', 'Four-bay concept, OEM procurement package, and construction-release dependencies.'],
  ['Build sequence', 'docs/BUILD_SEQUENCE.md', 'Evidence-driven development order and dependency gates.']
];
document.querySelector('#doc-list').innerHTML = documents.map(([name, href, description]) => `<a href="document.html?file=${encodeURIComponent(href)}" class="doc"><span>Controlled document</span><h3>${name}</h3><p>${description}</p><b>Open document →</b></a>`).join('');
