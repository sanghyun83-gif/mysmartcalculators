# CORE20 Week1 페이지별 UI 변경 체크리스트 (파일 경로 단위)

- 기준 문서: `docs/CORE20_MONETIZATION_WEEK1.md`
- 목적: Week1 A/B/C 실험 설계를 실제 코드 수정 단위로 바로 실행

---

## 0) 공통 사전 체크 (모든 페이지 공통)
- [ ] fold 상단(첫 화면)에서 **결과/입력 UI 우선 노출** 확인
- [ ] 광고/프로모션 블록이 계산 핵심 CTA를 가리지 않는지 확인
- [x] `calculator_start`, `calculator_complete`, `cta_click` 이벤트 정상 전송 확인
- [x] 경로 파라미터(`route`)가 실제 URL과 일치하는지 확인

---

## 1) A군 (Baseline 유지)

## 1-1. `/mortgage`
- 파일:
  - [x] `app/(calculators)/mortgage/MortgageClient.tsx`
  - [ ] `app/(calculators)/mortgage/page.tsx` (메타/구조 변경 필요 시)
- 적용:
  - [x] Week1 동안 UI/광고 배치 **무변경**
  - [x] 기존 CTA 위치/개수 유지
  - [x] 이벤트 전송만 정상 동작 확인

## 1-2. `/loan`
- 파일:
  - [x] `app/(calculators)/loan/LoanClient.tsx`
  - [ ] `app/(calculators)/loan/page.tsx`
- 적용:
  - [x] Week1 동안 UI/광고 배치 **무변경**
  - [x] 기존 CTA 위치/개수 유지
  - [x] 이벤트 전송만 정상 동작 확인

---

## 2) B군 (Balanced Monetization)

## 2-1. `/refinance`
- 파일:
  - [x] `app/(calculators)/refinance/RefinanceClient.tsx`
  - [ ] `app/(calculators)/refinance/page.tsx`
- 적용:
  - [x] fold 상단 광고성 블록 제거/비노출
  - [x] 결과 카드 하단 1개 슬롯 배치
  - [x] 본문 중단 1개 슬롯 배치
  - [x] 주요 CTA 2개(계산/보조 행동) 유지

## 2-2. `/tax`
- 파일:
  - [x] `app/(calculators)/tax/TaxClient.tsx`
  - [ ] `app/(calculators)/tax/page.tsx`
- 적용:
  - [x] fold 상단 광고성 블록 제거/비노출
  - [x] 결과 카드 하단 1개 슬롯 배치
  - [x] 본문 중단 1개 슬롯 배치
  - [x] 기존 export/copy CTA 흐름 유지

## 2-3. `/self-employment`
- 파일:
  - [x] `app/(calculators)/self-employment/SelfEmploymentClient.tsx`
  - [ ] `app/(calculators)/self-employment/page.tsx`
- 적용:
  - [x] fold 상단 광고성 블록 제거/비노출
  - [x] 결과 카드 하단 1개 슬롯 배치
  - [x] 본문 중단 1개 슬롯 배치
  - [x] export/copy CTA 가시성 유지

---

## 3) C군 (Conversion-First)

## 3-1. `/home-afford`
- 파일:
  - [x] `app/(calculators)/home-afford/HomeAffordClient.tsx`
  - [ ] `app/(calculators)/home-afford/page.tsx`
- 적용:
  - [x] fold 상단 광고 제거
  - [x] 계산 완료 후 결과 하단 1개 슬롯만 노출
  - [x] CTA 2개 강화(다음 행동/문의 또는 복사)
  - [ ] 긴 설명 섹션 기본 접힘(가능 시)

## 3-2. `/workers-comp`
- 파일:
  - [x] `app/(calculators)/workers-comp/WorkersCompClient.tsx`
  - [ ] `app/(calculators)/workers-comp/page.tsx`
- 적용:
  - [x] fold 상단 광고 제거
  - [x] 계산 완료 후 결과 하단 1개 슬롯만 노출
  - [x] 공유/내보내기 CTA 우선 가시화
  - [ ] 긴 본문 섹션 기본 접힘(가능 시)

## 3-3. `/bmi`
- 파일:
  - [x] `app/(calculators)/bmi/BMIClient.tsx`
  - [ ] `app/(calculators)/bmi/page.tsx`
- 적용:
  - [x] fold 상단 광고 제거
  - [x] 계산 완료 후 결과 하단 1개 슬롯만 노출
  - [x] 결과 카드/BMI 상태/권장 가이드를 최우선 배치
  - [x] FAQ/설명 섹션은 본문 하단 유지

---

## 4) 공통 컴포넌트/레이아웃 점검
- [ ] `app/layout.tsx` (전역 AdSense 로딩 상태 확인)
- [ ] `components/analytics/FoundationEventTracker.tsx` (노이즈 필터 + 스로틀 적용 확인)
- [ ] `lib/analytics/ga.ts` (`traffic_quality`, `route` 파라미터 포함 확인)

---

## 5) QA 실행 커맨드 세트
```bash
cd mysmartcalculators

# 변경 파일 lint
npx eslint \
  app/(calculators)/mortgage/MortgageClient.tsx \
  app/(calculators)/loan/LoanClient.tsx \
  app/(calculators)/refinance/RefinanceClient.tsx \
  app/(calculators)/tax/TaxClient.tsx \
  app/(calculators)/self-employment/SelfEmploymentClient.tsx \
  app/(calculators)/home-afford/HomeAffordClient.tsx \
  app/(calculators)/workers-comp/WorkersCompClient.tsx \
  app/(calculators)/bmi/BMIClient.tsx

# 무결성 체크
npm run audit:search
npm run audit:sitemap
npm run qa:structure

# 빌드 (디스크 여유 확보 후)
npm run build
```

---

## 6) 배포 전 최종 체크
- [x] A군 2개는 baseline 그대로 유지됨
- [x] B군 3개는 결과하단1+본문중단1 패턴 적용됨
- [x] C군 3개는 fold 광고 제거 + 결과후 단일 슬롯 적용됨
- [x] 8개 페이지 이벤트 파라미터 로그 샘플 확인 완료
- [ ] Week1 시작 시각/종료 시각 기록 완료
