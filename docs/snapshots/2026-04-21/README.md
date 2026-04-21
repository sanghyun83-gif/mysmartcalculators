# Snapshot Archive — 2026-04-21

목적: Core20 유지 / Non-core 제거 작업 전 기준선 데이터 보관

## 저장 규칙
- 파일명 형식: `{source}_{range}_{exportedAt}.csv`
- 권장 기간: 최근 28일
- 타임존: KST 또는 GA/GSC 기본 타임존 명시

## 필수 수집 항목

### 1) Google Search Console (GSC)
- [ ] 전체 페이지 성과 CSV (노출/클릭/CTR/평균순위)
- [ ] 계산기 URL만 필터한 CSV
- [ ] 상위 국가/기기 분포 CSV

권장 파일명 예시:
- `gsc_pages_last28d_2026-04-21.csv`
- `gsc_calculator_urls_last28d_2026-04-21.csv`
- `gsc_country_device_last28d_2026-04-21.csv`

### 2) Google Analytics 4 (GA4)
- [ ] 랜딩 페이지 성과 CSV (세션/참여율/평균 참여시간)
- [ ] 이벤트 CSV (`calculator_start`, `calculator_complete`, `cta_click`)
- [ ] 국가 분포 CSV

권장 파일명 예시:
- `ga4_landing_last28d_2026-04-21.csv`
- `ga4_events_calculator_last28d_2026-04-21.csv`
- `ga4_country_last28d_2026-04-21.csv`

### 3) AdSense
- [ ] 상위 URL 수익 CSV (Page RPM/Impression/CTR)
- [ ] 사이트 전체 28일 요약 CSV

권장 파일명 예시:
- `adsense_top_urls_last28d_2026-04-21.csv`
- `adsense_site_summary_last28d_2026-04-21.csv`

## 수집 로그
- 수집 담당자: Sam
- 수집 상태: IN PROGRESS
- 비고: 외부 콘솔에서 수동 export 필요
