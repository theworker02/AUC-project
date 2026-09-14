# AUC Engineering Release Control

## Release classes

| Class | Meaning | May a fabricator build from it? |
| --- | --- | --- |
| Concept | Architecture, option study, and design intent | No |
| Design basis | Measurable targets and required inputs | No; it supports quotation and design development only |
| Qualification protocol | Test method and acceptance evidence | Only test fixtures explicitly released for that purpose |
| Procurement specification | Approved vendor data, interfaces, inspection and acceptance requirements | Yes, after the listed approvals |
| Construction release | Signed drawings, P&ID, BOM, and site safety package | Yes |

None of the current AUC-Air, AUC-Water, or Phyto-Breeze documents is a construction release.

## Universal release package

Each procurement package must contain the following controlled documents, with a document number, revision, owner, approval signature, and change history:

1. General arrangement drawing and 3D model at the declared configuration.
2. P&ID, line list, valve list, instrument index, I/O list, and cause-and-effect matrix.
3. Electrical single-line diagram, load list, panel schedule, grounding plan, and cable schedule.
4. Datasheets, material certificates, coating specifications, approved vendor drawings, and inspection plans.
5. Structural, lifting, anchorage, drainage, access, maintenance-clearance, and shipping requirements.
6. Factory acceptance test (FAT), site acceptance test (SAT), commissioning, calibration, and maintenance procedures.
7. Site-specific hazards, permits, codes, process-safety review, relief/vent design, and emergency response plan where applicable.

## Change control

Any change to a stated operating point, treatment medium, UV wavelength, gas boundary, water-quality target, process path, safety function, or acceptance criterion requires an engineering change notice. The change notice must identify affected calculations, tests, drawings, supplier documents, and prior claims.

## Required document identifiers

Use the following prefixes in future controlled releases:

| Prefix | System | Example |
| --- | --- | --- |
| AIR- | AUC-Air | AIR-PID-001 |
| WTR- | AUC-Water | WTR-DS-001 |
| PB- | Phyto-Breeze | PB-ICD-001 |
| COM- | Portfolio/common | COM-REL-001 |

