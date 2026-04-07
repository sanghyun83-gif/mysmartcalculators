# CORE20 Monetization Report - Week 1 (Experiment Design)

## 기간
- 시작: 2026-04-08
- 종료: 2026-04-14 (7일)

## 목표
- Core 20 중 고의도 8개 페이지에서 **수익(RPM) + 품질(engagement/complete rate)** 동시 개선 검증
- 단기 의사결정: Week2에 유지/확대/중단할 UI/광고 패턴 식별

---

## 실험 대상 URL (8)
1. `/mortgage`
2. `/loan`
3. `/refinance`
4. `/tax`
5. `/self-employment`
6. `/home-afford`
7. `/workers-comp`
8. `/bmi`

---

## 실험군 정의 (A/B/C)

### A군: Baseline (현행 Auto Ads 유지)
- 목적: 비교 기준선
- 설정:
  - 기존 레이아웃/문구/광고 설정 그대로 유지
  - CTA 버튼 위치 변경 없음
- 기대:
  - 안정적 데이터 확보, 과도한 변동 최소화

### B군: Balanced Monetization
- 목적: RPM 개선 + UX 손상 최소화
- 설정:
  - 상단 Hero 바로 아래 광고성 블록 배치 금지
  - 결과 카드 아래 1개, 본문 중단 1개 수준으로 노출 밀도 완화
  - 주요 CTA는 fold 상단 1개 고정 + 결과 영역 1개
  - 결과/핵심 값 가시성 우선(광고보다 위)
- 기대:
  - A 대비 RPM 소폭~중폭 상승
  - complete rate 하락 최소화

### C군: Conversion-First
- 목적: complete rate 최대화 후 후행 수익 확인
- 설정:
  - fold 상단 광고 제거
  - 계산 완료 직후 결과 하단에만 광고 노출
  - CTA 2개 강화(복사/공유/다음 단계)
  - 긴 설명/FAQ는 아코디언 접기 기본값
- 기대:
  - complete rate/engagement 상승
  - RPM은 B 대비 낮을 수 있으나 세션 품질 개선

---

## 페이지별 배정 (Week1)

| 페이지 | 실험군 | 구체값 |
| --- | --- | --- |
| `/mortgage` | A | Baseline 고정 (현행 유지) |
| `/loan` | A | Baseline 고정 (현행 유지) |
| `/refinance` | B | 결과 카드 하단 1 + 본문 중단 1, 상단 광고 금지 |
| `/tax` | B | 결과 카드 하단 1 + 본문 중단 1, CTA 2개 유지 |
| `/self-employment` | B | 결과 카드 하단 1 + 본문 중단 1, export CTA 유지 |
| `/home-afford` | C | fold 상단 광고 제거, 계산 완료 후 1개 노출 |
| `/workers-comp` | C | fold 상단 광고 제거, 결과/공유 CTA 우선 |
| `/bmi` | C | fold 상단 광고 제거, 결과 카드/건강 가이드 우선 |

> 샘플 균형: A 2개 / B 3개 / C 3개

---

## KPI 측정 정의

### 공통 KPI
- `sessions`
- `engaged_sessions`
- `engagement_rate`
- `avg_engagement_time`
- `calculator_start`
- `calculator_complete`
- `calculator_complete_rate = complete/start`

### 수익 KPI
- `Page RPM`
- `Ad CTR`
- `Impressions`
- `Estimated earnings`

### 품질 게이트(Week1 임시)
- complete_rate가 Baseline 대비 **-10% 이내**면 허용
- engagement_rate가 Baseline 대비 **유지 또는 증가**
- RPM이 Baseline 대비 **+10% 이상**이면 우수

---

## 실행 순서
1. 대상 8개 URL 실험군 배정 고정
2. 실험군별 UI/광고 배치 적용
3. GA4 탐색 리포트 분할(페이지 경로 + 이벤트)
4. AdSense 보고서에서 페이지별 RPM/CTR 수집
5. 7일 종료 후 군별 비교표 작성

---

## 수집 테이블 (Week1 결과 입력용)

| URL | Group | Sessions | Engaged | Engagement Rate | Avg Time | Start | Complete | Complete Rate | RPM | Ad CTR |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| /mortgage | A |  |  |  |  |  |  |  |  |  |
| /loan | A |  |  |  |  |  |  |  |  |  |
| /refinance | B |  |  |  |  |  |  |  |  |  |
| /tax | B |  |  |  |  |  |  |  |  |  |
| /self-employment | B |  |  |  |  |  |  |  |  |  |
| /home-afford | C |  |  |  |  |  |  |  |  |  |
| /workers-comp | C |  |  |  |  |  |  |  |  |  |
| /bmi | C |  |  |  |  |  |  |  |  |  |

---

## Week2 진입 조건
- B군이 A 대비 RPM 개선 + complete_rate 방어 성공 시 B 확대
- C군이 complete_rate/engagement 유의미 개선 시 C 요소를 B에 부분 이식
- complete_rate 급락 페이지는 즉시 A로 롤백
