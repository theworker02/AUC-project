# Project Atmospheric Ultra-Clean


---

## License & acquisition

This project is **proprietary**. Production use, redistribution, and commercial deployment require a written commercial license or completed acquisition. See [LICENSE](./LICENSE) and [ACQUISITION.md](./ACQUISITION.md). Contact [@theworker02](https://github.com/theworker02).


<p align="center">
  <img src="site/assets/auc-logo.svg" alt="Atmospheric Ultra-Clean â€” AUC Environmental Systems" width="620">
</p>

<p align="center">
  <a href="CHANGELOG.md"><img src="https://img.shields.io/badge/release-1.2.0-0b3456?style=flat-square" alt="Release 1.2.0"></a>
  <a href="docs/AUC_ENGINEERING_RELEASE_CONTROL.md"><img src="https://img.shields.io/badge/status-preliminary%20engineering-e77b38?style=flat-square" alt="Preliminary engineering status"></a>
  <a href="docs/DOCUMENT_CATALOG.md"><img src="https://img.shields.io/badge/documentation-controlled-168a63?style=flat-square" alt="Controlled documentation"></a>
  <a href=".github/workflows/pages.yml"><img src="https://img.shields.io/badge/site-GitHub%20Pages-24292f?style=flat-square" alt="GitHub Pages deployment"></a>
  <img src="https://img.shields.io/badge/license-pending-627385?style=flat-square" alt="License pending">
</p>

> **v1.2.0 Â· Preliminary Engineering Documentation Release**  
> AUC is a portfolio of independent environmental systems supported by shared evidence, telemetry, and energy planning. It is not a single combined hazardous-process machine.

## Start here

| Need | Open |
| --- | --- |
| Navigate the full repository | [Project index](INDEX.md) |
| Review all controlled documents | [Document catalog](docs/DOCUMENT_CATALOG.md) |
| Understand system boundaries | [Portfolio architecture](docs/AUC_PORTFOLIO_ARCHITECTURE.md) |
| Review current release status | [Engineering release control](docs/AUC_ENGINEERING_RELEASE_CONTROL.md) |
| Review preliminary drawings | [Drawing register](docs/COM_PRELIMINARY_DRAWING_REGISTER.md) |
| View the public documentation portal | [`site/`](site/) |

## Portfolio

### AUC-Air

A modular air-treatment architecture for controlled evaluation of particulate capture and specifically declared gas-phase treatment.

```text
weather intake â†’ coarse cyclone â†’ sealed dust drawer â†’ equalization diffuser
â†’ PAN particle cassette â†’ TiOâ‚‚ / UVA catalytic core â†’ MnOâ‚‚ polishing cassette
â†’ downstream EC centrifugal blower â†’ monitored discharge
```

- The cyclone is coarse debris/load management only; it does not own PM2.5 or submicron soot claims.
- The PAN cassette owns fine-particle performance.
- The 365 nm TiOâ‚‚/UVA configuration requires its own qualification evidence.
- Corona is disabled by default and can only be considered after measured benefit and ozone-control qualification.
- The 1,000 CFM reference module uses a nominal 600 Ã— 600 mm active microchannel area at 1.311 m/s superficial velocity.

Read: [AUC-Air manufacturing plan](docs/AIR_PRELIMINARY_MANUFACTURING_PLAN.md) Â· [verification plan](docs/AUC_VERIFICATION_AND_ACCEPTANCE.md)

### AUC-Water

A site-resilience water program that prioritizes the lowest-energy viable source: HVAC condensate and rainwater first, followed by atmospheric water generation only where climate and pilot evidence justify it.

- Initial boundary: treated non-potable utility water.
- AWG yield must state dry-bulb temperature, RH, airflow, delivered-water boundary, and energy per litre.
- DX condensation, liquid desiccant, and solid desiccant options are compared using site psychrometrics, maintenance, and total energy.
- Captured water is never direct PEM-stack feed. Any Phyto-Breeze supply crosses a separately qualified OEM DI-water interface.

Read: [AWG concept](docs/AUC_WATER_AWG_CONCEPT.md) Â· [AUC-Water manufacturing plan](docs/WTR_PRELIMINARY_MANUFACTURING_PLAN.md)

### Phyto-Breeze

A standalone PEM industrial oxygen-production concept. Its sole proposed product metric is verified **delivered oxygen mass** at the post-conditioning delivery boundary.

- Target metric: at least 25.0 kg delivered Oâ‚‚ over three hours, evaluated with a lower one-sided 95% confidence bound.
- Hydrogen and oxygen systems remain physically separated, including conditioning, vents, relief, drains, service access, and shutdown boundaries.
- Atmospheric oxygen release, distribution, storage, and export require separately approved site-specific process-safety and dispersion engineering.
- The project makes no carbon sequestration, air-cleaning, ecological, or thermal-cooling equivalence claim for this module.

Read: [Phyto-Breeze manufacturing plan](docs/PB_PRELIMINARY_MANUFACTURING_PLAN.md) Â· [interface control](docs/AUC_INTERFACE_CONTROL.md)

### AUC Sentinel and AUC Power

**AUC Sentinel** is the evidence layer: timestamped measurements, calibration identifiers, raw-data exports, alarms, service actions, and release-test records.  
**AUC Power** is site energy planning for independent loads; it does not provide a shared safety function or a shared process control system.

## Engineering release status

| Area | Current status | Required next gate |
| --- | --- | --- |
| AUC-Air | Benchtop and preliminary manufacturing definition | Performance/byproduct/safety qualification plus final vendor data |
| AUC-Water | Concept and pilot definition | Site climate profile, water target, treatment P&ID, pilot yield and kWh/L data |
| Phyto-Breeze | OEM and site-coordination definition | OEM P&ID/ICD, HAZOP/LOPA, hazardous-area, relief, dispersion, and authority approvals |

**This repository is not issued for construction.** Final fabrication requires the approved package identified in [Engineering Release Control](docs/AUC_ENGINEERING_RELEASE_CONTROL.md): IFC drawings, P&IDs, approved calculations, vendor data, inspection plans, safety review, site interfaces, and commissioning records.

## Repository structure

```text
00-governance/                 document control, decisions, engineering changes
01-requirements/               requirements and traceability
02-system-architecture/        functional system architecture
03-mechanical/                 CAD, enclosure, structural, installation design
04-process/                    PFDs, P&IDs, calculations, utility design
05-electrical-controls/        power, controls, I/O, interlocks, safety logic
06-software/                   telemetry schemas, edge/controller/dashboard code
07-procurement/                RFQs, quotes, compliance, vendor records
08-quality/                    ITPs, certificates, FAT/SAT, NCRs
09-verification-validation/    protocols, raw data, uncertainty, claim evidence
10-safety-compliance/          hazards, permits, LOTO, HAZOP/LOPA, relief
11-site-integration/           surveys, utilities, installation, commissioning
12-operations-maintenance/     SOPs, maintenance, training, spare parts
13-commercial/                 approved public claims and partner materials
14-assets/                     approved shared assets and logo guidance
15-archive/                    superseded controlled records
docs/                          active controlled design-basis documents
site/                          GitHub Pages engineering portal
scripts/                       repeatable automation and document checks
tests/                         automated validation checks
```

## Documentation portal

The static portal source is [site/index.html](site/index.html). It is deployed through [the GitHub Pages workflow](.github/workflows/pages.yml) after the repository is connected to GitHub, GitHub Pages is enabled, and the `main` branch is pushed.

## Contributing and document control

Read [CONTRIBUTING.md](CONTRIBUTING.md) before changing specifications. Material changes to claims, operating points, safety functions, treatment media, or interfaces require an engineering change notice and traceability update.

Use the controlled templates for [engineering changes](00-governance/CHANGE_CONTROL_TEMPLATE.md), [drawing title blocks](03-mechanical/DRAWING_TITLE_BLOCK_TEMPLATE.md), [P&ID development](04-process/PID_DEVELOPMENT_CHECKLIST.md), [supplier evaluation](07-procurement/SUPPLIER_PREQUALIFICATION.md), [test protocols](09-verification-validation/TEST_PROTOCOL_TEMPLATE.md), and [commissioning safety](10-safety-compliance/COMMISSIONING_SAFETY_CHECKLIST.md).

## Safety and claim boundary

The systems described here may involve high voltage, ultraviolet radiation, ozone, industrial water treatment, oxygen, hydrogen, pressure boundaries, and rotating equipment. Follow the selected OEMâ€™s instructions, local law, permit conditions, qualified engineering practice, and formal process-safety review. Do not use preliminary documents as fabrication, commissioning, or operational instructions.

See [SECURITY.md](SECURITY.md) for handling sensitive control or safety information.

## Funding

[`.github/FUNDING.yml`](.github/FUNDING.yml) is intentionally inactive until a verified GitHub Sponsors handle or approved support URL is supplied. Do not announce a funding destination until it is configured and verified.

## Versioning

The current version is [`1.2.0`](VERSION). Review [CHANGELOG.md](CHANGELOG.md) for release history and version policy.
