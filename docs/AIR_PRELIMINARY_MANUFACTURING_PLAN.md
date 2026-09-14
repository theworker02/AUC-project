# AIR-GA-001 / AIR-FAB-001 — AUC-Air Preliminary Manufacturing Plan

**Configuration:** 1,000 CFM / 0.47195 m³/s reference module.  
**Issue:** P0 quotation and design-review package.  
**Not for construction:** performance, structural, electrical, and safety qualification are incomplete.

## 1. General arrangement

```text
SIDE ELEVATION — process direction left to right

 ┌──────────┐ ┌────────────┐ ┌───────────┐ ┌─────────────┐ ┌────────────┐ ┌─────────┐
 │ weather  │ │ cyclone +  │ │ equalizing│ │ PAN particle│ │ TiO2 / UVA │ │ MnO2 +  │
 │ intake   │→│ sealed bin │→│ diffuser  │→│ cassette    │→│ core        │→│ EC fan  │→ discharge
 └──────────┘ └────────────┘ └───────────┘ └─────────────┘ └────────────┘ └─────────┘
                  coarse solids only                       600 × 600 mm active core
```

| Parameter | Preliminary requirement | Hold point |
| --- | --- | --- |
| Nominal flow | 1,000 CFM at declared air state | Fan curve and system curve approval |
| Active microchannel area | 0.360 m², nominal 600 × 600 mm | Confirm post-coating open area |
| Channel geometry | 2.0 mm pitch; 1.8 mm post-coating clear width; 100 mm axial catalyst length | Coupon dimensional inspection |
| Superficial / channel velocity | 1.311 / 1.618 m/s nominal | Multi-point velocity map |
| Flow path | Downstream fan draw; sealed service cassettes | Bypass tracer test |
| Corona | Disabled by default | Separate benefit and ozone qualification |

## 2. Fabrication subassemblies

### A. External enclosure and structural base

| Assembly | Preliminary build requirement | Supplier deliverable |
| --- | --- | --- |
| Base frame | Welded structural frame sized by a licensed structural calculation for transport, wind, service, and lifting loads | Stamped/approved calculation where required; weld map |
| Housing panels | Corrosion-resistant sheet or coated steel selected for the installation atmosphere | Material certificate, coating data, panel drawing |
| Service doors | Gasketed, interlocked, removable only after isolation sequence | Door/gasket compression drawing and interlock data |
| Drainage | Sloped, accessible drainage paths; no stagnant liquid pockets | Drain layout and cleaning procedure |
| Lifting/anchors | Engineered lifting lugs and site anchor pattern | Rated lug design and anchor loads |

### B. Cyclone and dust drawer

The cyclone is a coarse-load-management assembly. It is not a fine-particle performance stage.

- Fabricate from a corrosion-compatible material selected after site exposure review.
- Provide tangential inlet, vortex finder, conical hopper, removable sealed drawer, service isolation, and level indication interface.
- Provide measured grade-efficiency and pressure-drop curves at the declared inlet air state.
- Do not use an open drain or unsealed dust drop arrangement.

### C. Cassette rails and seals

- Use keyed, captive hardware so PAN, PCO, and MnO2 cassettes cannot be installed in the wrong sequence.
- Define gasket material, compression range, corner treatment, and allowable cassette flatness on released drawings.
- Provide differential-pressure taps upstream and downstream of each serviceable stage.
- Verify access clearance, removal path, lifting mass, and ergonomic service procedure before final GA release.

### D. PCO/UVA core

- Ceramic module target: 600 × 600 mm active face; four 25 mm slices; 100 mm total catalyst-channel length.
- The released coating procedure must define substrate batch, washcoat solids, mass loading, post-coating channel inspection, cure/sinter profile, adhesion test, and lot traceability.
- The released optical assembly must define UVA wavelength, minimum and mean irradiance map, measurement instrument, thermal interface, and LED replacement procedure.
- A 365 nm design may not inherit any 254 nm qualification result.

### E. Fan, controls, and instrumentation

- Select a backward-curved EC centrifugal blower from an approved fan curve that meets clean and loaded system resistance with specified operating margin.
- Provide independent airflow proving, per-stage differential pressure, fan state, ambient and LED thermal readings, UV flux indication, door interlocks, and fault relay.
- Hardware interlocks must fail to safe state without depending on supervisory firmware.

## 3. Preliminary BOM structure

| Item group | Required released data before purchase |
| --- | --- |
| Frame/enclosure | material, gauge, weld/WPS, finish, drawings, fasteners |
| Cyclone/dust drawer | geometry, grade curve, DP curve, drawer sealing, service method |
| PAN cassette | media data, gasket, clean/loaded DP, replacement criterion |
| PCO cassette | substrate, coating batch controls, irradiance geometry, retention evidence |
| MnO2 cassette | catalyst configuration, EBCT, ozone performance, shedding control |
| Fan/drive | certified curve, controls interface, acoustic/thermal data |
| Controls | I/O list, safety relay architecture, wiring drawings, calibration plan |

## 4. Inspection and acceptance points

1. Incoming inspection: certificates, dimensions, coating lot, media, catalyst, electrical components.
2. In-process: frame squareness, weld inspection, door alignment, drain slope, gasket land inspection.
3. Pre-FAT: pressure tap continuity, wiring checks, interlock sequence, fan rotation, no-load airflow.
4. FAT: airflow/DP curve, leakage/bypass, velocity map, UV mapping, thermal run, fault injections.
5. Qualification: particle, gas, ozone, byproduct, coating-retention, and statistical claims under the declared protocol.

## 5. Release blockers

Final drawings require CFD/physical distribution data, pressure-drop curves, fan selection, coating process qualification, electrical design, enclosure structural design, site environmental conditions, and completed safety/claims testing.

