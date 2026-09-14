# PB-GA-001 / PB-ICD-001 — Phyto-Breeze Preliminary Manufacturing Plan

**Issue:** P0 layout and OEM coordination package only.  
**Safety boundary:** no container, piping, electrical, ventilation, pressure-relief, or gas-handling construction may proceed from this document.

## 1. Four-bay layout basis

```text
20 ft class container/skid concept — physical compartments only

[Bay 1: electrical/automation] | [Bay 2: water + OEM PEM stack] |
[Bay 3: hydrogen-only conditioning] | [Bay 4: oxygen-only conditioning]
```

| Bay | Scope | Explicit segregation |
| --- | --- | --- |
| 1 | power conversion, automation, telemetry | no process-gas piping |
| 2 | OEM PEM stack and OEM water subsystem | only OEM-defined internal process connections |
| 3 | hydrogen conditioning/export/relief interfaces | no oxygen piping or shared drainage |
| 4 | oxygen conditioning, verification, export/relief interfaces | no hydrogen piping or shared drainage |

## 2. Procurement rules

- Purchase the PEM stack and balance-of-plant as an integrated OEM package with documented operating envelope.
- The only production claim boundary is post-conditioning delivered oxygen, verified by calibrated instrumentation.
- Oxygen and hydrogen components, vents, relief headers, drains, service access, and shutdown systems are independently designed and maintained.
- Final materials, pressure ratings, nozzle sizes, vent termination, classified electrical equipment, ventilation, detector type/location, and purge/shutdown sequence are OEM- and site-specific.

## 3. Mandatory vendor package

1. OEM P&ID, line list, instrument index, cause/effect matrix, and interface-control document.
2. Water-quality specification, crossover limits, start/stop envelope, maintenance and preservation plan.
3. Approved pressure/relief, vent, export/storage, drainage, and hazardous-area data.
4. Product measurement uncertainty model for delivered oxygen mass and lower-95% verification.
5. FAT/SAT procedure, alarms, calibrated instruments, spare-parts list, and training package.

## 4. Construction release gate

Construction requires OEM approval plus site-specific hazardous-area classification, HAZOP/LOPA, relief-system design, dispersion study, structural/anchor design, utility design, and authority approvals. No vendor may fill these blanks by selecting generic components.

