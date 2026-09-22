# Buyer evaluation â€” Project Atmospheric Ultra-Clean

## Goal

In 15â€“45 minutes, verify the Product builds or runs as documented and that proprietary notices are present.

## Steps

1. Confirm root `LICENSE` is proprietary and `ACQUISITION.md` exists.
2. Skim `README.md` install/run claims.
3. Execute:

```
```text
weather intake Ã¢â€ â€™ coarse cyclone Ã¢â€ â€™ sealed dust drawer Ã¢â€ â€™ equalization diffuser
Ã¢â€ â€™ PAN particle cassette Ã¢â€ â€™ TiOÃ¢â€šâ€š / UVA catalytic core Ã¢â€ â€™ MnOÃ¢â€šâ€š polishing cassette
Ã¢â€ â€™ downstream EC centrifugal blower Ã¢â€ â€™ monitored discharge
```
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
```

4. Run tests if present (`npm test`, `pytest`, `cargo test`, `go test ./...`, etc.).
5. Record README vs observed behavior gaps in workpapers.

## Pass criteria

- [ ] Clone succeeds
- [ ] Documented happy path works **or** failure is explained
- [ ] Minimal path needs no surprise secrets
- [ ] License notices intact

*Updated: 2026-09-22*
