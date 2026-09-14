# AUC Portfolio Interface Control

## Portfolio rule

Shared branding, remote telemetry, and energy planning do not create a shared process system.

| From | To | Permitted interface | Prohibited interface |
| --- | --- | --- | --- |
| AUC-Air | Sentinel | Read-only telemetry and alarms | Air duct, filter, UV/HV, emergency-stop sharing |
| AUC-Water | Sentinel | Water quality, level, yield, status | Control authority that bypasses water safeguards |
| Phyto-Breeze | Sentinel | Read-only production/safety status | Shared gas header, relief header, shutdown circuit |
| AUC-Water | Phyto-Breeze | Metered treated-water delivery after OEM-qualified DI interface | Raw condensate, rainwater, shared tank, shared drain, common maintenance isolation |
| Power | All systems | Site load schedule and metering | A safety function dependent on another module's controller |

## Interface documentation

Every physical interface requires an approved ICD that defines medium, flow/pressure/temperature range, quality, isolation, backflow protection, ownership, metering, failure position, maintenance boundary, and acceptance test.

