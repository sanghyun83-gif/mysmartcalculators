# CORE20 Reporting Spec (GA4/GSC/AdSense)

- Date: 2026-04-21
- Scope: Core20-only 운영 체계에서 사용하는 표준 리포트 정의
- 목적: 제거 작업 이후 성과를 동일 기준으로 비교/판단

---

## 1) 공통 원칙

1. 기본 비교 기간
   - 7일(주간 운영)
   - 28일(추세 판단)

2. 분석 단위
   - Core20 묶음(전체)
   - Core20 개별 URL

3. 데이터 소스
   - 트래픽/행동: GA4
   - 검색 노출/클릭: GSC
   - 수익: AdSense

4. URL 스코프
   - 포함: Core20 루트 + Core20 하위 경로
   - 제외: Non-core URL, sandbox 실험 페이지

---

## 2) Core20 식별 규칙

Core IDs:
- mortgage, loan, refinance, tax, self-employment
- home-afford, compound-interest, tip, percentage, scientific
- time-calculator, conversion, date, age, bmi
- calorie, body-fat, pregnancy, ovulation, workers-comp

필수 이벤트 파라미터:
- `route`
- `calculator_id` (Core 경로일 때)
- `traffic_quality`
- `calculator_scope` (`core20` 또는 `non_core_filtered`)

---

## 3) GA4 리포트 정의

### 3-1. 운영 KPI (Primary)
1. Users (Core20)
2. Sessions (Core20)
3. Engagement rate
4. Avg engagement time per session
5. `calculator_start` 이벤트 수
6. `calculator_complete` 이벤트 수
7. Complete rate = `calculator_complete` / `calculator_start`
8. `cta_click` 수

### 3-2. 품질 필터
- 기본 세그먼트 A: `traffic_quality = human_like`
- 비교 세그먼트 B: `traffic_quality != human_like`

### 3-3. 대시보드 최소 카드
- Core20 전체 Complete rate (7d, 28d)
- Top 5 / Bottom 5 Core calculators by Complete rate
- Core20 Engagement trend (day)
- CTA click trend (day)

---

## 4) GSC 리포트 정의

### 4-1. Core20 Search KPI
1. Impressions
2. Clicks
3. CTR
4. Average position

### 4-2. 뷰 구성
- Core20 URL 필터 뷰
- 국가별 분해(US 우선)
- 기기별 분해(모바일/데스크탑)

### 4-3. 주간 체크 항목
- Core20 전체 클릭 증감률 (WoW)
- 하락 URL 3개 원인 기록
- 신규 노출 증가 쿼리 10개 기록

---

## 5) AdSense 리포트 정의

### 5-1. 수익 KPI
1. Page views (Core20)
2. Impressions
3. CTR
4. Page RPM
5. Estimated earnings

### 5-2. 운영 관점 비교
- Core20 전체 RPM 7d vs 28d
- URL별 RPM 순위
- CTR 급락 페이지 경보(전주 대비 -20% 이상)

---

## 6) 최종 판정 규칙 (운영용)

### Continue
- Complete rate 유지/개선
- Core20 RPM 상승 추세
- GSC 클릭/노출 안정 또는 증가

### Investigate
- Complete rate 급락(전주 대비 -15% 이하)
- RPM 급락(전주 대비 -20% 이하)
- 특정 Core URL의 클릭 급감

### Rollback 후보
- 기술 오류 + KPI 급락 동시 발생
- 2개 이상 핵심 KPI가 7일 이상 악화

---

## 7) 산출물 템플릿

주간 보고서 파일명:
- `docs/CORE20_WEEKLY_REPORT_YYYY-MM-DD.md`

필수 섹션:
1. 요약(좋아진 점/나빠진 점)
2. KPI 표 (GA4/GSC/AdSense)
3. 하락 원인 가설
4. 다음주 액션 3개

---

## 8) 책임/운영 루틴

- 월~금: 일일 모니터링(간단 지표)
- 매주 1회: 주간 리포트 업데이트
- 월 1회: Core20 재평가(유지/교체 후보)

