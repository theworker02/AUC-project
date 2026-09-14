# AUC-Water: Atmospheric Water Generator Concept

**Status:** Revision 0.1 — conceptual architecture and design basis.  
**Purpose:** recover atmospheric moisture as treated utility water, with a possible downstream feed-water interface for a separately qualified PEM electrolyzer.  
**Release boundary:** this is not a manufacturing, potable-water, or PEM-feed construction release.

## Product boundary

An AWG separates water from ambient air. Output depends on dry-bulb temperature, relative humidity, wet-bulb temperature, contamination, coil condition, and operating point. Each yield claim must state its rating condition, airflow, measurement period, and delivered-water boundary.

The first product is treated non-potable utility water. Potable use needs separately engineered and permitted treatment, sampling, storage, and distribution. AWG condensate, HVAC condensate, and rainwater are never direct PEM-stack feed: any Phyto-Breeze supply crosses an independent, OEM-qualified purification and DI-polishing boundary.

## Technology selection

| Technology | Use case | Decision rule |
| --- | --- | --- |
| DX refrigerated condensation | Warm, humid locations | First option where pilot psychrometrics support useful dew-point depression and the system meets stated-condition yield and kWh/L targets. |
| Liquid desiccant absorption | Lower-RH sites with usable regeneration heat | Candidate only after carryover, corrosion, heat-source, and water-quality analysis. It is not automatically required below a specified RH. |
| Solid desiccant adsorption | Low-grade heat or intermittent-operation sites | Compare against DX and liquid desiccant using total energy, delivered-water quality, and maintenance burden. |

Do not use a generic kWh/L value as a procurement guarantee. Record electrical energy, thermal energy where applicable, water yield, and ambient condition together for every test interval.

## Condensation mass balance and rating method

For a DX coil:

\[
\dot m_{\mathrm{water}} = \dot m_{\mathrm{da}}\,(w_{\mathrm{in}}-w_{\mathrm{out}})
\]

where \(\dot m_{\mathrm{da}}\) is dry-air mass flow and \(w\) is humidity ratio in kg water/kg dry air. With measured volumetric airflow:

\[
\dot m_{\mathrm{da}} = \rho_{\mathrm{da}}Q_{\mathrm{air}}
\]

Record inlet and leaving dry-bulb temperature, RH, pressure, airflow, condensate mass, electrical energy, and run duration. A condition such as 30 °C / 80% RH may be used as a comparison rating; it cannot be treated as annual production without an hourly site psychrometric profile.

## Conceptual process train

```text
ambient air
  → weather screen and mechanical coil-protection filter
  → DX evaporator or selected moisture-capture module
  → drainable condensate pan and covered collection sump
  → source-water monitoring and treatment train
  → treated utility-water tank
  → non-potable export
              └→ optional independent OEM-qualified DI-polishing interface → Phyto-Breeze boundary
```

The baseline excludes electrostatic air cleaning. It can introduce an avoidable ozone/byproduct and corrosion-control problem near an open water-collection system. Select mechanical filtration for the local particulate loading and coil-maintenance requirement.

## Four-bay conceptual enclosure

| Bay | Function | Boundary requirements |
| --- | --- | --- |
| 1 — Power and HVAC | Compressor, fan drive, controls, electrical protection | Electrical segregation and condensate-leak protection. |
| 2 — Air sweep and extraction | Fans, filters, DX coil or desiccant contactor | Accessible cleaning, drain slope, air-bypass control, and humidity/airflow measurement. |
| 3 — Condensate and storage | Drainable pan, covered sump, level instrumentation | Cleanable wetted surfaces, overflow containment, and no assumption that UV alone makes water potable. |
| 4 — Water treatment and delivery | Carbon/particle treatment, optional RO/DI, UV as applicable, delivery pump | Defined product monitoring, reject/concentrate handling, and backflow protection. |

This is a spatial concept. Equipment sizing, materials, ventilation, drainage, electrical rating, treatment sequence, and final layout remain design holds.

## Release dependencies

- **Climate profile:** collect representative dry-bulb, RH, wet-bulb, particulate, and energy data.
- **Water specification:** select the actual end use: utility, process, potable, or OEM-defined DI feed water.
- **Thermal integration:** waste heat may be evaluated for desiccant regeneration. Any heat-pump or refrigeration integration needs a vendor-specific energy model and controls design.
- **Water management:** define turnover, cleaning, microbial control, overflow, backflow prevention, off-spec diversion, and RO/DI reject routing.
- **Phyto-Breeze interface:** the selected PEM OEM's conductivity/resistivity, contaminant, flow, temperature, and pressure requirements govern. The systems retain independent controls, shutdowns, and maintenance boundaries.

## Pilot data package

Before selecting a production technology, provide:

1. Time-synchronised ambient psychrometric readings and airflow.
2. Net water after treatment losses, in L/h and L/day.
3. Electrical kWh/L and thermal kWh-th/L where used.
4. Source and delivered-water analytics against the declared end-use target.
5. Pressure drop, fouling rate, cleaning frequency, and downtime.
6. Tank turnover and off-spec diversion events.
7. A comparison of observed production with the stated rating condition.

## Construction release gate

Procurement and fabrication require approval of the site climate profile, product-water specification, process and water-treatment P&ID, drainage/reject-disposal plan, selected-technology energy model, and—when feeding Phyto-Breeze—the PEM OEM's written feed-water interface requirements.
